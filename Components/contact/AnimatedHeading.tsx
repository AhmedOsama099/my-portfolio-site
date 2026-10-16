import { motion } from "framer-motion";
import { useAppTranslation } from "@/hooks/useAppTranslation";

interface AnimatedHeadingProps {
  text: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ text }) => {
  const { currentLanguage } = useAppTranslation();
  const headingColor = "#565FA1";

  const textArr = currentLanguage === "ar" ? text.split(" ") : text.split("");

  return (
    <motion.div
      className="text-6xl md:text-7xl font-bold"
      style={{ color: headingColor }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {textArr.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.3 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.1,
          }}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedHeading;
