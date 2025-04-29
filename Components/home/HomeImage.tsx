import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const HomeImage = () => {
  const { isProgrammer } = useTheme();

  return (
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image
        src={`/images/${isProgrammer ? "hero1.png" : "hero.png"}`}
        alt="myProfile"
        fill
        className="object-contain min-w-52"
        priority
        sizes={"100%"}
      />
    </div>
  );
};

export default HomeImage;
