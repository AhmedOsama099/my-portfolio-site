"use client";

import HeroSection from "@/Components/home/HeroSection";
import MotionPageWrapper from "@/Components/motionPageWrapper";

export default function Home() {
  return (
    <MotionPageWrapper className="min-h-full w-full flex flex-col justify-start sm:justify-center items-center overflow-x-hidden overflow-y-auto">
      <div
        className="w-full flex-1 flex flex-col items-center justify-start sm:justify-center pt-1 sm:pt-2 pb-3 px-3 sm:px-6 md:px-8 relative max-w-5xl mx-auto"
      >
        {/* Full Single-Page Hero with PNG Portrait, Title, Social Icons, and Expressive Stats */}
        <HeroSection />
      </div>
    </MotionPageWrapper>
  );
}
