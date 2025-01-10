import HomeDescription from "@/Components/home/HomeDescription";
import HomeImage from "@/Components/home/HomeImage";
import MotionPageWrapper from "@/Components/motionPageWrapper";

export default function Home() {
  return (
    <MotionPageWrapper>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container */}
        <HomeImage />
        {/* Text  Container */}
        <HomeDescription />
      </div>
    </MotionPageWrapper>
  );
}
