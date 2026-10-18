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
      className="hidden min-[680px]:flex items-center justify-center w-full max-w-xl min-[840px]:max-w-2xl text-xs sm:text-sm xl:text-base whitespace-nowrap select-none relative"
      aria-label="Main Navigation"
    >
      {/* Left Wing: About & Portfolio */}
      <div className="flex-1 h-11 sm:h-12 flex items-center justify-evenly ps-4 sm:ps-6 pe-5 sm:pe-7 rounded-s-full bg-white/80 backdrop-blur-xl border-y border-s border-white/80 shadow-md shadow-indigo-950/5 min-w-0 transition-all duration-300">
        {leftLinks.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* Center Circle: Protruding Circular Medallion */}
      <div className="shrink-0 -mx-3.5 sm:-mx-4 z-20 flex items-center justify-center">
        <NavLogo isCenterPiece={true} imageClassName="w-13 sm:w-15 md:w-16 h-auto" />
      </div>

      {/* Right Wing: Tech Blog & Arabic Writings */}
      <div className="flex-1 h-11 sm:h-12 flex items-center justify-evenly ps-5 sm:ps-7 pe-4 sm:pe-6 rounded-e-full bg-white/80 backdrop-blur-xl border-y border-e border-white/80 shadow-md shadow-indigo-950/5 min-w-0 transition-all duration-300">
        {rightLinks.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
    </nav>
  );
};

export default DesktopNavLinks;
