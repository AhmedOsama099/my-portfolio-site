"use client";

import { useAppTranslation } from "@/hooks/useAppTranslation";
import React, { createContext, useContext, useState, useEffect } from "react";

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
  const { setLanguage, changeCurrentDirection } = useAppTranslation();
  // Initialize with default values
  const [mode, setMode] = useState<"programmer" | "writer">("programmer");
  const [isProgrammer, setIsProgrammer] = useState<boolean>(true);

  // Load saved mode from localStorage only on client-side
  useEffect(() => {
    // This code only runs in the browser, after component mounts
    const savedMode = localStorage.getItem("portfolioMode");

    if (!savedMode) {
      localStorage.setItem("portfolioMode", "programmer");
      setLanguage("en");
      changeCurrentDirection("ltr");
    } else if (savedMode === "writer") {
      setMode("writer");
      setIsProgrammer(false);
      setLanguage("ar");
      changeCurrentDirection("rtl");
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === "programmer" ? "writer" : "programmer";
    setMode(newMode);
    setIsProgrammer(newMode === "programmer");

    // Only access localStorage on the client
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolioMode", newMode);
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, isProgrammer }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);
