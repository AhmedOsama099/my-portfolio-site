import { NavLinkType, SocialMediaType } from "@/types/navbar";

// Navigation links data
export const links: NavLinkType[] = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

// Social media links data
export const socialMedia: SocialMediaType[] = [
  {
    link: "https://www.facebook.com/share/181kSLpbfU/",
    imageURL: "/images/facebook.svg",
    alt: "facebook",
  },
  {
    link: "https://github.com/AhmedOsama099",
    imageURL: "/images/github.svg",
    alt: "github",
  },
  {
    link: "https://www.linkedin.com/in/ahmedosama099",
    imageURL: "/images/linkedin.svg",
    alt: "linkedin",
  },
  {
    link: "https://wa.me/201011494459",
    imageURL: "/images/whatsapp.svg",
    alt: "WhatsApp",
  },
];
