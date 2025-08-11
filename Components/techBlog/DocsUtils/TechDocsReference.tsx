import { cn } from "@/lib/tailwind";
import { TechDocsReferenceProps } from "@/types/techBlog";

export default function TechDocsReference({
  mainContainerClassName,
  textContainerClassName,
  textClassName,
  children,
}: TechDocsReferenceProps) {
  return (
    <div
      className={cn(
        "bg-blue-50 border-l-4 border-blue-400 p-4 mb-4",
        mainContainerClassName
      )}
    >
      <div className={cn("ml-3", textContainerClassName)}>
        <p className={cn("text-sm text-blue-700", textClassName)}>{children}</p>
      </div>
    </div>
  );
}
