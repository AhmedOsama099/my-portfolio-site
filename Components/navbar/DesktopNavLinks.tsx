"use client";

import React from "react";
import NavLink from "./navLink";
import NavLogo from "./NavLogo";
import NavModeSwitch from "./NavModeSwitch";
import NavSocialLinks from "./NavSocialLinks";
import { DesktopNavLinksProps } from "@/types/navbar";

const DesktopNavLinks: React.FC<DesktopNavLinksProps> = ({ links }) => {
  const leftLinks = [
    links.find((l) => l.url === "/about") || { url: "/about", title: "About" },
    links.find((l) => l.url === "/portfolio") || { url: "/portfolio", title: "Portfolio" },
  ];

  const rightLinks = [
    links.find((l) => l.url === "/tech-blog") || { url: "/tech-blog", title: "Tech Blog" },
    links.find((l) => l.url === "/blog") || { url: "/blog", title: "Arabic Writings" },
  ];

  return (
    <nav
      className="hidden min-[720px]:flex items-center justify-center w-full max-w-3xl min-[960px]:max-w-4xl min-[1200px]:max-w-5xl text-xs sm:text-sm xl:text-base whitespace-nowrap select-none relative"
      aria-label="Main Navigation"
    >
      {/* Left Wing: Persona Switch + About & Portfolio Links */}
      <div className="flex-1 h-12 sm:h-14 flex items-center justify-between ps-3 sm:ps-5 pe-6 sm:pe-8 rounded-s-full bg-white/80 backdrop-blur-xl border-y border-s border-white/80 shadow-md shadow-indigo-950/5 min-w-0 transition-all duration-300 gap-1.5 sm:gap-2.5">
        {/* Persona Mode Switch (Engineer vs Writer) */}
        <NavModeSwitch />

        {/* Divider */}
        <span className="w-px h-4 sm:h-5 bg-slate-200/90 shrink-0 hidden min-[840px]:block" />

        {/* Navigation Links */}
        <div className="flex items-center justify-evenly flex-1 gap-1 sm:gap-2 min-w-0">
          {leftLinks.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      </div>

      {/* Center Circle: Protruding Circular Medallion */}
      <div className="shrink-0 -mx-4 sm:-mx-5 z-20 flex items-center justify-center">
        <NavLogo isCenterPiece={true} imageClassName="w-14 sm:w-16 md:w-18 h-auto" />
      </div>

      {/* Right Wing: Tech Blog & Arabic Writings + Social Media Icons */}
      <div className="flex-1 h-12 sm:h-14 flex items-center justify-between ps-6 sm:ps-8 pe-3 sm:pe-5 rounded-e-full bg-white/80 backdrop-blur-xl border-y border-e border-white/80 shadow-md shadow-indigo-950/5 min-w-0 transition-all duration-300 gap-1.5 sm:gap-2.5">
        {/* Navigation Links */}
        <div className="flex items-center justify-evenly flex-1 gap-1 sm:gap-2 min-w-0">
          {rightLinks.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>

        {/* Divider */}
        <span className="w-px h-4 sm:h-5 bg-slate-200/90 shrink-0 hidden min-[840px]:block" />

        {/* Social Media Links (GitHub, LinkedIn, WhatsApp) */}
        <NavSocialLinks />
      </div>
    </nav>
  );
};

export default DesktopNavLinks;
