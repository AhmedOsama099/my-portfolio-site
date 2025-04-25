"use client";

import { useState } from "react";
import HomeDescription from "@/Components/home/HomeDescription";
import HomeImage from "@/Components/home/HomeImage";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import { globalPX } from "./constants";
import SocialMediaLinks from "@/Components/navbar/SocialMediaLinks";
import { socialMedia } from "@/data/navbar";
import PortfolioModeSwitch from "@/Components/PortfolioModeSwitch";

export default function Home() {
  const [portfolioMode, setPortfolioMode] = useState<"programmer" | "writer">(
    "programmer"
  );

  const handleModeToggle = (mode: "programmer" | "writer") => {
    setPortfolioMode(mode);
  };

  return (
    <MotionPageWrapper>
      <div
        className={`h-full min-h-screen flex flex-col lg:flex-row px-4 ${globalPX}`}
      >
        {/* Image Container */}
        <HomeImage />

        {/* Social Media Links */}
        <SocialMediaLinks
          socialMedia={socialMedia}
          className="flex min-[980px]:hidden items-center justify-center w-full my-2"
        />

        {/* Text Container */}
        <HomeDescription />

        {/* Portfolio Mode Switch Button */}
        <PortfolioModeSwitch
          onToggle={handleModeToggle}
          currentMode={portfolioMode}
        />
      </div>
    </MotionPageWrapper>
  );
}
