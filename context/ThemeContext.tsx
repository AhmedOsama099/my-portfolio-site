"use client";

import React, {
  createContext,
  useContext,
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

// Theme provider component - unified in default mode
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // The portfolio is now unified into one default mode
  const mode = "programmer" as const;
  const isProgrammer = true;
  const toggleMode = useCallback(() => {}, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, isProgrammer }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);
