"use client";

import React from "react";
import NavLink from "./navLink";
import NavLogo from "./NavLogo";
import { DesktopNavLinksProps, NavLinkType } from "@/types/navbar";
import { navLinks as defaultNavLinks } from "@/data/navbar";

export interface DesktopNavLinksPropsLocal {
  links?: NavLinkType[];
}

const DesktopNavLinks: React.FC<DesktopNavLinksProps> = ({
  links = defaultNavLinks,
}) => {
  const activeLinks = links && links.length > 0 ? links : defaultNavLinks;

  const leftLinks = [
    activeLinks.find((l) => l.url === "/about") || { url: "/about", title: "About" },
    activeLinks.find((l) => l.url === "/portfolio") || { url: "/portfolio", title: "Portfolio" },
  ];

  const rightLinks = [
    activeLinks.find((l) => l.url === "/tech-blog") || { url: "/tech-blog", title: "Tech Blog" },
    activeLinks.find((l) => l.url === "/blog") || { url: "/blog", title: "Arabic Writings" },
  ];

  return (
    <nav
      className="hidden min-[680px]:flex items-center justify-center w-full max-w-[480px] sm:max-w-[530px] md:max-w-[560px] text-xs sm:text-sm xl:text-base whitespace-nowrap select-none relative"
      aria-label="Main Navigation"
    >
      {/* Left Wing: About & Portfolio */}
      <div className="flex-1 h-11 sm:h-12 flex items-center justify-evenly ps-3 sm:ps-5 pe-4 sm:pe-6 rounded-s-full bg-white/80 backdrop-blur-xl border-y border-s border-white/80 shadow-md shadow-indigo-950/5 min-w-0 transition-all duration-300">
        {leftLinks.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* Center Stadium Oval / Capsule Medallion */}
      <div className="shrink-0 -mx-3 sm:-mx-3.5 z-20 flex items-center justify-center">
        <NavLogo isCenterPiece={true} imageClassName="w-11 sm:w-12 md:w-13 h-auto" />
      </div>

      {/* Right Wing: Tech Blog & Arabic Writings */}
      <div className="flex-1 h-11 sm:h-12 flex items-center justify-evenly ps-4 sm:ps-6 pe-3 sm:pe-5 rounded-e-full bg-white/80 backdrop-blur-xl border-y border-e border-white/80 shadow-md shadow-indigo-950/5 min-w-0 transition-all duration-300">
        {rightLinks.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
    </nav>
  );
};

export { DesktopNavLinks };
export default DesktopNavLinks;
