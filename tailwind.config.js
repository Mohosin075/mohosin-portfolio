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
          primary: "#6366f1", // Indigo
          secondary: "#10b981", // Emerald
          muted: "#64748b", // Slate
          glow: "rgba(99, 102, 241, 0.15)",
        },
        dark: {
          bg: "#020617", // Very Dark Slate
          card: "#0f172a", // Slate 900
          border: "rgba(148, 163, 184, 0.1)", // Slate 400 with opacity
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
        'mesh-gradient': 'radial-gradient(at 0% 0%, hsla(222, 47%, 11%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(222, 47%, 15%, 1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(222, 47%, 11%, 1) 0, transparent 50%)',
      },
      animation: {
        'slow-pulse': 'slow-pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'slow-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'accent-glow': '0 0 40px -10px var(--glow-color)',
      }
    },
  },
  plugins: [
    require("daisyui"),
    function({ addUtilities }) {
      addUtilities({
        '.glassify': {
          'background': 'rgba(15, 23, 42, 0.6)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(148, 163, 184, 0.1)',
        },
        '.glassify-dark': {
          'background': 'rgba(15, 23, 42, 0.8)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(148, 163, 184, 0.1)',
        },
        '.text-gradient-primary': {
          'background': 'linear-gradient(to right, #6366f1, #10b981)',
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
