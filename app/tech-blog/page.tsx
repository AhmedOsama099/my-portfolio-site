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
          className="border border-gray-300 py-3 px-5 rounded-3xl bg-gray-950 shadow-sm size-48 flex items-center justify-center
          cursor-pointer
          hover:scale-110
          transition-all
          duration-300
          "
        >
          <Image src={tech.imageURL} alt={tech.alt} width={150} height={150} />
        </div>
      ))}
    </div>
  );
};

export default TechBlogPage;
