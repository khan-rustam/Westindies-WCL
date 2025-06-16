import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        maroon: {
          DEFAULT: "#941A42",
          50: "#fdf2f5",
          100: "#fce7ed",
          200: "#f9d0dc",
          300: "#f4a8be",
          400: "#ec7a9b",
          500: "#e0507a",
          600: "#cd2f5e",
          700: "#b02049",
          800: "#941A42",
          900: "#7d1838",
        },
        gold: {
          DEFAULT: "#FFD700",
          50: "#fffef0",
          100: "#fffcdb",
          200: "#fff8b8",
          300: "#fff085",
          400: "#ffe652",
          500: "#FFD700",
          600: "#e6c200",
          700: "#cc9900",
          800: "#b38600",
          900: "#996600",
        },
        "off-white": "#F5F5F5",
        "deep-navy": "#1a1a2e",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "bounce-in": "bounceIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
