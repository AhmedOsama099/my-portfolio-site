"use client";

import React, { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks";
import NavLogo from "./NavLogo";
import SocialMediaLinks from "./SocialMediaLinks";
import MobileMenu from "./MobileMenu";
import { links, socialMedia } from "@/data/navbar";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Desktop Navigation Links */}
      <DesktopNavLinks links={links} />

      {/* Logo */}
      <NavLogo />

      {/* Social Media Links */}
      <SocialMediaLinks
        socialMedia={socialMedia}
        className="hidden min-[900px]:flex justify-end"
      />

      {/* Mobile Menu */}
      <MobileMenu open={open} toggleMenu={toggleMenu} links={links} />
    </div>
  );
};

export default Navbar;
