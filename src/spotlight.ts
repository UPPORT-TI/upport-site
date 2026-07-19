import { translateText } from "./i18n.js";
import type { SpotlightItem } from "./spotlight-feed.js";

interface SpotlightResponse {
  items: SpotlightItem[];
  updatedAt: string;
}

const sourceLinks = [
  ["Ubuntu", "https://ubuntu.com/blog"],
  ["PostgreSQL", "https://www.postgresql.org/about/news/"],
  ["n8n", "https://blog.n8n.io/"],
  ["Netgate", "https://www.netgate.com/blog"],
] as const;

function safeHttpsUrl(value: string): string {
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : "";
  } catch {
    return "";
  }
}

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const locale = document.documentElement.lang === "pt-BR" ? "pt-BR" : document.documentElement.lang;
  return new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

function isSpotlightItem(value: unknown): value is SpotlightItem {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const item = value as Record<string, unknown>;
  return ["source", "category", "title", "excerpt", "url", "image", "publishedAt", "accent"]
    .every((key) => typeof item[key] === "string")
    && Boolean(safeHttpsUrl(String(item.url)))
    && (!item.image || Boolean(safeHttpsUrl(String(item.image))))
    && !Number.isNaN(Date.parse(String(item.publishedAt)))
    && /^#[\da-f]{6}$/i.test(String(item.accent));
}

function parseSpotlightResponse(value: unknown): SpotlightResponse | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const response = value as Record<string, unknown>;
  if (!Array.isArray(response.items) || typeof response.updatedAt !== "string" || Number.isNaN(Date.parse(response.updatedAt))) return null;
  const items = response.items.filter(isSpotlightItem).slice(0, 8);
  return items.length ? { items, updatedAt: response.updatedAt } : null;
}

function externalLink(url: string, className?: string): HTMLAnchorElement {
  const link = document.createElement("a");
  link.href = safeHttpsUrl(url);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  if (className) link.className = className;
  return link;
}

function cardElement(item: SpotlightItem): HTMLElement {
  const article = document.createElement("article");
  article.className = "news-card";

  const mediaLink = externalLink(item.url, `news-card-media${item.image ? "" : " is-fallback"}`);
  mediaLink.style.setProperty("--source-accent", item.accent);
  if (item.image) {
    const image = document.createElement("img");
    image.src = safeHttpsUrl(item.image);
    image.alt = "";
    image.loading = "lazy";
    image.referrerPolicy = "no-referrer";
    mediaLink.append(image);
  } else {
    const mark = document.createElement("span");
    mark.className = "spotlight-source-mark";
    mark.textContent = item.source;
    mediaLink.append(mark);
  }

  const meta = document.createElement("div");
  meta.className = "news-card-meta";
  const category = document.createElement("span");
  category.textContent = `${item.source} · ${translateText(item.category)}`;
  const time = document.createElement("time");
  time.dateTime = item.publishedAt;
  time.textContent = formatDate(item.publishedAt);
  meta.append(category, time);

  const heading = document.createElement("h3");
  const titleLink = externalLink(item.url);
  titleLink.textContent = item.title;
  heading.append(titleLink);

  const excerpt = document.createElement("p");
  excerpt.textContent = item.excerpt;
  const readLink = externalLink(item.url, "news-card-link");
  readLink.append(`${translateText("Ler na fonte")} `);
  const arrow = document.createElement("span");
  arrow.ariaHidden = "true";
  arrow.textContent = "→";
  readLink.append(arrow);

  article.append(mediaLink, meta, heading, excerpt, readLink);
  return article;
}

function unavailableElement(): HTMLElement {
  const container = document.createElement("div");
  container.className = "spotlight-unavailable";
  const heading = document.createElement("strong");
  heading.textContent = translateText("O radar está atualizando.");
  const message = document.createElement("p");
  message.textContent = translateText("Enquanto isso, acesse diretamente as fontes oficiais.");
  const links = document.createElement("div");
  for (const [name, url] of sourceLinks) {
    const link = externalLink(url);
    link.textContent = `${name} →`;
    links.append(link);
  }
  container.append(heading, message, links);
  return container;
}

export function initSpotlight(): void {
  const grid = document.querySelector<HTMLElement>("[data-spotlight-grid]");
  const status = document.querySelector<HTMLElement>("[data-spotlight-status]");
  if (!grid || !status) return;

  let response: SpotlightResponse | null = null;
  const render = (): void => {
    if (!response) return;
    grid.replaceChildren(...response.items.map(cardElement));
    grid.setAttribute("aria-busy", "false");
    status.textContent = `${translateText("Atualizado automaticamente")} · ${formatDate(response.updatedAt)}`;
  };

  fetch("/api/spotlight", {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(10_000),
  })
    .then(async (result) => {
      if (!result.ok) throw new Error("feed_unavailable");
      return parseSpotlightResponse(await result.json() as unknown);
    })
    .then((data) => {
      if (!data) throw new Error("invalid_feed");
      response = data;
      render();
    })
    .catch(() => {
      grid.replaceChildren(unavailableElement());
      grid.setAttribute("aria-busy", "false");
      status.textContent = translateText("Fontes oficiais");
    });

  window.addEventListener("upport:languagechange", render);
}
