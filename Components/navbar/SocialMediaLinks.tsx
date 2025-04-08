import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialMediaType } from "./types";

interface SocialMediaLinksProps {
  socialMedia: SocialMediaType[];
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ socialMedia }) => (
  <div className="hidden md:flex gap-4 w-1/3 justify-end">
    {socialMedia.map((item) => (
      <Link
        key={item.alt}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
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