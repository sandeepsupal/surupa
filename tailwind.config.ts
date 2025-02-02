import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#5D506E",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#CD9C9C",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#E9AB26",
          foreground: "#1E1E1E",
        },
      },
      fontFamily: {
        cormorant: ["Cormorant Unicase", "serif"],
        abeezee: ["ABeeZee", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;