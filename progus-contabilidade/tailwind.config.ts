import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      colors: {
        ink: "#0B1B30",
        navy: {
          50: "#EEF3F9",
          100: "#D6E2F0",
          200: "#AEC5E1",
          300: "#7C9FC9",
          400: "#4E78AE",
          500: "#2F5A92",
          600: "#234876",
          700: "#1B3A60",
          800: "#142C49",
          900: "#0E2138",
          950: "#081626",
        },
        azure: {
          50: "#EBF4FF",
          100: "#D7E8FE",
          200: "#B4D4FD",
          300: "#86B8FB",
          400: "#5295F6",
          500: "#2D74EE",
          600: "#1B59D4",
          700: "#1747AB",
          800: "#173D8B",
          900: "#183671",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11, 27, 48, 0.04), 0 8px 24px rgba(11, 27, 48, 0.06)",
        card: "0 4px 12px rgba(11, 27, 48, 0.05), 0 18px 40px rgba(11, 27, 48, 0.08)",
        "card-hover":
          "0 8px 20px rgba(23, 71, 171, 0.10), 0 28px 56px rgba(11, 27, 48, 0.14)",
        glow: "0 0 60px rgba(45, 116, 238, 0.25)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(11,27,48,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,27,48,0.04) 1px, transparent 1px)",
        "radial-azure":
          "radial-gradient(60% 60% at 50% 0%, rgba(45,116,238,0.18) 0%, rgba(45,116,238,0) 70%)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
