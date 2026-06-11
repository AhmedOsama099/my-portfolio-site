import { LiteratureContent } from "@/types/blog";

/**
 * Builds a stable, deep-linkable id for a literature post.
 *
 * The id is derived deterministically from the post's date, title and the start
 * of its content, so it stays the same regardless of search filtering or array
 * order — which lets each item carry a permanent share link (`/blog#<id>`).
 */
export function getPostId(
  piece: Pick<LiteratureContent, "title" | "date" | "content">
): string {
  const base = `${piece.date ?? ""}|${piece.title ?? ""}|${(
    piece.content ?? ""
  ).slice(0, 24)}`;

  // djb2 string hash → unsigned 32-bit → base36.
  let hash = 5381;
  for (let i = 0; i < base.length; i++) {
    hash = ((hash << 5) + hash + base.charCodeAt(i)) >>> 0;
  }
  return `post-${hash.toString(36)}`;
}
