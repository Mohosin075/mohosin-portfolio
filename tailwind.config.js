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
          DEFAULT: "#1E40AF",
          light: "#FFFFFF",
          lightGray: "#FAFAFA",
          dark: "#12141D",
          darkGray: "#B7B8BB",
          lightBlue: "#0EA5E9",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "class",
  },
};
