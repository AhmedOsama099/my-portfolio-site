"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import myImageLoader from "@/imageLoader";

const NavLogo: React.FC = () => (
  <div className="w-1/3 flex-col justify-center flex min-[980px]:items-center items-start">
    <Link href="/">
      <Image
        loader={myImageLoader}
        src={"/images/logo.svg"}
        alt="logo"
        width={150}
        height={150}
      />
    </Link>
  </div>
);

export default NavLogo;
