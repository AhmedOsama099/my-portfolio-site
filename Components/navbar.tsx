"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

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
    link: "https://www.facebook.com/share/181kSLpbfU/",
    imageURL: "/facebook.png",
    alt: "facebook",
  },
  {
    link: "https://github.com/AhmedOsama099",
    imageURL: "/github.png",
    alt: "github",
  },
  {
    link: "https://www.linkedin.com/in/ahmedosama099",
    imageURL: "/linkedin.png",
    alt: "linkedin",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuIconClick = () => {
    setOpen((prev) => !prev);
  };

  const topVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariant = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariant = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3 text-xl">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* Logo */}
      <div className="md:hidden lg:flex xl:justify-center xl:w-1/3">
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
          <Link
            key={ele.alt}
            href={ele.link}
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <motion.div
            variants={topVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
          <motion.div
            variants={centerVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          />
          <motion.div
            variants={bottomVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
        </button>

        {open && (
          <motion.div
            variants={listVariant}
            initial="closed"
            animate="opened"
            className="absolute bg-black text-white flex items-center justify-center gap-8 text-4xl h-screen w-screen flex-col top-0 start-0 z-40 "
          >
            {links.map((link) => (
              <motion.div variants={listItemVariant} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
