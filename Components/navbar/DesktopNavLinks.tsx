"use client";

import React from "react";
import NavLink from "./navLink";
import NavLogo from "./NavLogo";
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
      className="hidden min-[680px]:flex items-center justify-center w-full max-w-2xl min-[880px]:max-w-3xl min-[1100px]:max-w-4xl text-xs sm:text-sm xl:text-base whitespace-nowrap select-none relative"
      aria-label="Main Navigation"
    >
      {/* Left Wing: About & Portfolio (rounded outer cap, connects directly into center circle) */}
      <div className="flex-1 h-12 sm:h-14 flex items-center justify-evenly ps-4 sm:ps-6 pe-6 sm:pe-8 rounded-s-full bg-white/80 backdrop-blur-xl border-y border-s border-white/80 shadow-md shadow-indigo-950/5 min-w-0 transition-all duration-300">
        {leftLinks.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* Center Circle: Protruding Circular Medallion (matching user's drawing) */}
      <div className="shrink-0 -mx-4 sm:-mx-5 z-20 flex items-center justify-center">
        <NavLogo isCenterPiece={true} imageClassName="w-14 sm:w-16 md:w-18 h-auto" />
      </div>

      {/* Right Wing: Tech Blog & Arabic Writings (rounded outer cap, connects directly into center circle) */}
      <div className="flex-1 h-12 sm:h-14 flex items-center justify-evenly ps-6 sm:ps-8 pe-4 sm:pe-6 rounded-e-full bg-white/80 backdrop-blur-xl border-y border-e border-white/80 shadow-md shadow-indigo-950/5 min-w-0 transition-all duration-300">
        {rightLinks.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
    </nav>
  );
};

export default DesktopNavLinks;
