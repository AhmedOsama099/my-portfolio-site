import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

const NavLogo: React.FC = () => (
  <div className="w-1/3 flex-col justify-center flex min-[900px]:items-center items-start">
    <Link href="/">
      <Image src={logo} alt="logo" className="min-w-36 min-h-36 size-36" />
    </Link>
  </div>
);

export default NavLogo;
