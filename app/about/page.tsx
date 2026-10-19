"use client";

import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import LocaleLink from "@/Components/LocaleLink";
import { useInView, useScroll } from "framer-motion";
import Brain from "@/Components/about/Brain";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import Biography from "@/Components/about/Biography";
import Skills from "@/Components/about/Skills";
import Experience from "@/Components/about/Experience";
import DownloadCVButton from "@/Components/about/DownloadCVButton";
import { skillsList, experienceList } from "@/data/about";

const AboutPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { once: true });
  const isExperienceRefInView = useInView(experienceRef, { once: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <MotionPageWrapper className="h-full overflow-hidden">
      {/* Container — sole scroll owner */}
      <div
        className="h-full overflow-y-auto custom-scrollbar lg:flex justify-between"
        ref={containerRef}
      >
        {/* Text Container*/}
        <div className="p-4 sm:p-8 md:p-12 xl:p-24 flex flex-col gap-24 md:gap-32 lg:gap-52 lg:w-2/3 xl:w-[57.5%] pb-36 lg:pb-24">
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
            <LocaleLink
              href="/contact"
              aria-label="Contact Ahmed Osama"
              title="Contact Me"
              className="group relative flex items-center justify-center p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-[#565FA1] via-[#636dbb] to-[#EE3E54] hover:from-[#4A5396] hover:to-[#E02D43] text-white shadow-xl shadow-[#565FA1]/35 hover:shadow-2xl hover:shadow-[#EE3E54]/45 border border-white/40 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110"
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
              <span className="absolute inset-0 rounded-full border border-white/30 pointer-events-none animate-pulse" />
            </LocaleLink>

            <DownloadCVButton isFixed={false} />
          </div>
        </div>

        {/* Mobile Floating Action Controls (Portaled to document.body to avoid parent transforms and ensure proper viewport positioning) */}
        {mounted &&
          createPortal(
            <div
              className="lg:hidden fixed z-50 flex flex-col items-end gap-3 pointer-events-auto"
              style={{
                position: "fixed",
                bottom: "max(1.5rem, calc(1rem + env(safe-area-inset-bottom, 0px)))",
                right: "max(1.5rem, calc(1rem + env(safe-area-inset-right, 0px)))",
              }}
            >
              <LocaleLink
                href="/contact"
                aria-label="Contact Ahmed Osama"
                title="Contact Me"
                className="group relative flex items-center justify-center p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-[#565FA1] via-[#636dbb] to-[#EE3E54] hover:from-[#4A5396] hover:to-[#E02D43] text-white shadow-xl shadow-[#565FA1]/35 hover:shadow-2xl hover:shadow-[#EE3E54]/45 border border-white/40 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110"
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
                <span className="absolute inset-0 rounded-full border border-white/30 pointer-events-none animate-pulse" />
              </LocaleLink>

              <DownloadCVButton isFixed={false} />
            </div>,
            document.body
          )}
      </div>
    </MotionPageWrapper>
  );
};

export default AboutPage;
