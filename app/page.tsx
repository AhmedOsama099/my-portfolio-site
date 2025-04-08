import HomeDescription from "@/Components/home/HomeDescription";
import HomeImage from "@/Components/home/HomeImage";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import { globalPX } from "./constants";

export default function Home() {
  return (
    <MotionPageWrapper>
      <div className={`h-full flex flex-col lg:flex-row px-4 ${globalPX}`}>
        {/* Image Container */}
        <HomeImage />
        {/* Text  Container */}
        <HomeDescription />
      </div>
    </MotionPageWrapper>
  );
}
