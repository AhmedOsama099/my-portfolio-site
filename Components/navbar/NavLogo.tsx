import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

const NavLogo: React.FC = () => (
  <div className="w-1/3 flex-col items-center md:mt-8 mt-2 flex justify-center">
    <Link href="/">
      <Image src={logo} alt="logo" className="min-w-36 min-h-36 size-36" />
    </Link>
  </div>
);

export default NavLogo;