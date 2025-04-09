import React from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";
import { SkillItem } from "@/types/about";

interface SkillsProps {
  skills: SkillItem[];
  isInView: boolean;
}

const Skills: React.FC<SkillsProps> = ({ skills, isInView }) => {
  return (
    <div className="flex flex-col gap-12 justify-center">
      {/* Skills Title */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        Skills
      </motion.h1>

      {/* Skills List */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isInView ? { x: 0 } : {}}
        className="flex gap-4 flex-wrap"
      >
        {skills.map(({ name, key }) => (
          <div
            key={key}
            className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            {name}
          </div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
};

export default Skills;
