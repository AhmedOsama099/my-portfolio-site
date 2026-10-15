import { cn } from "@/lib/tailwind";
import { ContentSimpleParagraphProps } from "@/types/techBlog";

export default function ContentSimpleParagraph({
  className,
  children,
}: ContentSimpleParagraphProps) {
  return (
    <p
      className={cn(
        "text-gray-700 mb-4 [&>span]:block [&>span]:my-2 text-lg [&_strong]:px-1 [&_strong]:text-[#3D4082] text-start [&-b]:w-full [&_a]:text-[#B12343] [&_a]:font-bold [&_a]:underline [&_a]:underline-offset-4 [&_a_strong]:text-[#B12343] hover:[&_a]:text-[#8E1732]",
        className
      )}
    >
      {children}
    </p>
  );
}
