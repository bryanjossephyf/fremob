/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      backgroundImage: {
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("flowbite/plugin")
  ],
};
