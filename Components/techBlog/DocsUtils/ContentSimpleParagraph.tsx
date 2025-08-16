import { cn } from "@/lib/tailwind";
import { ContentSimpleParagraphProps } from "@/types/techBlog";

export default function ContentSimpleParagraph({
  className,
  children,
}: ContentSimpleParagraphProps) {
  return (
    <p
      className={cn(
        "text-gray-700 mb-4 [&>span]:block [&>span]:my-2  text-lg [&_strong]:px-1 [&_strong]:text-[#3D4082] text-start [&-b]:w-full [&_a]:text-[#B12343] [&_a]:font-bold",
        className
      )}
    >
      {children}
    </p>
  );
}
