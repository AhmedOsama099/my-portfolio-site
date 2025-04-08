import React from "react";
import NavLink from "./navLink";
import { DesktopNavLinksProps } from "@/types/navbar";

const DesktopNavLinks: React.FC<DesktopNavLinksProps> = ({ links }) => (
  <div className="hidden md:flex items-center gap-4 w-1/3 text-xl">
    {links.map((link) => (
      <NavLink link={link} key={link.title} />
    ))}
  </div>
);

export default DesktopNavLinks;
