"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="h-8 rounded-lg px-4 py-0.5 transition-colors duration-200 hover:bg-white dark:hover:bg-black md:h-5 md:px-2"
    >
      {theme === "dark" ? (
        <div className="h-2 w-2 rounded-full bg-black"></div>
      ) : (
        <div className="h-2 w-2 rounded-full bg-white"></div>
      )}
    </button>
  );
}
