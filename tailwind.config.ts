import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nexa brand palette
        "nexa-black":   "#07080c",
        "nexa-surface": "#0c0e15",
        "nexa-s2":      "#10121a",
        "nexa-s3":      "#14172200",
        "nexa-blue":    "#2563eb",
        "nexa-bright":  "#3b82f6",
        "nexa-white":   "#e8eaf2",
      },
      fontFamily: {
        sans: [
          "-apple-system", "BlinkMacSystemFont", "SF Pro Display",
          "Helvetica Neue", "sans-serif"
        ],
        mono: ["ui-monospace", "SF Mono", "monospace"],
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(37,99,235,.18) 0%, transparent 70%)",
        "cta-glow":  "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(37,99,235,.22) 0%, transparent 70%)",
        "card-glow": "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,130,246,.08) 0%, transparent 60%)",
      },
      animation: {
        "fade-up":    "fadeUp .55s ease both",
        "fade-in":    "fadeIn .45s ease both",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp:    { from: { opacity: "0", transform: "translateY(22px)" }, to: { opacity: "1", transform: "none" } },
        fadeIn:    { from: { opacity: "0" }, to: { opacity: "1" } },
        pulseSoft: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".6" } },
      },
    },
  },
  plugins: [],
};

export default config;
