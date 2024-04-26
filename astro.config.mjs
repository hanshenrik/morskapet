import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://hanshenrik.github.io/morskapet/",
  base: "/morskapet/",
  prefetch: true,
  integrations: [tailwind(), sitemap(), robotsTxt(), mdx()],
});
