import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "@/types/portfolio";

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-12`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Project Image */}
      <div className="lg:w-1/2 relative overflow-hidden rounded-xl group">
        <div className="aspect-video relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <motion.div
          className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          whileHover={{ y: 0 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        <span className="text-sm font-medium text-[#EE3E54] mb-2">
          {project.category}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-600 mb-6">{project.description}</p>
        <div className="flex gap-4">
          <Link
            href={project.demoLink}
            className="px-6 py-2 bg-[#565FA1] text-white rounded-lg hover:bg-[#4A5290] transition-colors"
            target="_blank"
          >
            Live Demo
          </Link>
          <Link
            href={project.codeLink}
            className="px-6 py-2 border border-[#565FA1] text-[#565FA1] rounded-lg hover:bg-[#565FA1]/5 transition-colors"
            target="_blank"
          >
            View Code
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
