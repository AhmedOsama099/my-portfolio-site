import { ParallaxBackgroundProps } from "@/types/portfolio";
import { motion } from "framer-motion";

const ParallaxBackground = ({
  backgroundY,
  opacity,
}: ParallaxBackgroundProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-0"
      style={{
        backgroundImage: "url('/images/grid-pattern.svg')",
        backgroundSize: "cover",
        opacity,
        y: backgroundY,
      }}
    />
  );
};

export default ParallaxBackground;
