import HomeDescription from "@/Components/home/HomeDescription";
import HomeImage from "@/Components/home/HomeImage";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import { globalPX } from "./constants";
import SocialMediaLinks from "@/Components/navbar/SocialMediaLinks";
import { socialMedia } from "@/data/navbar";

export default function Home() {
  return (
    <MotionPageWrapper>
      <div
        className={`h-full md:min-h-full min-h-screen  flex flex-col lg:flex-row px-4 ${globalPX}`}
      >
        {/* Image Container */}
        <HomeImage />

        {/* Social Media Links */}
        <SocialMediaLinks
          socialMedia={socialMedia}
          className="flex min-[980px]:hidden items-center justify-center w-full my-2"
        />

        {/* Text  Container */}
        <HomeDescription />
      </div>
    </MotionPageWrapper>
  );
}
