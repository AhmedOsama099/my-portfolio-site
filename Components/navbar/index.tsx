"use client";

import React, { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks";
import NavLogo from "./NavLogo";
import SocialMediaLinks from "./SocialMediaLinks";
import MobileMenu from "./MobileMenu";
import { programmerLinks, writerLinks, socialMedia } from "@/data/navbar";
import { useTheme } from "@/context/ThemeContext";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { isProgrammer } = useTheme();

  const toggleMenu = () => setOpen((prev) => !prev);

  const borderColor = isProgrammer ? "border-[#EE3E54]" : "border-[#5C00AA]";
  const links = isProgrammer ? programmerLinks : writerLinks;
  return (
    <div
      className={`h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl  border-b-[1px] ${borderColor}`}
    >
      {/* Desktop Navigation Links */}
      <DesktopNavLinks links={links} />

      {/* Logo */}
      <NavLogo />

      {/* Social Media Links */}
      <SocialMediaLinks
        socialMedia={socialMedia}
        className="hidden min-[980px]:flex justify-end"
      />

      {/* Mobile Menu */}
      <MobileMenu open={open} toggleMenu={toggleMenu} links={links} />
    </div>
  );
};

export default Navbar;
