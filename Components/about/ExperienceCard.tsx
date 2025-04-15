import React from "react";
import { ExperienceItem } from "@/types/about";
import clsx from "clsx";

interface ExperienceCardProps {
  experience: ExperienceItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <>
      {/* Job Title */}
      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
        {experience.title}
      </div>

      {/* Job Desc */}
      <ul className="p-3 text-sm italic">
        {experience.description?.map(
          ({ description, title, usedTech }, index) => (
            <span key={index}>
              <li className={clsx("font-semibold text-lg text-[#3D4082]")}>
                {title}
              </li>
              <ul className="list-disc pl-4 ps-8">
                {description.map((desc, i) => (
                  <li key={i} className="">
                    {desc}
                  </li>
                ))}
              </ul>
              <li>
                <span className={clsx("font-semibold text-[#3D4082]")}>
                  Technologies used:
                </span>{" "}
                {usedTech}
              </li>
            </span>
          )
        )}
      </ul>

      {/* Job Date */}
      <div className="p-3 text-red-400 text-sm font-semibold">
        {experience.date}
      </div>

      {/* Job Company */}
      <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
        {experience.company}
      </div>
    </>
  );
};

export default ExperienceCard;
