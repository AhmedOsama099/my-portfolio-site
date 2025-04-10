"use client";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import { useRef } from "react";
import { projects } from "@/data/portfolio";

// Import components
import HeroSection from "@/Components/portfolio/HeroSection";
import ProjectsSection from "@/Components/portfolio/ProjectsSection";
import ContactCTA from "@/Components/portfolio/ContactCTA";

const PortfolioPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <MotionPageWrapper>
      <div className="relative min-h-screen">
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
