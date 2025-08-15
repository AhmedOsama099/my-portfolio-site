import { logoMap } from "@/data/techBlog";
import { ResourcesProps } from "@/types/techBlog";
import { getServerTranslation } from "@/utils/getServerTranslation";
import Image from "next/image";
import React from "react";

export default async function Resources({ items }: ResourcesProps) {
  const { t } = await getServerTranslation();

  return (
    <div className="flex items-center gap-3 mb-20">
      <span className="font-semibold text-lg text-[#3D4082]">
        - {t("resources")}:
      </span>
      <div className="flex gap-2">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <Image
              src={logoMap[item.name]}
              alt={item.name}
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
