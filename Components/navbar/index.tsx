"use client";

import React, { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks";
import NavLogo from "./NavLogo";
import NavModeSwitch from "./NavModeSwitch";
import MobileMenu from "./MobileMenu";
import { navLinks, mobileNavLinks } from "@/data/navbar";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className="relative w-full z-40 flex flex-col items-center pt-3 sm:pt-4 pb-2.5 sm:pb-3 select-none shrink-0 px-3 sm:px-4">
      {/* Desktop Navigation: Wing-and-Circle Dock (Command Center with Persona Switch & Socials) */}
      <DesktopNavLinks links={navLinks} />

      {/* Mobile Streamlined Floating Glass Bar (Logo + Mode Switch + Menu Trigger) */}
      <div className="min-[720px]:hidden w-full max-w-md flex items-center justify-between px-3 sm:px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-xl border border-white/80 shadow-md shadow-indigo-950/5">
        <NavLogo isCenterPiece={false} imageClassName="w-14 sm:w-16 h-auto" />
        <NavModeSwitch showLabels={false} />
        <MobileMenu open={open} toggleMenu={toggleMenu} links={mobileNavLinks} />
      </div>
    </header>
  );
};

export default Navbar;
