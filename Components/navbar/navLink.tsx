import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/types/navbar";

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const pathName = usePathname();

  const isActive =
    pathName === link.url
      ? "bg-[#FCE0A2] text-[#565FA1] font-medium outline-2  p-2 outline-dashed  hover:outline-dotted transition-all duration-300"
      : "";
  return (
    <Link
      className={`rounded p-1 ${isActive} relative`}
      key={link.title}
      href={link.url}
    >
      {isActive && (
        <div className="z-20">
          <div className="absolute w-2 h-2 bg-[#FFB800] rounded-full -top-1 -left-1 animate-pulse"></div>
          <div className="absolute w-3 h-3 bg-[#EE3E54] rounded-full -bottom-1 -right-1 animate-pulse"></div>
          <div className="absolute w-1.5 h-1.5 bg-[#FFB800] rounded-full top-1/2 -left-2 animate-pulse"></div>
          <div className="absolute w-1.5 h-1.5 bg-[#EE3E54] rounded-full top-1/2 -right-2 animate-pulse"></div>
          <div className="absolute w-1.5 h-1.5 bg-white rounded-full -top-2 left-3 animate-pulse"></div>
          <div className="absolute w-1.5 h-1.5 bg-white rounded-full bottom-0 left-1/2 animate-pulse"></div>
          <div className="absolute w-1.5 h-1.5 bg-[#8889B9] rounded-full -top-0.5 right-2 animate-pulse"></div>
          <div className="absolute w-1 h-1 bg-[#8889B9] rounded-full -bottom-1.5 left-2 animate-pulse"></div>
        </div>
      )}
      {link.title}
    </Link>
  );
};

export default NavLink;
