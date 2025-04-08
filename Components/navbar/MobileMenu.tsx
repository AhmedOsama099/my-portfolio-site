import React from "react";
import { MobileMenuProps } from "./types";
import MenuButton from "./MenuButton";
import MobileMenuContent from "./MobileMenuContent";
import { NavLinkType } from "./types";

interface ExtendedMobileMenuProps extends MobileMenuProps {
  links: NavLinkType[];
}

const MobileMenu: React.FC<ExtendedMobileMenuProps> = ({ open, toggleMenu, links }) => (
  <div className="md:hidden">
    <MenuButton open={open} toggleMenu={toggleMenu} />
    {open && <MobileMenuContent links={links} />}
  </div>
);

export default MobileMenu;