"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useInView, useScroll } from "framer-motion";
import Brain from "@/Components/about/Brain";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import Biography from "@/Components/about/Biography";
import Skills from "@/Components/about/Skills";
import Experience from "@/Components/about/Experience";
import DownloadCVButton from "@/Components/about/DownloadCVButton";
import { skillsList, experienceList } from "@/data/about";

const AboutPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
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

        {/* Desktop Right Column: Interactive Brain with Contact Icon and Resume Button below */}
        <div className="hidden lg:flex flex-col items-center justify-between w-1/3 xl:w-[42.5%] sticky top-0 h-full z-30 pt-4 pb-8 px-4 select-none">
          {/* Animated Brain */}
          <div className="w-full flex-1 flex items-center justify-center min-h-0">
            <Brain scrollYProgress={scrollYProgress} />
          </div>

          {/* Desktop Controls (Contact icon on top, Resume button under it with respect to brain) */}
          <div className="shrink-0 flex flex-col items-center gap-3.5 z-40">
            <Link
              href="/contact"
              aria-label="Contact Ahmed Osama"
              title="Contact Me"
              className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#565FA1] via-[#636dbb] to-[#EE3E54] text-white shadow-xl shadow-[#565FA1]/35 border border-white/40 hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm pointer-events-none" />
              <svg
                className="w-6 h-6 transition-transform group-hover:scale-110"
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

        {/* Mobile Floating Action Controls (Properly separated without any overlap) */}
        <div className="lg:hidden fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
          <Link
            href="/contact"
            aria-label="Contact Ahmed Osama"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-[#565FA1] via-[#636dbb] to-[#EE3E54] text-white shadow-xl shadow-[#565FA1]/40 border border-white/40 active:scale-95 transition-transform"
          >
            <svg
              className="w-5 h-5"
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
