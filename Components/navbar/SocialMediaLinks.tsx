"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialMedia as defaultSocialMedia } from "@/data/navbar";
import { SocialMediaLinksProps } from "@/types/navbar";

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  socialMedia = defaultSocialMedia,
  className = "",
}) => {
  return (
    <div
      role="region"
      aria-label="Social media channels"
      className={`inline-flex items-center gap-1 p-0.5 sm:p-1 rounded-full bg-slate-100/90 border border-slate-200/90 shadow-inner select-none shrink-0 ${className}`}
    >
      {socialMedia.map((item) => (
        <Link
          key={item.alt}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ahmed Osama on ${item.alt}`}
          title={item.alt}
          className="group relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-white/80 hover:bg-white border border-white/90 hover:border-indigo-200 shadow-sm hover:shadow transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Image
            src={item.imageURL}
            alt={item.alt}
            width={16}
            height={16}
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-75 group-hover:opacity-100 transition-opacity"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
