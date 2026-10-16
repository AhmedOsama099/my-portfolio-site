import React from "react";
import NavLink from "./navLink";
import { DesktopNavLinksProps } from "@/types/navbar";

const DesktopNavLinks: React.FC<DesktopNavLinksProps> = ({ links }) => (
  <div className="hidden min-[980px]:flex items-center gap-1.5 min-[1100px]:gap-3 xl:gap-4 text-sm min-[1100px]:text-base xl:text-lg whitespace-nowrap flex-1">
    {links.map((link) => (
      <NavLink link={link} key={link.title} />
    ))}
  </div>
);

export default DesktopNavLinks;
