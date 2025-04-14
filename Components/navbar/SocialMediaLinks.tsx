"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialMediaLinksProps } from "@/types/navbar";
import { cn } from "@/lib/tailwind";
import myImageLoader from "@/imageLoader";

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  socialMedia,
  className,
}) => (
  <div className={cn("gap-4 w-1/3 ", className)}>
    {socialMedia.map((item) => (
      <Link
        key={item.alt}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          loader={myImageLoader}
          src={item.imageURL}
          alt={item.alt}
          width={70}
          height={70}
          className="min-w-6"
        />
      </Link>
    ))}
  </div>
);

export default SocialMediaLinks;
