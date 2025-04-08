import React from "react";
import NavLink from "./navLink";
import { NavLinkType } from "./types";

interface DesktopNavLinksProps {
  links: NavLinkType[];
}

const DesktopNavLinks: React.FC<DesktopNavLinksProps> = ({ links }) => (
  <div className="hidden md:flex gap-4 w-1/3 text-xl">
    {links.map((link) => (
      <NavLink link={link} key={link.title} />
    ))}
  </div>
);

export default DesktopNavLinks;
