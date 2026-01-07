import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://site01.360winspt.com",
  integrations: [sitemap()],
});
