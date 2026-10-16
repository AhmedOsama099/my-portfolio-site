"use client";

import React, { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks";
import NavLogo from "./NavLogo";
import SocialMediaLinks from "./SocialMediaLinks";
import MobileMenu from "./MobileMenu";
import { navLinks, socialMedia } from "@/data/navbar";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <div
      className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 border-b-[1px] border-[#EE3E54] min-[980px]:px-6 xl:px-16 2xl:px-24"
    >
      {/* Desktop Navigation Links */}
      <DesktopNavLinks links={navLinks} />

      {/* Logo */}
      <NavLogo />

      {/* Social Media Links */}
      <SocialMediaLinks
        socialMedia={socialMedia}
        className="hidden min-[980px]:flex justify-end shrink-0"
      />

      {/* Mobile Menu */}
      <MobileMenu open={open} toggleMenu={toggleMenu} links={navLinks} />
    </div>
  );
};

export default Navbar;
