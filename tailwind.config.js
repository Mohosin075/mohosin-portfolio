/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--accent-from)",
          light: "var(--accent-to)",
          lightGray: "var(--muted)",
          dark: "var(--bg)",
          darkGray: "var(--card)",
          lightBlue: "var(--accent-to)",
        },
        card: "var(--card)",
        muted: "var(--muted)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "class",
  },
};
