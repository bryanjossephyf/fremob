import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import partytown from "@astrojs/partytown"

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://fremob.vercel.app/",
  integrations: [tailwind(), mdx(), sitemap(), icon(), react(), sitemap(), partytown({config: {forward: ["dataLayer.push"]}})]
}); 