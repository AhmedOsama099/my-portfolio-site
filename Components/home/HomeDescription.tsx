import Link from "next/link";
import React from "react";

const HomeDescription = () => {
  return (
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 justify-normal lg:justify-center lg:mt-0 mt-4 ">
      {/* Title */}
      <h1 className="text-4xl  md:text-5xl xl:6xl font-bold lg:text-start text-center">
        Transforming Ideas into Interfaces, and Interfaces into Impact.
      </h1>
      {/* Desc */}
      <p className="md:text-xl lg:text-start text-center">
        With over 4 years of experience as a software engineer, I craft
        intuitive, performant, and accessible digital experiences that serve
        real-world needs. Whether building enterprise-grade dashboards or
        dynamic social platforms, I merge technical depth with a keen eye for
        design—bridging business goals and user expectations through clean,
        scalable, and maintainable code.
      </p>
      {/* Buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-4 pb-4 ">
        <Link
          href="/portfolio"
          className="p-4 flex-1  rounded-lg ring-1 ring-black bg-black text-white text-center"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="p-4 flex-1 rounded-lg ring-1 ring-black sm:mb-0  text-center"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default HomeDescription;
