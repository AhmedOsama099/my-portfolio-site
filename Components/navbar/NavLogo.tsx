"use client";

import React from "react";
import Image from "next/image";
import LocaleLink from "@/Components/LocaleLink";

const NavLogo: React.FC = () => (
  <div className="w-1/3 flex-col justify-center flex min-[980px]:items-center items-start ">
    <LocaleLink href="/" aria-label="Ahmed Osama - Home">
      <Image
        src={"/images/logo.svg"}
        alt="Ahmed Osama logo"
        width={150}
        height={150}
      />
    </LocaleLink>
  </div>
);

export default NavLogo;
