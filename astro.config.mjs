// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Update `site` to your real production domain — it's used for the
// sitemap, canonical URL, and Open Graph absolute URLs. Swap this one line
// when a custom domain is ready (and the Sitemap line in public/robots.txt).
const SITE = "https://portfolio-six-amber-69.vercel.app";

export default defineConfig({
  site: SITE,
  output: "static",
  integrations: [sitemap()],
  build: {
    // Single-page site: inline all CSS into the HTML to eliminate the
    // render-blocking stylesheet request on first paint (critical CSS).
    inlineStylesheets: "always",
  },
  compressHTML: true,
});
