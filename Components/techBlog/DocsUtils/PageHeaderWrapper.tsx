import { cn } from "@/lib/tailwind";
import { PageHeaderProps } from "@/types/techBlog";

export default function PageHeader({ children, className }: PageHeaderProps) {
  return (
    <header className={cn("mb-8 flex flex-col gap-4", className)}>
      {children}
    </header>
  );
}
