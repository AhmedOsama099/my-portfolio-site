"use client";

import { useState } from "react";
import ToggleButton from "./toggleButton";
import MobileOverlay from "./mobileOverlay";
import ContentWrapper from "./ContentWrapper";
import SideNav from "./SideNav";
import LanguageSwitchButton from "./LanguageSwitchButton";
import { TechDocsLayoutProps } from "@/types/techBlog";
import { useMobileResize } from "@/hooks/techBlog/useMobileResize";

export default function TechDocsLayout({ children }: TechDocsLayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isMobile } = useMobileResize();

  const handleToggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleChangeNavState = (state: boolean) => {
    setIsNavOpen(state);
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
