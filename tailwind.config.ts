import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFF7EC",
          50: "#FFFBF4",
          100: "#FFF7EC",
          200: "#FFEED6",
        },
        peach: {
          50: "#FFE6D1",
          100: "#FFD5B4",
          200: "#FDC194",
          300: "#FAB079",
          400: "#F7A978",
          500: "#F28C52",
        },
        coral: {
          400: "#EE7E47",
          500: "#E86A3A",
          600: "#C9552A",
        },
        chocolate: {
          500: "#6B3A22",
          600: "#4D2815",
          700: "#3A1F14",
          800: "#2A160D",
          900: "#1A0B06",
        },
        gold: {
          300: "#E3BB6E",
          400: "#D4A24A",
          500: "#B98735",
          600: "#8F6624",
        },
        mint: {
          200: "#D7EFE1",
          300: "#BFE3CF",
        },
        rose: {
          200: "#FAD1D9",
          300: "#F4B5C1",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(58, 31, 20, 0.18)",
        glow: "0 0 0 1px rgba(212, 162, 74, 0.4), 0 20px 60px -20px rgba(232, 106, 58, 0.35)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #F7A978 0%, #E86A3A 55%, #3A1F14 100%)",
        "cream-radial":
          "radial-gradient(80% 60% at 50% 0%, #FFE6D1 0%, #FFF7EC 50%, #FFFBF4 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drip: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(1.15)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        drip: "drip 2.8s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [forms({ strategy: "class" })],
};

export default config;
