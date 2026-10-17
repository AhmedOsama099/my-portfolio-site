"use client";

import React, { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks";
import NavLogo from "./NavLogo";
import MobileMenu from "./MobileMenu";
import { navLinks, mobileNavLinks } from "@/data/navbar";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className="relative w-full z-40 flex flex-col items-center pt-2 sm:pt-3 pb-1 select-none shrink-0 px-4">
      {/* 1. Creative Floating Glass Nav Pill or Circular Trigger (Centered at the top) */}
      <div className="flex items-center justify-center">
        {/* Desktop Navigation Pill (shown when tabs fit without wrapping) */}
        <DesktopNavLinks links={navLinks} />

        {/* Mobile Creative Circular Trigger (shown only when tabs wrap) */}
        <div className="min-[680px]:hidden">
          <MobileMenu open={open} toggleMenu={toggleMenu} links={mobileNavLinks} />
        </div>
      </div>

      {/* 2. Signature Logo placed directly UNDER the Nav Bar */}
      <div className="mt-1 sm:mt-1.5 transition-transform hover:scale-105">
        <NavLogo />
      </div>
    </header>
  );
};

export default Navbar;
