import { cn } from "@/lib/tailwind";
import { PageHeaderProps } from "@/types/techBlog";
import AiDisclaimer from "./AiDisclaimer";
import CommentScrollButton from "./CommentScrollButton";
import ArticleShareButton from "./ArticleShareButton";

export default function PageHeader({ children, className }: PageHeaderProps) {
  return (
    <header className={cn("mb-8 flex flex-col gap-3", className)}>
      {children}
      <div className="flex items-center justify-center gap-3 flex-wrap my-2">
        <CommentScrollButton />
        <ArticleShareButton />
      </div>
      <AiDisclaimer />
    </header>
  );
}
