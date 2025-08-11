import { SectionWrapperProps } from "@/types/techBlog";

export default function SectionWrapper({
  id,
  className,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
