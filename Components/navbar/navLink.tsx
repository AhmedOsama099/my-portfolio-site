"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/types/navbar";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const pathName = usePathname();
  const { isProgrammer } = useTheme();

  const isActive =
    pathName === link.url
      ? isProgrammer
        ? `bg-[#F2F7F0] outline-2 outline-dashed hover:outline-dotted transition-all duration-300`
        : `bg-[#FCE0A2] outline-2 outline-dashed hover:outline-dotted transition-all duration-300`
      : "";

  const isHovered = isProgrammer
    ? "hover:bg-gradient-to-r from-transparent via-[#EE3E5430] to-transparent"
    : "hover:bg-gradient-to-r from-transparent via-[#5C00AA20] to-transparent";

  const dotsColors = isProgrammer
    ? {
        one1: "bg-[#FFB800]",
        two2: "bg-[#EE3E54]",
        three3: "bg-white",
        four4: "bg-[#8889B9]",
      }
    : {
        one1: "bg-[#83820e]",
        two2: "bg-[#ebb25d]",
        three3: "bg-white",
        four4: "bg-[#5000a8]",
      };

  return (
    <Link
      className={`rounded font-medium p-2 text-[#3D4082] relative ${isActive} ${isHovered} `}
      key={link.title}
      href={link.url}
    >
      {isActive && (
        <div className="z-20">
          <div
            className={`absolute w-2 h-2 ${dotsColors.one1} rounded-full -top-1 -left-1 animate-pulse`}
          ></div>
          <div
            className={`absolute w-3 h-3 ${dotsColors.two2} rounded-full -bottom-1 -right-1 animate-pulse`}
          ></div>
          <div
            className={`absolute w-1.5 h-1.5 ${dotsColors.one1} rounded-full top-1/2 -left-2 animate-pulse`}
          ></div>
          <div
            className={`absolute w-1.5 h-1.5 ${dotsColors.two2} rounded-full top-1/2 -right-2 animate-pulse`}
          ></div>
          <div
            className={`absolute w-1.5 h-1.5 ${dotsColors.three3} rounded-full -top-2 left-3 animate-pulse`}
          ></div>
          <div
            className={`absolute w-1.5 h-1.5 ${dotsColors.three3} rounded-full bottom-0 left-1/2 animate-pulse`}
          ></div>
          <div
            className={`absolute w-1.5 h-1.5 ${dotsColors.four4} rounded-full -top-0.5 right-2 animate-pulse`}
          ></div>
          <div
            className={`absolute w-1 h-1 ${dotsColors.four4} rounded-full -bottom-1.5 left-2 animate-pulse`}
          ></div>
        </div>
      )}
      {link.title}
    </Link>
  );
};

export default NavLink;
