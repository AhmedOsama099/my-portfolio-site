"use client";

import React, { useRef } from "react";
import { useInView, useScroll } from "framer-motion";
import Brain from "@/Components/Brain";
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
  const isSkillRefInView = useInView(skillRef);
  const isExperienceRefInView = useInView(experienceRef);

  return (
    <MotionPageWrapper>
      {/* Container */}
      <div className="h-full lg:flex justify-between" ref={containerRef}>
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

        {/* SVG Container */}
        <div className="hidden lg:block w-1/3 xl:w-[45.5%] sticky top-0">
          <Brain scrollYProgress={scrollYProgress} />
        </div>

        {/* Download CV Button */}
        <DownloadCVButton />
      </div>
    </MotionPageWrapper>
  );
};

export default AboutPage;
