import MotionPageWrapper from "@/Components/motionPageWrapper";
import TechnologyLinkItem from "@/Components/techBlog/TechnologyLinkItem";

const technologies = [
  {
    imageURL: "/images/techLogos/git.svg",
    alt: "git-logo",
    pageURL: "/tech-blog/git/what-is-git",
  },
  {
    imageURL: "/images/techLogos/ts.svg",
    alt: "ts-logo",
    pageURL: "/tech-blog/ts/structural-type-system",
  },
];

const TechBlogPage = () => {
  return (
    <MotionPageWrapper className="flex flex-wrap gap-2  justify-center items-center  ">
      {technologies.map(({ pageURL, imageURL, alt }, index) => (
        <TechnologyLinkItem
          key={index}
          pageURL={pageURL}
          imageURL={imageURL}
          alt={alt}
        />
      ))}
    </MotionPageWrapper>
  );
};

export default TechBlogPage;
