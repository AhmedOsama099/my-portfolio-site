import React from "react";

const HomeDescription = () => {
  return (
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 justify-normal lg:justify-center lg:mt-0 mt-4 ">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold lg:text-start text-center">
        Crafting Digital Experience, Designing Tomorrow.
      </h1>
      {/* Desc */}
      <p className="md:text-xl lg:text-start text-center">
        Welcome to my digital canvas, Where Innovation and creativity converge.
        with a keen eye for aesthetics and a mystery of code, my portfolio show
        case a diverse collection of projects that reflect my commitment to
        excellence.
      </p>
      {/* Buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-4  ">
        <button className="p-4 flex-1  rounded-lg ring-1 ring-black bg-black text-white">
          View My Work
        </button>
        <button className="p-4 flex-1  rounded-lg ring-1 ring-black sm:mb-0 mb-4 ">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default HomeDescription;
