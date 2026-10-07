"use client";

import { useState, useEffect } from "react";
import ToggleButton from "./toggleButton";
import MobileOverlay from "./mobileOverlay";
import ContentWrapper from "./ContentWrapper";
import SideNav from "./SideNav";
import LanguageSwitchButton from "./LanguageSwitchButton";
import { TechDocsLayoutProps } from "@/types/techBlog";
import { useMobileResize } from "@/hooks/techBlog/useMobileResize";

// Module-level persistent state so navigation between pages retains the open/close state
let globalIsNavOpen: boolean | null = null;

export default function TechDocsLayout({ children }: TechDocsLayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(() => {
    if (globalIsNavOpen !== null) return globalIsNavOpen;
    return false;
  });

  const { isMobile } = useMobileResize();

  // Read stored preference once mounted on client side
  useEffect(() => {
    if (globalIsNavOpen === null && typeof window !== "undefined") {
      const stored = sessionStorage.getItem("tech_blog_nav_open");
      if (stored !== null) {
        const parsed = stored === "true";
        globalIsNavOpen = parsed;
        setIsNavOpen(parsed);
      }
    }
  }, []);

  const handleToggleNav = () => {
    setIsNavOpen((prev) => {
      const nextState = !prev;
      globalIsNavOpen = nextState;
      if (typeof window !== "undefined") {
        sessionStorage.setItem("tech_blog_nav_open", String(nextState));
      }
      return nextState;
    });
  };

  const handleChangeNavState = (state: boolean) => {
    setIsNavOpen(state);
    globalIsNavOpen = state;
    if (typeof window !== "undefined") {
      sessionStorage.setItem("tech_blog_nav_open", String(state));
    }
  };

  return (
    <div className="relative flex h-full bg-gray-50 overflow-hidden">
      {/* Language Switch Button */}
      <LanguageSwitchButton />

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
