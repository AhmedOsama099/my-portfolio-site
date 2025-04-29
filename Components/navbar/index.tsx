"use client";

import React, { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks";
import NavLogo from "./NavLogo";
import SocialMediaLinks from "./SocialMediaLinks";
import MobileMenu from "./MobileMenu";
import { links, socialMedia } from "@/data/navbar";
import { useTheme } from "@/context/ThemeContext";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { isProgrammer } = useTheme();

  const toggleMenu = () => setOpen((prev) => !prev);

  // Filter links based on isProgrammer value
  const filteredLinks = links.filter((link) => {
    // Always show Home, Blog and Contact routes
    if (link.url === "/" || link.url === "/blog" || link.url === "/contact") {
      return true;
    }
    // Only show About and Portfolio routes when isProgrammer is true
    return isProgrammer || (link.url !== "/about" && link.url !== "/portfolio");
  });

  const borderColor = isProgrammer ? "border-[#EE3E54]" : "border-[#5C00AA]";
  return (
    <div
      className={`h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl  border-b-[1px] ${borderColor}`}
    >
      {/* Desktop Navigation Links */}
      <DesktopNavLinks links={filteredLinks} />

      {/* Logo */}
      <NavLogo />

      {/* Social Media Links */}
      <SocialMediaLinks
        socialMedia={socialMedia}
        className="hidden min-[980px]:flex justify-end"
      />

      {/* Mobile Menu */}
      <MobileMenu open={open} toggleMenu={toggleMenu} links={filteredLinks} />
    </div>
  );
};

export default Navbar;
