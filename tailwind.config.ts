import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        primary: "#0B1528",
        secondary: "#16233B",
        navyBorder: "#1E3252",
        accent: "#3B82F6",
        accentHover: "#2563EB",
        accentViolet: "#8B5CF6",
        surface: {
          light: "#F8FAFC",
          card: "#FFFFFF",
          subtle: "#F1F5F9",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-sora)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(59, 130, 246, 0.45)",
        glowViolet: "0 0 80px -20px rgba(139, 92, 246, 0.4)",
        card: "0 10px 60px -30px rgba(15, 23, 42, 0.9)",
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.12) 1px, transparent 0)",
        "gradient-hero":
          "radial-gradient(ellipse at top, rgba(59, 130, 246, 0.18), transparent 55%), radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.14), transparent 55%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
