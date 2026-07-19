import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { getSpotlightFeed } from "./src/spotlight-feed.js";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [{
    name: "upport-local-spotlight-api",
    configureServer(server) {
      server.middlewares.use("/api/spotlight", async (request, response) => {
        if (request.method !== "GET") {
          response.statusCode = 405;
          response.setHeader("Allow", "GET");
          response.end(JSON.stringify({ error: "method_not_allowed" }));
          return;
        }
        try {
          const feed = await getSpotlightFeed();
          response.statusCode = 200;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Cache-Control", "public, max-age=300");
          response.setHeader("X-Content-Type-Options", "nosniff");
          response.end(JSON.stringify(feed));
        } catch {
          response.statusCode = 503;
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.setHeader("Retry-After", "300");
          response.end(JSON.stringify({ items: [], error: "feed_unavailable" }));
        }
      });
    },
  }],
  build: {
    rollupOptions: {
      input: {
        home: resolve(projectRoot, "index.html"),
        support: resolve(projectRoot, "suporte-ti.html"),
        erp: resolve(projectRoot, "erp.html"),
        crm: resolve(projectRoot, "crm.html"),
        software: resolve(projectRoot, "software.html"),
        empresa: resolve(projectRoot, "empresa.html"),
        contato: resolve(projectRoot, "contato.html"),
        privacidade: resolve(projectRoot, "privacidade.html"),
        notFound: resolve(projectRoot, "404.html"),
      },
    },
  },
});
