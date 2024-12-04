import MotionPageWrapper from "@/Components/motionPageWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <MotionPageWrapper>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src={"/hero.png"}
            alt="myProfile"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Text  Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experience, Designing Tomorrow.
          </h1>
          {/* Desc */}
          <p className="md:text-xl">
            Welcome to my digital canvas, Where Innovation and creativity
            converge. with a keen eye for aesthetics and a mystery of code, my
            portfolio show case a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* Buttons */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black ">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </MotionPageWrapper>
  );
}
