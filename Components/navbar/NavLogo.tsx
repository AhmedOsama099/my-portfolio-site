"use client";

import React from "react";
import Image from "next/image";
import LocaleLink from "@/Components/LocaleLink";

const NavLogo: React.FC = () => (
  <div className="flex-col justify-center flex min-[980px]:items-center items-start shrink-0 px-2 lg:px-6">
    <LocaleLink href="/" aria-label="Ahmed Osama - Home">
      <Image
        src={"/images/logo.svg"}
        alt="Ahmed Osama logo"
        width={140}
        height={140}
        className="w-28 sm:w-36 h-auto"
      />
    </LocaleLink>
  </div>
);

export default NavLogo;
