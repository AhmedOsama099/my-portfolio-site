import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "@/types/portfolio";

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-12 mb-24 `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Project Image with border styling and no white background */}
      <div className="lg:w-1/2 relative overflow-hidden group">
        <div className="aspect-video relative rounded-xl border-2 border-[#565FA1]/20 shadow-lg overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#565FA1] rounded-tl-xl z-10"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#565FA1] rounded-tr-xl z-10"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#565FA1] rounded-bl-xl z-10"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#565FA1] rounded-br-xl z-10"></div>

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            style={{ filter: "brightness(0.95) contrast(1.05)" }}
          />

          {/* Gradient overlay that appears on hover */}
          <div className="absolute inset-0 " />

          {/* Technology tags that slide up on hover */}
          <motion.div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Info with transparent background */}
      <div className="lg:w-1/2 flex flex-col justify-center bg-transparent">
        <span className="text-sm font-medium text-[#EE3E54] mb-2 tracking-wider uppercase">
          {project.category}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-4">
          <Link
            href={project.siteLink}
            className="px-6 py-2 bg-gradient-to-r from-[#565FA1] to-[#6A73B5] text-white rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            target="_blank"
          >
            Live Demo
          </Link>
          <Link
            href={project.codeLink}
            className="px-6 py-2 border border-[#565FA1] text-[#565FA1] rounded-lg hover:bg-[#565FA1]/5 transition-all duration-300 hover:-translate-y-1"
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
