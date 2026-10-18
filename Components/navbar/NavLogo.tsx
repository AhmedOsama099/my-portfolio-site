"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LocaleLink from "@/Components/LocaleLink";
import { stripLocale } from "@/lib/i18n/config";

interface NavLogoProps {
  className?: string;
  imageClassName?: string;
  isCenterPiece?: boolean;
}

const NavLogo: React.FC<NavLogoProps> = ({
  className = "",
  imageClassName = "w-13 sm:w-15 md:w-16 h-auto",
  isCenterPiece = true,
}) => {
  const pathName = usePathname();
  const currentPath = stripLocale(pathName);
  const isHomeActive = currentPath === "/" || currentPath === "";

  const dotsColors = {
    one: "bg-[#FFB800]",
    two: "bg-[#EE3E54]",
    three: "bg-white",
    four: "bg-[#8889B9]",
  };

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <LocaleLink
        href="/"
        aria-label="Ahmed Osama - Home"
        className={`group relative flex items-center justify-center ${
          isCenterPiece
            ? "w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full bg-white/95 backdrop-blur-2xl border-[2.5px] border-white shadow-lg shadow-indigo-950/15 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            : "px-2 py-1 rounded-full hover:scale-105 active:scale-95 transition-all duration-300"
        }`}
      >
        {/* Subtle glowing halo on hover and when active on Home */}
        <span
          className={`absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/20 via-rose-400/20 to-indigo-500/20 transition-opacity duration-300 pointer-events-none ${
            isHomeActive && isCenterPiece ? "opacity-100 animate-pulse" : "opacity-0 group-hover:opacity-100"
          }`}
        />

        {/* Active status dots when on Home */}
        {isHomeActive && isCenterPiece && (
          <div className="absolute inset-0 pointer-events-none z-10">
            <span className={`absolute w-1.5 h-1.5 ${dotsColors.one} rounded-full -top-1 left-3.5 sm:left-4 animate-pulse`} />
            <span className={`absolute w-1.5 h-1.5 ${dotsColors.two} rounded-full -bottom-1 right-3.5 sm:right-4 animate-pulse`} />
            <span className={`absolute w-1 h-1 ${dotsColors.four} rounded-full top-1/2 -right-1 animate-pulse`} />
            <span className={`absolute w-1 h-1 ${dotsColors.three} rounded-full top-1/2 -left-1 animate-pulse`} />
          </div>
        )}

        <Image
          src="/images/logo.svg"
          alt="Ahmed Osama logo"
          width={110}
          height={38}
          className={`${imageClassName} drop-shadow-sm transition-transform duration-300 group-hover:scale-105`}
          priority
        />
      </LocaleLink>
    </div>
  );
};

export default NavLogo;
