import { getSpotlightFeed } from "../src/spotlight-feed";
import { jsonResponse } from "../src/server/http";

export async function handleSpotlightRequest(request: Request): Promise<Response> {
  if (request.method !== "GET") return jsonResponse({ error: "method_not_allowed" }, 405, { Allow: "GET" });
  try {
    const feed = await getSpotlightFeed();
    return jsonResponse(feed, 200, {
      "Cache-Control": "public, max-age=300",
      "Vercel-CDN-Cache-Control": "public, max-age=21600, stale-while-revalidate=86400, stale-if-error=604800",
    });
  } catch {
    return jsonResponse({ items: [], error: "feed_unavailable" }, 503, { "Retry-After": "300" });
  }
}

export default {
  fetch: handleSpotlightRequest,
};
