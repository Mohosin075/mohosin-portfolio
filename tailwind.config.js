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
          purple: "#9333ea",
          pink: "#db2777",
          blue: "#2563eb",
          cyan: "#06b6d4",
          violet: "#7c3aed",
        },
        dark: {
          bg: "#050505",
          card: "#0f0f0f",
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
        'mesh-gradient': 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
      },
      animation: {
        'slow-pulse': 'slow-pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'slow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'accent-glow': '0 0 25px -5px var(--glow-color)',
      }
    },
  },
  plugins: [
    require("daisyui"),
    function({ addUtilities }) {
      addUtilities({
        '.glassify': {
          'background': 'rgba(255, 255, 255, 0.03)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.08)',
          'box-shadow': '0 4px 24px 0 rgba(0, 0, 0, 0.2)',
        },
        '.glassify-dark': {
          'background': 'rgba(10, 10, 10, 0.6)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(255, 255, 255, 0.05)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        },
        '.text-gradient-purple': {
          'background': 'linear-gradient(to right, #9333ea, #db2777)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient-blue': {
          'background': 'linear-gradient(to right, #2563eb, #06b6d4)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        }
      })
    }
  ],
  daisyui: {
    darkTheme: "class",
  },
};
