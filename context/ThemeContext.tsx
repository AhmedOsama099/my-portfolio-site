"use client";

import React, { createContext, useContext, useState } from "react";

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
  const [mode, setMode] = useState<"programmer" | "writer">("programmer");
  const [isProgrammer, setIsProgrammer] = useState<boolean>(true);

  const toggleMode = () => {
    if (mode === "programmer") {
      setIsProgrammer(false);
      setMode("writer");
    } else {
      setIsProgrammer(true);
      setMode("programmer");
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
