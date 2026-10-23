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
        navy: {
          50: "#f0f5fc",
          100: "#e0ebf8",
          200: "#c7dbf2",
          300: "#a1c3ea",
          400: "#73a3de",
          500: "#5084d1",
          600: "#396ac3",
          700: "#2d54ad",
          800: "#1e3a7a",
          850: "#162b5b",
          900: "#0f1d3e",
          950: "#091226",
        },
        primary: "#0B1528",     // Rich midnight navy
        secondary: "#16233B",   // Deep navy surface
        navyBorder: "#1E3252",  // Navy border for dark cards
        accent: "#2563EB",      // Professional blue accent (WCAG AA accessible)
        accentHover: "#1D4ED8", // Darker blue hover
        surface: {
          light: "#F8FAFC",
          card: "#FFFFFF",
          subtle: "#F1F5F9",
        }
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
