import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { literatureContent } from "@/data/blog";
import { getPostId } from "@/utils/postId";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n/config";

const siteUrl = "https://ahmedosamadev.vercel.app";
const AUTHOR_NAME_AR = "أحمد أسامة الدعوشي";

const findPiece = (id: string) =>
  literatureContent.find((p) => getPostId(p) === id);

const excerpt = (text: string | undefined, n: number) => {
  const clean = (text ?? "").replace(/\s+/g, " ").trim();
  return clean.length > n ? `${clean.slice(0, n)}…` : clean;
};

const localeFromHeaders = async () => {
  const h = await headers();
  const l = h.get("x-locale");
  return isLocale(l) ? l : DEFAULT_LOCALE;
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const piece = findPiece(params.id);
  if (!piece) return { title: "نص غير موجود" };

  const locale = await localeFromHeaders();
  const title = piece.title?.trim() || excerpt(piece.content, 50);
  const description = excerpt(piece.content, 180);
  const url = `${siteUrl}/${locale}/blog/${params.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${title} — ${AUTHOR_NAME_AR}`,
      description,
      url,
      siteName: "Ahmed Osama",
      locale: locale === "ar" ? "ar_AR" : "en_US",
      images: [
        { url: "/images/profile.jpg", width: 800, height: 800, alt: AUTHOR_NAME_AR },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${AUTHOR_NAME_AR}`,
      description,
      images: ["/images/profile.jpg"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const piece = findPiece(params.id);
  if (!piece) notFound();

  const locale = await localeFromHeaders();
  const backHref = `/${locale}/blog`;

  return (
    <div className="h-full overflow-y-auto" dir="rtl">
      <div className="min-h-full py-12 px-4 sm:px-8 md:px-12 max-w-3xl mx-auto">
        <a
          href={backHref}
          className="inline-flex items-center gap-2 text-[#565FA1] font-semibold hover:underline mb-6"
        >
          <span aria-hidden>→</span> العودة إلى المدونة
        </a>

        <article className="bg-white rounded-lg shadow-md p-8 border-r-4 border-[#565FA1]">
          {/* Author */}
          <div className="flex items-center gap-3 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile.jpg"
              alt={AUTHOR_NAME_AR}
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-[#565FA1]/40"
              style={{ objectPosition: "50% 18%" }}
            />
            <div className="font-bold text-gray-900">{AUTHOR_NAME_AR}</div>
          </div>

          {piece.title && (
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {piece.title}
            </h1>
          )}
          <div className="text-sm text-gray-500 mb-6">{piece.date}</div>

          <p className="text-gray-700 leading-10 text-lg whitespace-pre-line">
            {(piece.content ?? "").trim()}
          </p>
        </article>
      </div>
    </div>
  );
}
