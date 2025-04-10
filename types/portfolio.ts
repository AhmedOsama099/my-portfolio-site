import { MotionValue } from "framer-motion";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
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
