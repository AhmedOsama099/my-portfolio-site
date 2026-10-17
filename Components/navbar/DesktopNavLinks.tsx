"use client";

import React from "react";
import NavLink from "./navLink";
import { DesktopNavLinksProps } from "@/types/navbar";
import { usePathname } from "next/navigation";
import { stripLocale } from "@/lib/i18n/config";
import clsx from "clsx";

const DesktopNavLinks: React.FC<DesktopNavLinksProps> = ({ links }) => {
  const pathname = usePathname();
  const routePath = stripLocale(pathname);
  const isArticlePage =
    routePath.startsWith("/tech-blog") || routePath.startsWith("/blog");

  return (
    <nav
      className={clsx(
        "hidden min-[680px]:flex items-center gap-1 sm:gap-1.5 xl:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm xl:text-base whitespace-nowrap flex-nowrap transition-all duration-300",
        isArticlePage
          ? "bg-transparent border border-transparent shadow-none"
          : "bg-white/80 backdrop-blur-xl border border-white/80 shadow-md shadow-indigo-950/5"
      )}
    >
      {links.map((link) => (
        <NavLink link={link} key={link.title} />
      ))}
    </nav>
  );
};

export default DesktopNavLinks;
