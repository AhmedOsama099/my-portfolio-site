import { MotionValue } from "framer-motion";
import { StaticImageData } from "next/image";

export interface ProjectRole {
  label: string;
  icon?: string;
  link: string;
}

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
  // Optional: live demos of the same codebase themed as different personas
  // (used to showcase a re-themeable / multi-role project).
  roles?: ProjectRole[];
  roleNote?: string;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
  viewMode?: "grid" | "list"; // Optional prop with default grid view
}

export interface ProjectsSectionProps {
  projects: Project[];
  containerRef: React.RefObject<HTMLDivElement>;
}

export interface ParallaxBackgroundProps {
  backgroundY: MotionValue<string>;
  opacity: MotionValue<number>;
}
