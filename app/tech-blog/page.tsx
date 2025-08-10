import MotionPageWrapper from "@/Components/motionPageWrapper";
import Image from "next/image";
import Link from "next/link";

const technologies = [
  {
    imageURL: "/images/techLogos/git.svg",
    alt: "git-logo",
    pageURL: "/tech-blog/git",
  },
];

const TechBlogPage = () => {
  return (
    <MotionPageWrapper className="flex flex-wrap gap-2  justify-center items-center">
      {technologies.map((techItem, index) => (
        <Link
          key={index}
          className="relative border border-gray-300 py-3 px-5 rounded-3xl bg-[#302d2d] shadow-sm size-48 flex items-center justify-center
          cursor-pointer
          hover:scale-110
          transition-all
          duration-300"
          href={techItem.pageURL}
        >
          <span
            className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold py-1 px-2 rounded-full"
            style={{ transform: "translate(50%, -50%) rotate(10deg)" }}
          >
            Soon
          </span>
          <Image
            src={techItem.imageURL}
            alt={techItem.alt}
            width={150}
            height={150}
          />
        </Link>
      ))}
    </MotionPageWrapper>
  );
};

export default TechBlogPage;
