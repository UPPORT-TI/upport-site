import { XMLParser } from "fast-xml-parser";
import { readTextLimited } from "./server/http";

export interface SpotlightItem {
  source: string;
  category: string;
  title: string;
  excerpt: string;
  url: string;
  image: string;
  publishedAt: string;
  accent: string;
}

interface FeedSource {
  source: string;
  category: string;
  feed: string;
  site: string;
  accent: string;
  allowedHosts: readonly string[];
}

const MAX_FEED_BYTES = 1_000_000;
const MAX_PAGE_BYTES = 500_000;
const MAX_FEED_ITEMS = 50;
const REQUEST_HEADERS = { "User-Agent": "Upport-Spotlight/2.0 (+https://upport.com.br)", Accept: "application/rss+xml, application/atom+xml, application/xml, text/xml;q=0.9" };

const sources: readonly FeedSource[] = [
  { source: "Ubuntu", category: "Sistemas e infraestrutura", feed: "https://ubuntu.com/blog/feed", site: "https://ubuntu.com/blog", accent: "#e95420", allowedHosts: ["ubuntu.com"] },
  { source: "PostgreSQL", category: "Dados e comunidade", feed: "https://www.postgresql.org/news.rss", site: "https://www.postgresql.org/about/news/", accent: "#336791", allowedHosts: ["postgresql.org"] },
  { source: "n8n", category: "Automação e integrações", feed: "https://blog.n8n.io/rss/", site: "https://blog.n8n.io/", accent: "#ea4b71", allowedHosts: ["n8n.io"] },
  { source: "Netgate", category: "Redes e segurança", feed: "https://www.netgate.com/blog/rss.xml", site: "https://www.netgate.com/blog", accent: "#173b66", allowedHosts: ["netgate.com"] },
];

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@",
  processEntities: false,
  htmlEntities: false,
});

function record(value: unknown): Record<string, unknown> | undefined {
  return value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : undefined;
}

function asArray<T>(value: T | T[] | undefined): T[] {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

function text(value: unknown): string {
  if (typeof value === "string" || typeof value === "number") return String(value);
  const valueRecord = record(value);
  return valueRecord ? text(valueRecord["#text"] ?? valueRecord.__cdata ?? "") : "";
}

function clean(value: unknown, max = 4_000): string {
  return text(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function allowedHost(hostname: string, allowedHosts: readonly string[]): boolean {
  const normalized = hostname.toLowerCase();
  return allowedHosts.some((host) => normalized === host || normalized.endsWith(`.${host}`));
}

function absoluteHttpsUrl(value: string, base: string, allowedHosts?: readonly string[]): string {
  try {
    const url = new URL(value, base);
    if (url.protocol !== "https:") return "";
    if (allowedHosts && !allowedHost(url.hostname, allowedHosts)) return "";
    url.username = "";
    url.password = "";
    url.hash = "";
    url.pathname = url.pathname.replace(/\/{2,}/g, "/");
    return url.toString();
  } catch {
    return "";
  }
}

async function fetchFromAllowedHosts(url: string, allowedHosts: readonly string[], init: RequestInit): Promise<Response> {
  let currentUrl = absoluteHttpsUrl(url, url, allowedHosts);
  if (!currentUrl) throw new Error("url_not_allowed");

  for (let redirects = 0; redirects <= 3; redirects += 1) {
    const response = await fetch(currentUrl, { ...init, redirect: "manual" });
    if (response.status < 300 || response.status >= 400) return response;
    const location = response.headers.get("location");
    if (!location || redirects === 3) throw new Error("redirect_not_allowed");
    currentUrl = absoluteHttpsUrl(location, currentUrl, allowedHosts);
    if (!currentUrl) throw new Error("redirect_not_allowed");
  }
  throw new Error("redirect_not_allowed");
}

function summarize(value: unknown): string {
  const excerpt = clean(value);
  if (excerpt.length <= 180) return excerpt;
  return `${excerpt.slice(0, 177).replace(/\s+\S*$/, "")}...`;
}

async function pageImage(url: string, allowedHosts: readonly string[]): Promise<string> {
  const safeUrl = absoluteHttpsUrl(url, url, allowedHosts);
  if (!safeUrl) return "";
  try {
    const response = await fetchFromAllowedHosts(safeUrl, allowedHosts, {
      headers: { "User-Agent": REQUEST_HEADERS["User-Agent"], Accept: "text/html, application/xhtml+xml" },
      signal: AbortSignal.timeout(5_000),
    });
    if (!response.ok || !response.headers.get("content-type")?.toLowerCase().includes("text/html")) return "";
    const html = await readTextLimited(response, MAX_PAGE_BYTES);
    const match = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
      ?? html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
    return match ? absoluteHttpsUrl(match[1], safeUrl) : "";
  } catch {
    return "";
  }
}

function imageFrom(item: Record<string, unknown>, articleUrl: string): string {
  const media = asArray(item["media:content"])[0];
  const thumbnail = asArray(item["media:thumbnail"])[0];
  const enclosure = asArray(item.enclosure)
    .map(record)
    .find((entry) => entry && String(entry["@type"] ?? "").startsWith("image/"));
  const structured = String(record(media)?.["@url"] ?? record(thumbnail)?.["@url"] ?? enclosure?.["@url"] ?? "");
  if (structured) return absoluteHttpsUrl(structured, articleUrl);

  const html = text(item["content:encoded"] ?? item.description);
  const match = html.match(/<img[^>]+(?:src|data-src)=["']([^"']+)["']/i);
  return match ? absoluteHttpsUrl(match[1], articleUrl) : "";
}

function channelFrom(document: unknown): Record<string, unknown> {
  const root = record(document) ?? {};
  return record(record(root.rss)?.channel) ?? record(root.feed) ?? {};
}

function itemLink(item: Record<string, unknown>): string {
  const link = item.link;
  return record(link) ? String(record(link)?.["@href"] ?? text(link)) : text(link);
}

function itemDate(value: unknown): string {
  const timestamp = Date.parse(text(value));
  return Number.isFinite(timestamp) ? new Date(timestamp).toISOString() : "";
}

async function latestFrom(source: FeedSource): Promise<SpotlightItem | null> {
  const response = await fetchFromAllowedHosts(source.feed, source.allowedHosts, {
    headers: REQUEST_HEADERS,
    signal: AbortSignal.timeout(8_000),
  });
  if (!response.ok) throw new Error("feed_unavailable");

  const xml = await readTextLimited(response, MAX_FEED_BYTES);
  const channel = channelFrom(parser.parse(xml) as unknown);
  const items = asArray(channel.item ?? channel.entry).map(record).filter((item): item is Record<string, unknown> => Boolean(item)).slice(0, MAX_FEED_ITEMS);
  const candidates = items.map((item): SpotlightItem => {
    const url = absoluteHttpsUrl(itemLink(item) || source.site, source.site, source.allowedHosts);
    return {
      source: source.source,
      category: source.category,
      title: clean(item.title, 240),
      excerpt: summarize(item.description ?? item.summary ?? item["content:encoded"]),
      url,
      image: imageFrom(item, url || source.site),
      publishedAt: itemDate(item.pubDate ?? item.published ?? item.updated),
      accent: source.accent,
    };
  }).filter((item) => item.title && item.url && item.publishedAt);

  const latest = candidates.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))[0];
  if (latest && !latest.image) latest.image = await pageImage(latest.url, source.allowedHosts);
  return latest ?? null;
}

export async function getSpotlightFeed(): Promise<{ items: SpotlightItem[]; updatedAt: string }> {
  const results = await Promise.allSettled(sources.map(latestFrom));
  const items = results.flatMap((result) => result.status === "fulfilled" && result.value ? [result.value] : []);
  if (!items.length) throw new Error("feed_unavailable");
  return { items, updatedAt: new Date().toISOString() };
}
