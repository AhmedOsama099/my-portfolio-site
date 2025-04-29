"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Define theme color palettes
export interface ThemeColors {
  bgGradient: string;
  warmRed: string;
  navbarLabelColor: {
    yellow: string;
    red: string;
    white: string;
    grey: string;
  };
  navbarItem: {
    bg: string;
    hoverGradient: string;
    textColor: string;
  };
  homeColors: {
    paragraphText: string;
    primaryButton: string;
  };
  contactColors: {
    heading: string;
    underline: string;
    paragraphText: string;
  };
}

// Theme definitions
export const themes = {
  programmer: {
    warmRed: "#EE3E54",
    bgGradient: "from-blue-100 to-red-100",
    navbarLabelColor: {
      yellow: "bg-[#FFB800] ",
      red: "bg-[#EE3E54]",
      white: "bg-white",
      grey: "bg-[#8889B9]",
    },
    navbarItem: {
      bg: "bg-[#FCE0A2]",
      hoverGradient:
        "hover:bg-gradient-to-r from-transparent via-[#EE3E5430] to-transparent",
      textColor: "text-[#3D4082]",
    },
    homeColors: {
      paragraphText: "#1F2937", // text-gray-800 equivalent
      primaryButton: "bg-[#48508F]",
      secondaryButton: {
        border: "#3A4184",
        text: "#3A4184",
        hoverBg: "#3A4184",
      },
    },
    contactColors: {
      heading: "#565FA1",
      underline: "#EE3E54",
      paragraphText: "#4B5563", // text-gray-600 equivalent
    },
  },
  writer: {
    warmRed: "#4A6741", // Adjusted to a more muted, professional green
    bgGradient: "from-green-50 to-slate-50", // More subtle, professional gradient
    navbarLabelColor: {
      yellow: "bg-[#8DAB7F]", // Softer, more professional light green
      red: "bg-[#4A6741]", // Matching the main theme color
      white: "bg-white", // Keeping white for contrast
      grey: "bg-[#6D7D6A]", // Adjusted to a more balanced green-gray
    },
    navbarItem: {
      bg: "bg-[#F2F7F0]", // Very subtle light green background
      hoverGradient:
        "hover:bg-gradient-to-r from-transparent via-[#4A674120] to-transparent", // Subtle hover effect
      textColor: "text-[#2F4A2A]", // Darker green for better readability
    },
    homeColors: {
      paragraphText: "#374151", // Slightly darker than before for better readability (text-gray-700)
      primaryButton: "bg-[#8E1616]",
      secondaryButton: {
        border: "#4A6741", // Main theme color for borders
        text: "#4A6741", // Main theme color for text
        hoverBg: "#4A6741", // Main theme color for hover
      },
    },
    contactColors: {
      heading: "#2F4A2A", // Darker green for headings
      underline: "#4A6741", // Main theme color for underlines
      paragraphText: "#4B5563", // Keeping the same for readability
    },
  },
};

// Create context with default value
interface ThemeContextType {
  mode: "programmer" | "writer";
  isProgrammer: boolean;
  toggleMode: () => void;
  colors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "programmer",
  isProgrammer: true,
  toggleMode: () => {},
  colors: themes.programmer,
});

// Theme provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<"programmer" | "writer">("programmer");
  const [isProgrammer, setIsProgrammer] = useState<boolean>(true);
  const [colors, setColors] = useState<ThemeColors>(themes.programmer);

  const toggleMode = () => {
    if (mode === "programmer") {
      setIsProgrammer(false);
      setMode("writer");
    } else {
      setIsProgrammer(true);
      setMode("programmer");
    }
  };
  // Update colors when mode changes
  useEffect(() => {
    setColors(themes[mode]);
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{ mode, toggleMode, isProgrammer, colors: { ...colors } }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);
