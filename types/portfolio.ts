import { MotionValue } from "framer-motion";
import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: StaticImageData | string;
  technologies: string[];
  siteLink: string;
  videoLink: string;
  codeLink: string;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export interface ProjectsSectionProps {
  projects: Project[];
  containerRef: React.RefObject<HTMLDivElement>;
}

export interface ParallaxBackgroundProps {
  backgroundY: MotionValue<string>;
  opacity: MotionValue<number>;
}
