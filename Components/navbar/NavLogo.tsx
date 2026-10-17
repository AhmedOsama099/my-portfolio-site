"use client";

import React from "react";
import Image from "next/image";
import LocaleLink from "@/Components/LocaleLink";

const NavLogo: React.FC = () => (
  <div className="flex flex-col items-center justify-center shrink-0">
    <LocaleLink href="/" aria-label="Ahmed Osama - Home" className="block transition-transform duration-300 hover:scale-105 active:scale-95">
      <Image
        src={"/images/logo.svg"}
        alt="Ahmed Osama logo"
        width={110}
        height={38}
        className="w-16 sm:w-20 md:w-22 h-auto drop-shadow-sm"
        priority
      />
    </LocaleLink>
  </div>
);

export default NavLogo;
