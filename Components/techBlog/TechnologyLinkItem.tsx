import { TechnologyLinkItemProps } from "@/types/techBlog";
import Image from "next/image";
import Link from "next/link";

export default function TechnologyLinkItem({
  pageURL,
  imageURL,
  alt,
}: TechnologyLinkItemProps) {
  return (
    <Link
      className="relative border border-gray-300 py-3 px-5 rounded-3xl bg-[#302d2d] shadow-sm size-48 flex items-center justify-center
          cursor-pointer
          hover:scale-110
          transition-all
          duration-300"
      href={pageURL}
    >
      <span
        className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold py-1 px-2 rounded-full"
        style={{ transform: "translate(50%, -50%) rotate(10deg)" }}
      >
        Soon
      </span>
      <Image src={imageURL} alt={alt} width={150} height={150} />
    </Link>
  );
}
