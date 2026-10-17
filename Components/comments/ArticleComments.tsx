"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Comment } from "@/lib/db";

interface ArticleCommentsProps {
  articleId: string;
  articleTitle: string;
  articleType: "tech-blog" | "literature";
  pagePath: string;
  dir?: "rtl" | "ltr";
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const getAvatarGradient = (name: string): string => {
  const gradients = [
    "from-indigo-500 to-purple-600",
    "from-blue-500 to-cyan-500",
    "from-rose-500 to-pink-600",
    "from-emerald-500 to-teal-600",
    "from-amber-500 to-orange-600",
    "from-violet-500 to-fuchsia-600",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % gradients.length;
  return gradients[index];
};

const formatTimeAgo = (dateStr: string, isRtl: boolean): string => {
  const date = new Date(dateStr);
  const now = new Date();
  const diffSec = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffSec < 60) return isRtl ? "الآن" : "Just now";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return isRtl ? `منذ ${diffMin} دقيقة` : `${diffMin}m ago`;
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return isRtl ? `منذ ${diffHour} ساعة` : `${diffHour}h ago`;
  const diffDay = Math.floor(diffHour / 24);
  if (diffDay < 30) return isRtl ? `منذ ${diffDay} يوم` : `${diffDay}d ago`;

  return date.toLocaleDateString(isRtl ? "ar-EG" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function ArticleComments({
  articleId,
  articleTitle,
  articleType,
  pagePath,
  dir = "ltr",
}: ArticleCommentsProps) {
  const isRtl = dir === "rtl" || articleType === "literature";

  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [content, setContent] = useState("");
  const [formMessage, setFormMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Liked Comments State (stored in localStorage)
  const [likedIds, setLikedIds] = useState<number[]>([]);

  // Reply State
  const [replyingToId, setReplyingToId] = useState<number | null>(null);
  const [replyName, setReplyName] = useState("");
  const [replyEmail, setReplyEmail] = useState("");
  const [replyContent, setReplyContent] = useState("");
  const [replySubmitting, setReplySubmitting] = useState(false);

  // Admin Mode detection
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    try {
      const storedLikes = localStorage.getItem("ahmed_osama_liked_comments");
      if (storedLikes) {
        setLikedIds(JSON.parse(storedLikes));
      }
      const adminAuth =
        localStorage.getItem("stats_authenticated") === "true" ||
        sessionStorage.getItem("stats_authenticated") === "true";
      setIsAdmin(adminAuth);
    } catch {
      // ignore
    }
  }, []);

  // Fetch comments for this article
  const loadComments = useCallback(async () => {
    try {
      // If admin, we request includeHidden=true so admin can manage them
      const adminAuth =
        typeof window !== "undefined" &&
        (localStorage.getItem("stats_authenticated") === "true" ||
          sessionStorage.getItem("stats_authenticated") === "true");

      const res = await fetch(
        `/api/comments?articleId=${encodeURIComponent(articleId)}${
          adminAuth ? "&includeHidden=true" : ""
        }`
      );
      if (res.ok) {
        const data = await res.json();
        setComments(data.comments || []);
      }
    } catch (err) {
      console.warn("Failed to load comments:", err);
    } finally {
      setLoading(false);
    }
  }, [articleId]);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  // Submit a top-level comment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage(null);

    if (!authorName.trim() || !content.trim()) {
      setFormMessage({
        type: "error",
        text: isRtl
          ? "يرجى ملء الاسم ومحتوى التعليق."
          : "Please enter your name and comment.",
      });
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          articleId,
          articleTitle,
          articleType,
          pagePath,
          authorName: authorName.trim(),
          authorEmail: authorEmail.trim() || undefined,
          content: content.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Prepend new comment to current list
        setComments((prev) => [{ ...data.comment, replies: [] }, ...prev]);
        setContent("");
        setFormMessage({
          type: "success",
          text: isRtl
            ? "شكرًا لك! تم نشر تعليقك بنجاح."
            : "Thank you! Your comment has been posted.",
        });
        setTimeout(() => setFormMessage(null), 4000);
      } else {
        setFormMessage({
          type: "error",
          text: data.error || (isRtl ? "حدث خطأ أثناء الإرسال." : "Failed to post comment."),
        });
      }
    } catch {
      setFormMessage({
        type: "error",
        text: isRtl
          ? "تعذر الاتصال بالخادم، يرجى المحاولة لاحقًا."
          : "Could not connect to server. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Submit a reply to a comment
  const handleReplySubmit = async (parentId: number) => {
    if (!replyName.trim() || !replyContent.trim()) {
      alert(isRtl ? "يرجى ملء الاسم ومحتوى الرد." : "Please fill in your name and reply.");
      return;
    }

    setReplySubmitting(true);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentId,
          articleId,
          articleTitle,
          articleType,
          pagePath,
          authorName: replyName.trim(),
          authorEmail: replyEmail.trim() || undefined,
          content: replyContent.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Attach reply into tree
        setComments((prev) =>
          prev.map((item) => {
            if (item.id === parentId) {
              return {
                ...item,
                replies: [...(item.replies || []), data.comment],
              };
            }
            return item;
          })
        );
        setReplyContent("");
        setReplyingToId(null);
      } else {
        alert(data.error || "Failed to post reply.");
      }
    } catch {
      alert(isRtl ? "تعذر إرسال الرد، يرجى المحاولة لاحقًا." : "Could not post reply.");
    } finally {
      setReplySubmitting(false);
    }
  };

  // Toggle Love / Like reaction
  const handleToggleLike = async (commentId: number) => {
    const isLiked = likedIds.includes(commentId);
    const delta = isLiked ? -1 : 1;

    // Optimistically update local state
    const newLikedIds = isLiked
      ? likedIds.filter((id) => id !== commentId)
      : [...likedIds, commentId];
    setLikedIds(newLikedIds);
    try {
      localStorage.setItem(
        "ahmed_osama_liked_comments",
        JSON.stringify(newLikedIds)
      );
    } catch {
      // ignore
    }

    // Update comments in tree
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === commentId) {
          return { ...c, likes: Math.max(0, (c.likes || 0) + delta) };
        }
        if (c.replies && c.replies.length > 0) {
          return {
            ...c,
            replies: c.replies.map((r) =>
              r.id === commentId
                ? { ...r, likes: Math.max(0, (r.likes || 0) + delta) }
                : r
            ),
          };
        }
        return c;
      })
    );

    // Call API
    try {
      await fetch("/api/comments", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: commentId, action: "like", delta }),
      });
    } catch (err) {
      console.warn("Failed to persist like:", err);
    }
  };

  // Admin: Toggle Hide / Unhide
  const handleToggleHide = async (commentId: number, currentHidden: boolean) => {
    const nextHidden = !currentHidden;
    try {
      const res = await fetch("/api/comments", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: commentId,
          action: "toggle_hide",
          isHidden: nextHidden,
        }),
      });

      if (res.ok) {
        setComments((prev) =>
          prev.map((c) => {
            if (c.id === commentId) return { ...c, is_hidden: nextHidden };
            if (c.replies) {
              return {
                ...c,
                replies: c.replies.map((r) =>
                  r.id === commentId ? { ...r, is_hidden: nextHidden } : r
                ),
              };
            }
            return c;
          })
        );
      }
    } catch {
      alert("Failed to toggle visibility.");
    }
  };

  // Admin: Delete Comment
  const handleDeleteComment = async (commentId: number) => {
    const msg = isRtl
      ? "هل أنت متأكد من حذف هذا التعليق نهائيًا؟"
      : "Are you sure you want to permanently delete this comment?";
    if (!window.confirm(msg)) return;

    try {
      const res = await fetch(`/api/comments?id=${commentId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setComments((prev) =>
          prev
            .filter((c) => c.id !== commentId)
            .map((c) => ({
              ...c,
              replies: (c.replies || []).filter((r) => r.id !== commentId),
            }))
        );
      }
    } catch {
      alert("Failed to delete comment.");
    }
  };

  const totalCount = comments.reduce(
    (acc, curr) => acc + 1 + (curr.replies?.length || 0),
    0
  );

  return (
    <section
      id="comments"
      dir={isRtl ? "rtl" : "ltr"}
      className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-100 select-text"
      aria-label={isRtl ? "قسم التعليقات" : "Comments Section"}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 shrink-0">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {isRtl ? "التعليقات والمناقشات" : "Discussion & Comments"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {isRtl
                ? "شارك برأيك، تفاعل مع التعليقات بالحب، أو اطرح أسئلتك بحرية"
                : "Leave a thought, reply to discussions, or love comments — no sign-in required"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isAdmin && (
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center gap-1">
              <span>🛡️</span>
              <span>{isRtl ? "وضع المشرف نشط" : "Admin Mode"}</span>
            </span>
          )}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold w-fit">
            <span>💬</span>
            <span>{totalCount}</span>
            <span>{isRtl ? "تعليق ورد" : "comments & replies"}</span>
          </div>
        </div>
      </div>

      {/* Main Comment Form Card */}
      <div className="rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-5 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                {isRtl ? "الاسم الكامل *" : "Your Name *"}
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder={isRtl ? "مثال: أحمد مصطفى" : "e.g. Alex Morgan"}
                required
                maxLength={100}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                {isRtl
                  ? "البريد الإلكتروني (اختياري - لن يُنشر)"
                  : "Email (optional - never published)"}
              </label>
              <input
                type="email"
                value={authorEmail}
                onChange={(e) => setAuthorEmail(e.target.value)}
                placeholder={isRtl ? "name@example.com" : "you@example.com"}
                maxLength={255}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              {isRtl ? "التعليق *" : "Your Comment *"}
            </label>
            <textarea
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={
                isRtl
                  ? "اكتب تعليقك هنا بكل حرية..."
                  : "Write your question, insight, or response here..."
              }
              required
              maxLength={2000}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition leading-relaxed resize-y"
            />
          </div>

          {/* Form Message Alert */}
          <AnimatePresence>
            {formMessage && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className={`p-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 ${
                  formMessage.type === "success"
                    ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                    : "bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800"
                }`}
              >
                <span>{formMessage.type === "success" ? "✓" : "⚠️"}</span>
                <span>{formMessage.text}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <div className="flex justify-end pt-1">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/25 hover:shadow-lg transition-all active:scale-95 disabled:opacity-60 cursor-pointer"
            >
              {submitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>{isRtl ? "جارٍ الإرسال..." : "Posting..."}</span>
                </>
              ) : (
                <>
                  <span>{isRtl ? "إرسال التعليق" : "Post Comment"}</span>
                  <span aria-hidden>{isRtl ? "←" : "→"}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {loading ? (
          <div className="py-8 text-center text-slate-400 flex items-center justify-center gap-2 text-sm">
            <span className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            <span>{isRtl ? "جارٍ تحميل التعليقات..." : "Loading comments..."}</span>
          </div>
        ) : comments.length === 0 ? (
          <div className="py-10 text-center rounded-2xl bg-slate-50/70 dark:bg-slate-900/40 border border-dashed border-slate-300 dark:border-slate-800 p-6">
            <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-500 mx-auto flex items-center justify-center text-2xl mb-2">
              💭
            </div>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
              {isRtl ? "لا توجد تعليقات بعد" : "No comments yet"}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {isRtl
                ? "كُن أول من يشارك برأيه أو يترك بصمته حول هذا المقال!"
                : "Be the first to share your thoughts and start the discussion!"}
            </p>
          </div>
        ) : (
          comments.map((c) => {
            const isLiked = likedIds.includes(c.id);
            const isAuthor =
              c.author_name.includes("Ahmed Osama") ||
              c.author_name.includes("أحمد أسامة");

            return (
              <motion.div
                key={c.id}
                id={`comment-${c.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border ${
                  c.is_hidden
                    ? "border-amber-400/50 bg-amber-500/5"
                    : "border-slate-200 dark:border-slate-800"
                } shadow-sm transition space-y-3`}
              >
                {/* Hidden indicator for admin */}
                {c.is_hidden && (
                  <div className="text-[11px] font-semibold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 inline-flex items-center gap-1.5">
                    <span>👁️‍🗨️</span>
                    <span>
                      {isRtl
                        ? "هذا التعليق مخفي عن الزوار ومتاح للمشرف فقط"
                        : "Hidden from public view (Visible to moderator only)"}
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-3.5">
                  {/* Avatar Initial */}
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-tr ${getAvatarGradient(
                      c.author_name
                    )} text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    {getInitials(c.author_name)}
                  </div>

                  {/* Comment Body */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm text-slate-900 dark:text-white leading-tight">
                          {c.author_name}
                        </span>
                        {isAuthor ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500 text-white">
                            {isRtl ? "الكاتب" : "Author"}
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                            {isRtl ? "زائر" : "Visitor"}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {formatTimeAgo(c.created_at, isRtl)}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line font-arabic">
                      {c.content}
                    </p>

                    {/* Action Bar: Love button, Reply button, Admin controls */}
                    <div className="flex items-center justify-between flex-wrap gap-2 pt-3 mt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs">
                      <div className="flex items-center gap-2">
                        {/* Love Button */}
                        <button
                          type="button"
                          onClick={() => handleToggleLike(c.id)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all active:scale-95 ${
                            isLiked
                              ? "bg-rose-500/10 text-rose-500 border border-rose-500/30 font-bold"
                              : "bg-slate-100 dark:bg-slate-800 hover:bg-rose-500/10 text-slate-500 dark:text-slate-400 hover:text-rose-500"
                          }`}
                          title={isRtl ? "أعجبني هذا التعليق" : "Love this comment"}
                        >
                          <span className="text-sm">{isLiked ? "❤️" : "🤍"}</span>
                          <span className="font-mono text-xs font-semibold">
                            {c.likes || 0}
                          </span>
                        </button>

                        {/* Reply Button */}
                        <button
                          type="button"
                          onClick={() =>
                            setReplyingToId(replyingToId === c.id ? null : c.id)
                          }
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500/10 text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition font-medium text-xs"
                        >
                          <span>↩</span>
                          <span>{isRtl ? "رد" : "Reply"}</span>
                          {c.replies && c.replies.length > 0 && (
                            <span className="font-mono text-[11px] opacity-75">
                              ({c.replies.length})
                            </span>
                          )}
                        </button>
                      </div>

                      {/* Admin Controls (visible when logged in) */}
                      {isAdmin && (
                        <div className="flex items-center gap-1.5">
                          {/* Hide / Unhide button */}
                          <button
                            type="button"
                            onClick={() => handleToggleHide(c.id, Boolean(c.is_hidden))}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition ${
                              c.is_hidden
                                ? "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-amber-500"
                            }`}
                            title={
                              c.is_hidden
                                ? isRtl
                                  ? "إلغاء الإخفاء"
                                  : "Unhide comment"
                                : isRtl
                                ? "إخفاء التعليق"
                                : "Hide comment"
                            }
                          >
                            <span>{c.is_hidden ? "👁️ Unhide" : "👁️‍🗨️ Hide"}</span>
                          </button>

                          {/* Delete button */}
                          <button
                            type="button"
                            onClick={() => handleDeleteComment(c.id)}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-red-500/10 text-red-500 hover:bg-red-500/20 transition"
                            title={isRtl ? "حذف التعليق" : "Delete comment"}
                          >
                            <span>🗑️ Delete</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Inline Reply Form */}
                    <AnimatePresence>
                      {replyingToId === c.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-3 mt-3 border-t border-dashed border-slate-200 dark:border-slate-800 space-y-3"
                        >
                          <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center justify-between">
                            <span>
                              {isRtl
                                ? `الرد على ${c.author_name}:`
                                : `Replying to ${c.author_name}:`}
                            </span>
                            <button
                              type="button"
                              onClick={() => setReplyingToId(null)}
                              className="text-slate-400 hover:text-slate-600 text-[11px]"
                            >
                              ✕ {isRtl ? "إلغاء" : "Cancel"}
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <input
                              type="text"
                              value={replyName}
                              onChange={(e) => setReplyName(e.target.value)}
                              placeholder={isRtl ? "اسمك *" : "Your Name *"}
                              className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:ring-1 focus:ring-indigo-500 outline-none"
                            />
                            <input
                              type="email"
                              value={replyEmail}
                              onChange={(e) => setReplyEmail(e.target.value)}
                              placeholder={
                                isRtl ? "البريد الإلكتروني (اختياري)" : "Email (optional)"
                              }
                              className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:ring-1 focus:ring-indigo-500 outline-none"
                            />
                          </div>

                          <textarea
                            rows={2}
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            placeholder={
                              isRtl ? "اكتب ردك هنا..." : "Write your reply here..."
                            }
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:ring-1 focus:ring-indigo-500 outline-none resize-none"
                          />

                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => setReplyingToId(null)}
                              className="px-3 py-1 rounded-lg text-xs text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                              {isRtl ? "إلغاء" : "Cancel"}
                            </button>
                            <button
                              type="button"
                              disabled={replySubmitting}
                              onClick={() => handleReplySubmit(c.id)}
                              className="px-4 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs disabled:opacity-50"
                            >
                              {replySubmitting
                                ? isRtl
                                  ? "جارٍ النشر..."
                                  : "Replying..."
                                : isRtl
                                ? "نشر الرد"
                                : "Submit Reply"}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Nested Replies List */}
                    {c.replies && c.replies.length > 0 && (
                      <div
                        className={`mt-4 pt-3 ${
                          isRtl ? "pe-3 border-e-2" : "ps-3 sm:ps-5 border-s-2"
                        } border-indigo-200 dark:border-indigo-900/60 space-y-3`}
                      >
                        {c.replies.map((reply) => {
                          const isReplyLiked = likedIds.includes(reply.id);
                          const isReplyAuthor =
                            reply.author_name.includes("Ahmed Osama") ||
                            reply.author_name.includes("أحمد أسامة");

                          return (
                            <div
                              key={reply.id}
                              id={`comment-${reply.id}`}
                              className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <div
                                    className={`w-7 h-7 rounded-full bg-gradient-to-tr ${getAvatarGradient(
                                      reply.author_name
                                    )} text-white font-extrabold text-[11px] flex items-center justify-center shrink-0 shadow-sm`}
                                  >
                                    {getInitials(reply.author_name)}
                                  </div>
                                  <span className="font-bold text-xs text-slate-900 dark:text-white">
                                    {reply.author_name}
                                  </span>
                                  {isReplyAuthor ? (
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-indigo-500 text-white">
                                      {isRtl ? "الكاتب" : "Author"}
                                    </span>
                                  ) : (
                                    <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                      {isRtl ? "رد" : "Reply"}
                                    </span>
                                  )}
                                </div>
                                <span className="text-[10px] text-slate-400 font-mono">
                                  {formatTimeAgo(reply.created_at, isRtl)}
                                </span>
                              </div>

                              <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-arabic">
                                {reply.content}
                              </p>

                              <div className="flex items-center justify-between pt-1 text-xs">
                                <button
                                  type="button"
                                  onClick={() => handleToggleLike(reply.id)}
                                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] transition ${
                                    isReplyLiked
                                      ? "bg-rose-500/10 text-rose-500 font-bold"
                                      : "text-slate-400 hover:text-rose-500"
                                  }`}
                                >
                                  <span>{isReplyLiked ? "❤️" : "🤍"}</span>
                                  <span>{reply.likes || 0}</span>
                                </button>

                                {isAdmin && (
                                  <div className="flex items-center gap-1">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleToggleHide(
                                          reply.id,
                                          Boolean(reply.is_hidden)
                                        )
                                      }
                                      className="text-[10px] text-slate-400 hover:text-amber-500"
                                    >
                                      {reply.is_hidden ? "Unhide" : "Hide"}
                                    </button>
                                    <span className="text-slate-300 dark:text-slate-600">
                                      ·
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() => handleDeleteComment(reply.id)}
                                      className="text-[10px] text-red-400 hover:text-red-500"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </section>
  );
}
