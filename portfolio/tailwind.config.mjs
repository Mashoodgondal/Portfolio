
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-in": "bounce-in 1s ease-out both",
        "pulse-glow": "pulse-glow 2s infinite ease-in-out",
      },
      keyframes: {
        "bounce-in": {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "60%": { transform: "scale(1.05)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0, 0, 255, 0.6)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 0, 255, 1)" },
        },
      },
    },
  },
  plugins: [],
};
