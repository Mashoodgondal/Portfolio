// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//       animation: {
//         "fade-in": "fade-in 1.5s ease-out",
//         "slide-in-up": "slide-in-up 1s ease-out both",
//         "float": "float 4s ease-in-out infinite",
//       },
//       keyframes: {
//         "fade-in": {
//           "0%": { opacity: 0 },
//           "100%": { opacity: 1 },
//         },
//         "slide-in-up": {
//           "0%": { transform: "translateY(20px)", opacity: 0 },
//           "100%": { transform: "translateY(0)", opacity: 1 },
//         },
//         "float": {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-15px)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
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
