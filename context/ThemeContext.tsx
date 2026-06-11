"use client";

import { getLocaleFromPathname } from "@/lib/i18n/config";
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

  // On initial site entry (full page load / deliberate URL) the landing
  // locale sets the persona: /ar -> writer, /en or anything else -> programmer.
  // This effect runs once because ThemeProvider lives in the root layout and
  // does not remount across <Link> navigations.
  useEffect(() => {
    const initialMode =
      getLocaleFromPathname(pathname) === "ar" ? "writer" : "programmer";
    setMode(initialMode);
    localStorage.setItem("portfolioMode", initialMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
