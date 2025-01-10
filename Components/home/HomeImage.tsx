import Image from "next/image";

const HomeImage = () => {
  return (
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image
        src={"/hero.png"}
        alt="myProfile"
        fill
        className="object-contain min-w-52"
        priority
      />
    </div>
  );
};

export default HomeImage;
