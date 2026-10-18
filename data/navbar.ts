import { NavLinkType, SocialMediaType } from "@/types/navbar";

// Navigation links data - Tech Blog, About on left; Logo in center; Portfolio, خواطر on right
export const navLinks: NavLinkType[] = [
  { url: "/tech-blog", title: "Tech Blog" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/blog", title: "خواطر" },
];

export const mobileNavLinks: NavLinkType[] = [
  { url: "/", title: "Home" },
  { url: "/tech-blog", title: "Tech Blog" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/blog", title: "خواطر" },
];

export const programmerLinks: NavLinkType[] = navLinks;
export const writerLinks: NavLinkType[] = navLinks;

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
