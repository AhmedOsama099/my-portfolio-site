"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const socialMedia = [
  {
    link: "",
    imageURL: "/facebook.png",
    alt: "facebook",
  },
  {
    link: "",
    imageURL: "/github.png",
    alt: "github",
  },
  {
    link: "",
    imageURL: "/linkedin.png",
    alt: "linkedin",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuIconClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="h-full flex px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 items-center justify-between">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <Link key={link.title} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>

      {/* Logo */}
      <div className="md:hidden lg:flex justify-center w-1/3">
        <Link
          href={"/"}
          className="flex items-center p-1 justify-center font-semibold bg-black rounded-md text-sm"
        >
          <span className="text-white me-1">Lama</span>
          <span className="bg-white flex items-center justify-center rounded text-black w-12 h-8">
            .dev
          </span>
        </Link>
      </div>

      {/* Social */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        {socialMedia.map((ele) => (
          <Link key={ele.alt} href={ele.link}>
            <Image src={ele.imageURL} alt={ele.alt} width={24} height={24} />
          </Link>
        ))}
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden">
        <button
          onClick={handleMenuIconClick}
          className="flex justify-between flex-col w-10 h-8 z-50 relative "
        >
          <div className="w-10 h-1 bg-white rounded" />
          <div className="w-10 h-1 bg-white rounded" />
          <div className="w-10 h-1 bg-white rounded" />
        </button>

        {open && (
          <div className="absolute bg-black text-white flex items-center justify-center gap-8 text-4xl h-screen w-screen flex-col top-0 start-0">
            {links.map((link) => (
              <Link key={link.title} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
