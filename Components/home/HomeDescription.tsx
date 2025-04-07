import Link from "next/link";
import React from "react";

const HomeDescription = () => {
  return (
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 justify-normal lg:justify-center lg:mt-0 mt-4 ">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold lg:text-start text-center">
        Building Engaging Interfaces, Empowering Digital Journeys.
      </h1>
      {/* Desc */}
      <p className="md:text-xl lg:text-start text-center">
        With over 4 years of experience crafting seamless user experiences, I
        blend technical precision with creative flair to build performant,
        accessible, and visually striking front-end solutions. From enterprise
        dashboards to social platforms, my work bridges business goals and user
        needs through thoughtful design and clean code.
      </p>
      {/* Buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-4  ">
        <Link
          href="/portfolio"
          className="p-4 flex-1  rounded-lg ring-1 ring-black bg-black text-white text-center"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="p-4 flex-1 rounded-lg ring-1 ring-black sm:mb-0 mb-4 text-center"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default HomeDescription;
