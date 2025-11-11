import { cn } from "@/lib/tailwind";
import { HeaderTitleProps } from "@/types/techBlog";

export default function HeaderTitle({ children, className }: HeaderTitleProps) {
  return (
    <h1
      className={cn("text-4xl font-bold text-[#3D4082] text-center", className)}
    >
      {children}
    </h1>
  );
}
