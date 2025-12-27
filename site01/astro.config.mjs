import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://site01-4im.pages.dev",
  integrations: [sitemap()],
});
