import { cn } from "@/lib/tailwind";
import { SectionListProps } from "@/types/techBlog";
import { Children } from "react";

export default function SectionList({
  children,
  listContainerClassName,
  listItemClassName,
}: SectionListProps) {
  return (
    <ul className={cn("list-disc ms-6 my-2 ps-[10px]", listContainerClassName)}>
      {Children.map(children, (child, index) => (
        <li
          key={index}
          className={cn(
            "mb-1 [&>span]:block [&>span]:my-2 [&_strong]:px-1 [&_strong]:text-[#3D4082] text-lg ",
            listItemClassName
          )}
        >
          {child}
        </li>
      ))}
    </ul>
  );
}
