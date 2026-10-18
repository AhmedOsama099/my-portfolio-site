"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import Biography from "@/Components/about/Biography";
import Skills from "@/Components/about/Skills";
import Experience from "@/Components/about/Experience";
import DownloadCVButton from "@/Components/about/DownloadCVButton";
import { skillsList, experienceList } from "@/data/about";

const AboutPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { once: true });
  const isExperienceRefInView = useInView(experienceRef, { once: true });

  return (
    <MotionPageWrapper className="h-full !overflow-hidden">
      {/* Container */}
      <div
        className="h-full overflow-y-auto lg:flex justify-between custom-scrollbar"
        ref={containerRef}
      >
        {/* Text Container*/}
        <div className="p-4 sm:p-8 md:p-12 xl:p-24 flex flex-col gap-24 md:gap-32 lg:gap-52 lg:w-2/3 xl:w-[57.5%]">
          {/* Biography Container*/}
          <Biography />

          {/* Skills Container*/}
          <div ref={skillRef}>
            <Skills skills={skillsList} isInView={isSkillRefInView} />
          </div>

          {/* Experience Container */}
          <div ref={experienceRef}>
            <Experience
              experiences={experienceList}
              isInView={isExperienceRefInView}
            />
          </div>
        </div>



        {/* Contact & Resume Floating Controls */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
          <Link
            href="/contact"
            aria-label="Contact Ahmed Osama"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#565FA1] via-[#636dbb] to-[#EE3E54] text-white shadow-xl shadow-[#565FA1]/40 border border-white/40 active:scale-95 transition-transform"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </Link>
          <DownloadCVButton isFixed={false} />
        </div>
      </div>
    </MotionPageWrapper>
  );
};

export default AboutPage;
