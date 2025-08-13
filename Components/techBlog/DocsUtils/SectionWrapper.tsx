import { cn } from "@/lib/tailwind";
import { SectionWrapperProps } from "@/types/techBlog";

export default function SectionWrapper({
  id,
  className,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("mb-20", className)}>
      {children}
    </section>
  );
}
