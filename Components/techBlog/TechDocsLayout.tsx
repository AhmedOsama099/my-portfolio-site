"use client";

import React, { useState, useEffect } from "react";
import ToggleButton from "./toggleButton";
import MobileOverlay from "./mobileOverlay";
import ContentWrapper from "./ContentWrapper";
import SideNav from "./SideNav";
import { useAppTranslation } from "@/hooks/useAppTranslation";

interface TechDocsLayoutProps {
  children: React.ReactNode;
}

export default function TechDocsLayout({ children }: TechDocsLayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleToggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleChangeNavState = (state: boolean) => {
    setIsNavOpen(state);
  };

  const { changeLanguage, currentLanguage } = useAppTranslation();

  return (
    <div className="relative flex h-screen bg-gray-50 overflow-hidden">
      {/* Language Switch Button */}
      <button
        onClick={changeLanguage}
        className="fixed top-4 end-4 z-50 p-2 bg-gray-800 text-white rounded shadow hover:bg-gray-700 transition"
      >
        {currentLanguage === "ar" ? "English" : "العربية"}
      </button>
      {/* Toggle button */}
      <ToggleButton
        isNavOpen={isNavOpen}
        isMobile={isMobile}
        handleToggleNav={handleToggleNav}
      />
      {/* Side Navigation */}
      <SideNav
        isNavOpen={isNavOpen}
        isMobile={isMobile}
        handleChangeNavState={handleChangeNavState}
        handleToggleNav={handleToggleNav}
      />

      {/* Overlay for mobile */}
      {isNavOpen && isMobile && (
        <MobileOverlay handleToggleNav={handleToggleNav} />
      )}

      {/* Main Content */}
      <ContentWrapper isNavOpen={isNavOpen} isMobile={isMobile}>
        {children}
      </ContentWrapper>
    </div>
  );
}
