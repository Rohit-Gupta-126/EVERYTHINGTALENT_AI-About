"use client";
import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
};

type ThemeProviderState = {
  theme: Theme;
  resolvedTheme?: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  enableSystem = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<Theme>(defaultTheme);

  const getSystemTheme = (): Theme => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  };

  const setTheme = (theme: Theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
    setThemeState(theme);
  };

  useEffect(() => {
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        const newTheme = e.matches ? "dark" : "light";
        setResolvedTheme(newTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newTheme);
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      const systemTheme = enableSystem ? getSystemTheme() : defaultTheme;

      const initialTheme = storedTheme || defaultTheme;
      setThemeState(initialTheme);

      if (initialTheme === "system") {
        setResolvedTheme(systemTheme);
      } else {
        setResolvedTheme(initialTheme);
      }
    }
  }, [enableSystem, defaultTheme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = getSystemTheme();
      setResolvedTheme(systemTheme);
      root.classList.add(systemTheme);
    } else {
      setResolvedTheme(theme);
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <ThemeProviderContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};