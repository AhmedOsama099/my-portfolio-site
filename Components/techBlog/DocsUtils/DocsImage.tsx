import Image from "next/image";
import { cn } from "@/lib/tailwind";
import { DocsImageProps } from "@/types/techBlog";

export default function DocsImage({ src, className }: DocsImageProps) {
  // Derive alt from file name (strip path & extension, replace -/_ with spaces)
  const alt =
    src
      .split("/")
      .pop() // get file name
      ?.replace(/\.[^/.]+$/, "") // remove extension
      .replace(/[-_]/g, " ") // replace - and _ with space
      .trim() || "Image";

  return (
    <div
      className={cn(
        "w-full flex items-center justify-self-center justify-center my-12 overflow-hidden rounded-2xl border-2 border-dashed border-gray-400 bg-gray-50 p-3",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={800} // sets a base width
        height={500} // sets a base height
        style={{ height: "auto", width: "100%" }} // make it responsive
      />
    </div>
  );
}
