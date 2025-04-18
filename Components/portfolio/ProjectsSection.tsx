import { motion } from "framer-motion";
import { ProjectsSectionProps } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ projects, containerRef }: ProjectsSectionProps) => {
  return (
    <div
      id="projects"
      className="relative z-10 py-20 bg-gradient-to-b from-blue-50 to-indigo-50"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-36 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          My Projects Examples
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
