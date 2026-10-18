"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll } from "framer-motion";
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

        {/* SVG Container with Contact CTA & Resume under brain */}
        <div className="hidden lg:flex flex-col items-center justify-between w-1/3 xl:w-[45.5%] sticky top-0 h-full max-h-full py-4 shrink-0">
          <div className="w-full flex-1 min-h-0 flex items-center justify-center p-2">
            <Brain scrollYProgress={scrollYProgress} />
          </div>

          {/* Contact icon under brain by about 20-30px, and directly under it the Resume button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="mt-2 mb-4 w-full flex flex-col items-center justify-center gap-3.5 shrink-0"
          >
            {/* Contact Icon */}
            <div className="flex flex-col items-center gap-1 group">
              <Link
                href="/contact"
                aria-label="Contact Ahmed Osama"
                className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#565FA1] via-[#636dbb] to-[#EE3E54] hover:from-[#4A5396] hover:to-[#E02D43] text-white shadow-xl shadow-[#565FA1]/35 hover:shadow-2xl hover:shadow-[#EE3E54]/45 border border-white/40 transition-all duration-300 hover:scale-110 active:scale-95"
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
              </Link>
              <span className="text-xs font-semibold text-slate-300 tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                Contact Me
              </span>
            </div>

            {/* Resume button under Contact Icon */}
            <DownloadCVButton isFixed={false} />
          </motion.div>
        </div>

        {/* Mobile Contact & Resume Floating Controls (for < lg screens where brain column is hidden) */}
        <div className="lg:hidden fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
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
