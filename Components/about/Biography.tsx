import React from "react";
import signature from "@/public/signature.svg";
import Image from "next/image";
const Biography: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 justify-center xl:pe-12">
      {/* Biography Title*/}
      <h1 className="font-bold text-2xl">Biography</h1>

      {/* Biography Description*/}
      <p className="text-gl">
        I&apos;m Ahmed Osama El-Daoushy, a Senior Front-End Engineer with over 4
        years of experience building modern, scalable web interfaces using
        React, TypeScript, and Tailwind CSS. I specialize in transforming
        complex designs into clean, responsive, and accessible user experiences
        with a strong focus on performance and usability. I&apos;ve worked
        across startups and enterprise environments, contributing to advanced
        dashboard systems, content management platforms, and custom integrations
        with tools like SharePoint and Apollo Client. I&apos;m passionate about
        writing clean code, building intuitive UIs, and continuously learning to
        stay ahead in the front-end world.
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
          blurDataURL={signature.src}
          src={signature.src}
          alt="Ahmed El-Daoushy signature"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Biography;
