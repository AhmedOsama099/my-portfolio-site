import React from "react";
import Image from "next/image";
const Biography: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 justify-center xl:pe-12">
      {/* Biography Title*/}
      <h1 className="font-bold text-2xl ">Biography</h1>

      {/* Biography Description*/}
      <p className="text-gl">
        It&apos;s Ahmed Osama El-Daoushy, a Senior Software Engineer with over 4
        years of experience developing robust, scalable web applications. My
        work spans building performant websites, architecting APIs. I&apos;ve
        contributed to projects across startups and enterprise environments,
        delivering full-stack solutions that prioritize clean code,
        maintainability, and user-centered design. I’m passionate about
        problem-solving, system design, and staying on the cutting edge of
        modern web development.
      </p>

      {/* Biography Quote*/}
      <span className="italic">
        Code is my craft, design is my language — together, they shape digital
        stories that connect and inspire.
      </span>

      {/* Biography Sign SVG*/}
      <div className="self-end">
        <Image
          priority
          blurDataURL={"/images/signature.svg"}
          src={"/images/signature.svg"}
          alt="Ahmed El-Daoushy signature"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Biography;
