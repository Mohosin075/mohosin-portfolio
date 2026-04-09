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
          DEFAULT: "#6366f1",
          light: "#FFFFFF",
          lightGray: "#FAFAFA",
          dark: "#0a0a0a",
          darkGray: "#B7B8BB",
          lightBlue: "#0EA5E9",
        },
        accent: {
          purple: "#a855f7",
          pink: "#ec4899",
          blue: "#3b82f6",
        },
        border: "hsl(var(--border) / <alpha-value>)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }
    },
  },
  plugins: [
    require("daisyui"),
    function({ addUtilities }) {
      addUtilities({
        '.glassify': {
          'background': 'rgba(255, 255, 255, 0.05)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        },
        '.glassify-dark': {
          'background': 'rgba(0, 0, 0, 0.3)',
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
          'border': '1px solid rgba(255, 255, 255, 0.05)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
        }
      })
    }
  ],
  daisyui: {
    darkTheme: "class",
  },
};
