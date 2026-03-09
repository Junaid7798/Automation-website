import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "t-primary": "rgb(var(--primary) / <alpha-value>)",
        "t-secondary": "rgb(var(--secondary) / <alpha-value>)",
        "t-accent": "rgb(var(--accent) / <alpha-value>)",
        "t-accent-secondary": "rgb(var(--accent-secondary) / <alpha-value>)",
        "t-background": "rgb(var(--background) / <alpha-value>)",
        "t-text-primary": "rgb(var(--text-main) / <alpha-value>)",
        "t-text-muted": "rgb(var(--text-muted) / <alpha-value>)",
        "t-card": "rgb(var(--card) / <alpha-value>)",
        "card-border": "rgb(var(--card-border) / <alpha-value>)",
        warm: "rgb(var(--accent-secondary) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
