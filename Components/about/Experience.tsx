import React from "react";
import { motion } from "framer-motion";
import { ExperienceItem } from "@/types/about";
import ExperienceCard from "./ExperienceCard";

interface ExperienceProps {
  experiences: ExperienceItem[];
  isInView: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ experiences, isInView }) => {
  return (
    <div className="flex flex-col gap-12 justify-center  ">
      {/* Experience title */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        Experience
      </motion.h1>

      {/* Experience list */}
      <motion.div initial={{ x: "-300px" }} animate={isInView ? { x: 0 } : {}}>
        {/* Experience list items mapped from array */}
        {experiences.map((experience, index) => (
          <div className="flex justify-between overflow-x-hidden" key={index}>
            {/* Left */}
            <div
              className={`sm:w-[45%] sm:block mb-16 w-full ${
                experience.side === "right" ? "hidden" : ""
              }`}
            >
              {experience.side === "left" && (
                <ExperienceCard experience={experience} />
              )}
            </div>

            {/* Center */}
            <div className="hidden sm:flex sm:justify-center">
              {/* Line */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* Line Circle */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
              </div>
            </div>

            {/* Right */}
            <div
              className={`sm:w-[45%] sm:block mb-16 w-full ${
                experience.side === "left" ? "hidden" : ""
              }`}
            >
              {experience.side === "right" && (
                <ExperienceCard experience={experience} />
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
