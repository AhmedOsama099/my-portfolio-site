"use client";

import HomeDescription from "@/Components/home/HomeDescription";
import HomeImage from "@/Components/home/HomeImage";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import { globalPX } from "./constants";
import SocialMediaLinks from "@/Components/navbar/SocialMediaLinks";
import { socialMedia } from "@/data/navbar";
import PortfolioModeSwitch from "@/Components/PortfolioModeSwitch";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { isProgrammer } = useTheme();

  const socialLinks = isProgrammer
    ? socialMedia
    : socialMedia.filter((link) => link.alt !== "github");

  return (
    <MotionPageWrapper>
      <div
        className={`flex flex-col lg:items-center lg:flex-row px-4 ${globalPX} relative`}
      >
        {/* Portfolio Mode Switch Button */}
        <PortfolioModeSwitch />

        {/* Image Container */}
        <HomeImage />

        {/* Social Media Links */}
        <SocialMediaLinks
          socialMedia={socialLinks}
          className="flex min-[980px]:hidden items-center justify-center w-full my-2"
        />

        {/* Text Container */}
        <HomeDescription />
      </div>
    </MotionPageWrapper>
  );
}
