import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "opacity-0",
    "opacity-100",
    "translate-y-0",
    "translate-y-4",
    "translate-y-8",
    "-translate-y-4",
    "transition-all",
    "duration-700",
    "duration-1000",
    "ease-out",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#c9a84c",
        "gold-dark": "#b8973b",
        cream: "#f5f0e8",
        dark: "#1a1a1a",
        "dark-800": "#222222",
        "dark-700": "#2a2a2a",
        "dark-600": "#333333",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      letterSpacing: {
        "extra-wide": "0.2em",
        "ultra-wide": "0.3em",
      },
      lineHeight: {
        "extra-loose": "2",
        loose: "1.8",
      },
    },
  },
  plugins: [],
};

export default config;
