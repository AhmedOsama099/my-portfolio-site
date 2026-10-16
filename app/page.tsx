"use client";

import HomeDescription from "@/Components/home/HomeDescription";
import HomeImage from "@/Components/home/HomeImage";
import HomeStats from "@/Components/home/HomeStats";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import { globalPX } from "./constants";
import SocialMediaLinks from "@/Components/navbar/SocialMediaLinks";
import { socialMedia } from "@/data/navbar";

export default function Home() {
  return (
    <MotionPageWrapper>
      <div
        className={`flex flex-col gap-8 md:gap-12 py-4 md:py-8 px-4 ${globalPX} relative max-w-7xl mx-auto`}
      >
        {/* Hero Section: Split Portrait Image + Narrative Description */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
          {/* Image Container with Left (Programmer) and Right (Writer) Callouts */}
          <HomeImage />

          {/* Text & CTAs Container */}
          <HomeDescription />
        </div>

        {/* Mobile Social Media Links */}
        <SocialMediaLinks
          socialMedia={socialMedia}
          className="flex min-[980px]:hidden items-center justify-center w-full my-1"
        />

        {/* Live Numbers & Stats Component (Projects, Tech Blog, Literature Writings, Analytics) */}
        <HomeStats />
      </div>
    </MotionPageWrapper>
  );
}
