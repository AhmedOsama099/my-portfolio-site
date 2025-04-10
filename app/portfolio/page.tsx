"use client";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/portfolio";

// Import components
import ParallaxBackground from "@/Components/portfolio/ParallaxBackground";
import HeroSection from "@/Components/portfolio/HeroSection";
import ProjectsSection from "@/Components/portfolio/ProjectsSection";
import ContactCTA from "@/Components/portfolio/ContactCTA";

const PortfolioPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [1, 0.3, 0.3, 1]
  );

  return (
    <MotionPageWrapper>
      <div className="relative min-h-screen">
        {/* Parallax Background */}
        <ParallaxBackground backgroundY={backgroundY} opacity={opacity} />

        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <ProjectsSection projects={projects} containerRef={containerRef} />

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </MotionPageWrapper>
  );
};

export default PortfolioPage;
