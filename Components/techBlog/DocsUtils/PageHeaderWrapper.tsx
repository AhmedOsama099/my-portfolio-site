import { cn } from "@/lib/tailwind";
import { PageHeaderProps } from "@/types/techBlog";
import AiDisclaimer from "./AiDisclaimer";
import CommentScrollButton from "./CommentScrollButton";

export default function PageHeader({ children, className }: PageHeaderProps) {
  return (
    <header className={cn("mb-8 flex flex-col gap-3", className)}>
      {children}
      <CommentScrollButton />
      <AiDisclaimer />
    </header>
  );
}
