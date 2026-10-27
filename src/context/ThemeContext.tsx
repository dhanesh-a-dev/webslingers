"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyThemeToDocument(t: Theme) {
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    if (t === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleMediaChange = (e: MediaQueryListEvent) => {
      try {
        const saved = localStorage.getItem("webslingers-theme");
        if (!saved) {
          const next = e.matches ? "dark" : "light";
          setThemeState(next);
          applyThemeToDocument(next);
        }
      } catch {
        // Ignore
      }
    };

    media.addEventListener("change", handleMediaChange);

    try {
      const saved = localStorage.getItem("webslingers-theme") as Theme | null;
      const initial = saved || (media.matches ? "dark" : "light");
      applyThemeToDocument(initial);
      window.requestAnimationFrame(() => {
        setThemeState(initial);
      });
    } catch {
      // Ignore
    }

    return () => media.removeEventListener("change", handleMediaChange);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem("webslingers-theme", t);
    } catch {
      // Ignore
    }
    applyThemeToDocument(t);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
