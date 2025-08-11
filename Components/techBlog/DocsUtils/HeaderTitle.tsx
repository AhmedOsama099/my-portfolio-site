import { cn } from "@/lib/tailwind";
import { HeaderTitleProps } from "@/types/techBlog";

export default function HeaderTitle({ title, className }: HeaderTitleProps) {
  return (
    <h1 className={cn("text-4xl font-bold text-gray-900", className)}>
      {title}
    </h1>
  );
}
