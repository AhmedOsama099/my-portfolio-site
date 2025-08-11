import { cn } from "@/lib/tailwind";
import { HeaderDescriptionProps } from "@/types/techBlog";

export default function HeaderDescription({
  description,
  className,
}: HeaderDescriptionProps) {
  return (
    <p className={cn("text-lg text-gray-600", className)}>{description}</p>
  );
}
