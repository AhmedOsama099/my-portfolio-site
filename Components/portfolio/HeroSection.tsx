import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative z-10 h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#565FA1] to-[#EE3E54]">
            Creative Portfolio
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Explore my collection of projects that showcase my skills in web
          development, UI/UX design, and creative problem-solving.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="inline-block px-8 py-4 bg-[#565FA1] text-white rounded-full font-medium hover:bg-[#4A5290] transition-all hover:shadow-lg"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
