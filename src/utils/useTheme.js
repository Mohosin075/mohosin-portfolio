import { useEffect, useState } from "react";

const storageKey = "portfolio-theme";
const savedTheme = () => { try { return localStorage.getItem(storageKey); } catch { return null; } };
const preferredTheme = () => {
  const saved = savedTheme();
  return saved === "dark" || saved === "light" ? saved : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export default function useTheme() {
  const [theme, setTheme] = useState(preferredTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#101722" : "#f8f7f4");
  }, [theme]);
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => setTheme(preferredTheme());
    media.addEventListener("change", sync);
    window.addEventListener("storage", sync);
    return () => { media.removeEventListener("change", sync); window.removeEventListener("storage", sync); };
  }, []);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    try { localStorage.setItem(storageKey, next); } catch { /* Theme still works without browser storage. */ }
    setTheme(next);
  };
  return { theme, toggleTheme };
}
