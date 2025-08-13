import { cn } from "@/lib/tailwind";
import { SectionTitleProps } from "@/types/techBlog";

export default function SectionTitle({
  className,
  children,
}: SectionTitleProps) {
  return (
    <h2 className={cn("text-2xl font-semibold text-[#3D4082] mb-4", className)}>
      {children}
    </h2>
  );
}
