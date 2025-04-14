import myImageLoader from "@/imageLoader";
import Image from "next/image";

const HomeImage = () => {
  return (
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image
        loader={myImageLoader}
        src={"/images/hero.png"}
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
