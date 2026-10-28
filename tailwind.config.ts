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
        charcoal: {
          DEFAULT: "#101315",
          950: "#090B0C",
          900: "#101315",
          850: "#14181B",
          800: "#1A1F22",
          700: "#242A2E",
          600: "#363C41",
        },
        ivory: {
          DEFAULT: "#F5F3EE",
          soft: "#FAF9F5",
          muted: "#E8E4DA",
          dark: "#D4CEBF",
        },
        sand: {
          DEFAULT: "#C8B99D",
          light: "#D8CCB5",
          dark: "#A89778",
          glow: "rgba(200, 185, 157, 0.12)",
        },
        olive: {
          DEFAULT: "#535B48",
          light: "#6A745C",
          dark: "#3F4537",
          subtle: "rgba(83, 91, 72, 0.2)",
        },
        muted: {
          DEFAULT: "#8E9590",
          light: "#A3ABA5",
          dark: "#5A615C",
        },
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "Cairo", "sans-serif"],
        manrope: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      boxShadow: {
        cinematic: "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
        card: "0 4px 20px rgba(0, 0, 0, 0.4)",
        glow: "0 0 30px rgba(200, 185, 157, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;

