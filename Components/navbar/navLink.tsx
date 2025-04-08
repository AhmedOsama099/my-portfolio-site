import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/types/navbar";

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const pathName = usePathname();

  const isActive = pathName === link.url ? "bg-black text-white" : "";
  return (
    <Link
      className={`rounded p-1 ${isActive}`}
      key={link.title}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
