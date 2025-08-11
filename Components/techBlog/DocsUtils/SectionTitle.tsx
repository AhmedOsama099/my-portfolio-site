import { cn } from "@/lib/tailwind";
import { SectionTitleProps } from "@/types/techBlog";

export default function SectionTitle({ className, title }: SectionTitleProps) {
  return (
    <h2 className={cn("text-2xl font-semibold text-gray-900 mb-4", className)}>
      {title}
    </h2>
  );
}
