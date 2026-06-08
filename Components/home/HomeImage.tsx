import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const HomeImage = () => {
  const { isProgrammer } = useTheme();

  return (
    <div className=" h-[300px] lg:h-screen  lg:w-1/2 relative rtl:transform rtl:scale-x-[-1]">
      <Image
        src={`/images/${isProgrammer ? "hero1.png" : "hero.png"}`}
        alt="Ahmed Osama"
        fill
        className="object-contain min-w-52"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
};

export default HomeImage;
