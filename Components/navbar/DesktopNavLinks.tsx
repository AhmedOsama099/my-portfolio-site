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
    activeLinks.find((l) => l.url === "/tech-blog") || { url: "/tech-blog", title: "Tech Blog" },
    activeLinks.find((l) => l.url === "/about") || { url: "/about", title: "About" },
  ];

  const rightLinks = [
    activeLinks.find((l) => l.url === "/portfolio") || { url: "/portfolio", title: "Portfolio" },
    activeLinks.find((l) => l.url === "/blog") || { url: "/blog", title: "خواطر" },
  ];

  return (
    <nav
      className="hidden min-[680px]:flex items-center justify-center w-full max-w-[430px] sm:max-w-[475px] md:max-w-[500px] text-xs sm:text-sm xl:text-base whitespace-nowrap select-none relative"
      aria-label="Main Navigation"
    >
      {/* Left Wing: Tech Blog & About */}
      <div className="flex-1 h-11 sm:h-12 flex items-center justify-evenly ps-2.5 sm:ps-4 pe-3 sm:pe-4 rounded-s-full bg-white/80 backdrop-blur-xl border-y border-s border-white/80 shadow-md shadow-indigo-950/5 min-w-0 transition-all duration-300">
        {leftLinks.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* Center Circular Medallion */}
      <div className="shrink-0 -mx-3 sm:-mx-3.5 z-20 flex items-center justify-center">
        <NavLogo isCenterPiece={true} imageClassName="w-11 sm:w-12 md:w-14 h-auto" />
      </div>

      {/* Right Wing: Portfolio & خواطر */}
      <div className="flex-1 h-11 sm:h-12 flex items-center justify-evenly ps-3 sm:ps-4 pe-2.5 sm:pe-4 rounded-e-full bg-white/80 backdrop-blur-xl border-y border-e border-white/80 shadow-md shadow-indigo-950/5 min-w-0 transition-all duration-300">
        {rightLinks.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
    </nav>
  );
};

export { DesktopNavLinks };
export default DesktopNavLinks;
