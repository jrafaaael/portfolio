const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        javascript: "#F0DB4F",
        typescript: "#007acc",
        node: "#83CD29",
        arduino: "#00979c",
        python: "#FFD845",
        react: "#61DAFB",
        tailwind: "#38b2ac",
      },
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
