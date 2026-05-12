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
        earth: {
          50: "#faf7f2",
          100: "#f5f0e8",
          200: "#e8dfd0",
          300: "#d4c4b0",
          500: "#8b7355",
          600: "#6b5344",
          700: "#4a3d32",
          800: "#3d3429",
          900: "#1f1a16",
        },
        human: {
          400: "#4a7ab5",
          500: "#2d5f8f",
          600: "#1e4a7a",
          700: "#173a63",
          800: "#0f2d4d",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-dm-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
