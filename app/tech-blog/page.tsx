import Image from "next/image";
import React from "react";

const TechBlogPage = () => {
  const technologies = [
    {
      imageURL: "/images/techLogos/git.svg",
      alt: "git-logo",
    },
  ];

  return (
    <div className="flex flex-wrap gap-2 p-5 justify-center items-center h-screen">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="relative border border-gray-300 py-3 px-5 rounded-3xl bg-[#302d2d] shadow-sm size-48 flex items-center justify-center
          cursor-pointer
          hover:scale-110
          transition-all
          duration-300"
        >
          <span
            className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold py-1 px-2 rounded-full"
            style={{ transform: "translate(50%, -50%) rotate(10deg)" }}
          >
            Soon
          </span>
          <Image src={tech.imageURL} alt={tech.alt} width={150} height={150} />
        </div>
      ))}
    </div>
  );
};

export default TechBlogPage;
