"use client";

import { getLocaleFromPathname, stripLocale } from "@/lib/i18n/config";
import { usePathname } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

// Create context with default value
interface ThemeContextType {
  mode: "programmer" | "writer";
  isProgrammer: boolean;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "programmer",
  isProgrammer: true,
  toggleMode: () => {},
});

// Theme provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Mode is a persona that, during a session, only changes via the home-page
  // Mode switch — client-side navigation never changes it.
  const [mode, setMode] = useState<"programmer" | "writer">("programmer");
  const isProgrammer = mode === "programmer";
  const pathname = usePathname();

  useEffect(() => {
    const cleanPath = stripLocale(pathname);

    // Tech-blog is strictly part of Engineer (programmer) mode, even when articles are read in Arabic
    if (cleanPath.startsWith("/tech-blog")) {
      setMode("programmer");
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolioMode", "programmer");
      }
      return;
    }

    // Literary blog is strictly part of Writer mode
    if (cleanPath.startsWith("/blog")) {
      setMode("writer");
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolioMode", "writer");
      }
      return;
    }

    // For other routes, check saved mode first
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("portfolioMode");
      if (stored === "programmer" || stored === "writer") {
        setMode(stored);
        return;
      }
    }

    // Fallback based on initial URL prefix
    const initialMode =
      getLocaleFromPathname(pathname) === "ar" ? "writer" : "programmer";
    setMode(initialMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolioMode", initialMode);
    }
  }, [pathname]);

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const next = prev === "programmer" ? "writer" : "programmer";
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolioMode", next);
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, isProgrammer }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);
