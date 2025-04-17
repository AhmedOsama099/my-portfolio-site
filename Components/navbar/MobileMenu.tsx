import React from "react";
import MenuButton from "./MenuButton";
import MobileMenuContent from "./MobileMenuContent";
import { ExtendedMobileMenuProps } from "@/types/navbar";

const MobileMenu: React.FC<ExtendedMobileMenuProps> = ({
  open,
  toggleMenu,
  links,
}) => (
  <div className="min-[980px]:hidden">
    <MenuButton open={open} toggleMenu={toggleMenu} />
    {open && <MobileMenuContent links={links} toggleMenu={toggleMenu} />}
  </div>
);

export default MobileMenu;
