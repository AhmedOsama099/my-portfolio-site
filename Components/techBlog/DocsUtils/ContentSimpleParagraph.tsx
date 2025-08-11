import { cn } from "@/lib/tailwind";
import { ContentSimpleParagraphProps } from "@/types/techBlog";

export default function ContentSimpleParagraph({
  className,
  children,
}: ContentSimpleParagraphProps) {
  return <p className={cn("text-gray-700 mb-4", className)}>{children}</p>;
}
