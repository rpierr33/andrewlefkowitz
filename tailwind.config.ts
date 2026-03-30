import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        "navy-light": "#132035",
        "navy-lighter": "#1a2d4a",
        gold: "#C9A84C",
        "gold-light": "#D4B85E",
        "gold-dark": "#B89A3F",
        cream: "#F5F0E8",
        stone: "#E8E0D0",
        "stone-dark": "#D4C9B5",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
