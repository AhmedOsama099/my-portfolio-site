"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MotionPageWrapper from "@/Components/motionPageWrapper";
import { Comment } from "@/lib/db";

function formatRelativeTime(dateString: string): string {
  try {
    const d = new Date(dateString);
    const now = new Date();
    const diffSec = Math.floor((now.getTime() - d.getTime()) / 1000);
    if (diffSec < 60) return "Just now";
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
    if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
    if (diffSec < 604800) return `${Math.floor(diffSec / 86400)}d ago`;
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "Recently";
  }
}

export default function NotificationsPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<"all" | "contact" | "tech-blog" | "literature">("all");
  const [dbConfigured, setDbConfigured] = useState<boolean>(false);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/comments?includeHidden=true&flat=true");
      const data = await res.json();
      if (data.success && Array.isArray(data.comments)) {
        setComments(data.comments);
        setDbConfigured(Boolean(data.dbConfigured));
      }
    } catch (err) {
      console.warn("Could not load notifications:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const contactCount = comments.filter((c) => c.article_type === "contact").length;
  const techCount = comments.filter((c) => c.article_type === "tech-blog").length;
  const litCount = comments.filter((c) => c.article_type === "literature").length;

  const filteredItems =
    filter === "all"
      ? comments
      : comments.filter((c) => c.article_type === filter);

  return (
    <MotionPageWrapper className="min-h-full py-8 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto overflow-y-auto">
      {/* Top Breadcrumb & Status */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
          <span>/</span>
          <span className="text-[#EE3E54] font-semibold">Notifications</span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/stats?tab=notifications"
            className="text-xs px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition flex items-center gap-1.5"
          >
            <span>Admin Dashboard</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-[#565FA1]/20 border border-slate-800/80 shadow-2xl backdrop-blur-md mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#EE3E54]/15 to-[#565FA1]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Live Communications Feed</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Notifications & Activity Hub
            </h1>
            <p className="text-sm text-slate-300/80 mt-2 max-w-2xl leading-relaxed">
              Real-time feed of direct contact inquiries, reader questions, and discussions across technical blogs and writings.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {dbConfigured ? (
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Database Sync Active</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>Active Local Store</span>
              </span>
            )}

            <button
              onClick={fetchNotifications}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#565FA1] hover:bg-[#48508a] text-white shadow-lg transition active:scale-95 disabled:opacity-50"
            >
              <svg
                className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>{loading ? "Refreshing..." : "Refresh Feed"}</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800/80">
          <div className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/40">
            <div className="text-xs text-slate-400 font-medium">Total Items</div>
            <div className="text-xl font-bold text-white mt-0.5">{comments.length}</div>
          </div>
          <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
            <div className="text-xs text-emerald-300 font-medium">Contact Inquiries</div>
            <div className="text-xl font-bold text-emerald-400 mt-0.5">{contactCount}</div>
          </div>
          <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
            <div className="text-xs text-indigo-300 font-medium">Tech Blog</div>
            <div className="text-xl font-bold text-indigo-400 mt-0.5">{techCount}</div>
          </div>
          <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20">
            <div className="text-xs text-rose-300 font-medium">Arabic Writings</div>
            <div className="text-xl font-bold text-rose-400 mt-0.5">{litCount}</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
        {[
          { id: "all", label: `All (${comments.length})` },
          { id: "contact", label: `Contact Inquiries (${contactCount})` },
          { id: "tech-blog", label: `Tech Blog (${techCount})` },
          { id: "literature", label: `Arabic Writings (${litCount})` },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setFilter(t.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              filter === t.id
                ? "bg-gradient-to-r from-[#565FA1] to-[#EE3E54] text-white shadow-md shadow-[#565FA1]/25 scale-105"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      {loading && comments.length === 0 ? (
        <div className="py-20 text-center">
          <div className="w-10 h-10 border-4 border-[#EE3E54] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm text-slate-400 font-medium">Loading notifications stream...</p>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 className="text-base font-bold text-white">No notifications in this category</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Once visitors send a message via the Contact page or leave comments on articles, they will appear here.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#565FA1] to-[#EE3E54] text-white text-xs font-bold shadow-md hover:scale-105 transition-all"
            >
              <span>Test Send Contact Message</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const isContact = item.article_type === "contact";
            const isLit = item.article_type === "literature";

            return (
              <div
                key={item.id}
                className={`p-5 sm:p-6 rounded-3xl bg-slate-900/80 border transition-all shadow-lg ${
                  isContact
                    ? "border-emerald-500/30 hover:border-emerald-500/60 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-emerald-950/20"
                    : isLit
                    ? "border-rose-500/20 hover:border-rose-500/50"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    {/* Avatar Icon */}
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center text-sm font-extrabold text-white shadow-md ${
                        isContact
                          ? "bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-emerald-500/20"
                          : isLit
                          ? "bg-gradient-to-tr from-rose-500 to-amber-500 shadow-rose-500/20"
                          : "bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-indigo-500/20"
                      }`}
                    >
                      {isContact ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ) : (
                        item.author_name.charAt(0).toUpperCase()
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-white text-sm sm:text-base">
                          {item.author_name}
                        </span>

                        {/* Type Badge */}
                        {isContact ? (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            <span>Direct Contact Inquiry</span>
                          </span>
                        ) : isLit ? (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30">
                            Arabic Literature Comment
                          </span>
                        ) : (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                            Tech Blog Comment
                          </span>
                        )}

                        {item.author_email && (
                          <span className="text-xs text-slate-400 font-mono">
                            &lt;{item.author_email}&gt;
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-400 mt-1">
                        {isContact ? (
                          <span>Submitted via Contact Me page</span>
                        ) : (
                          <span>
                            Commented on{" "}
                            <span className="font-semibold text-slate-200">
                              &ldquo;{item.article_title}&rdquo;
                            </span>
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span className="text-xs text-slate-400 font-mono">
                      {formatRelativeTime(item.created_at)}
                    </span>
                  </div>
                </div>

                {/* Message Body */}
                <div
                  className={`mt-4 p-4 rounded-2xl border text-sm leading-relaxed ${
                    isContact
                      ? "bg-slate-800/60 border-slate-700/60 text-slate-100"
                      : "bg-slate-800/40 border-slate-700/30 text-slate-200"
                  }`}
                  dir={isLit ? "rtl" : "ltr"}
                >
                  <p className="whitespace-pre-wrap">{item.content}</p>
                </div>

                {/* Actions Row */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/60">
                  <div className="flex items-center gap-2">
                    {item.author_email && (
                      <a
                        href={`mailto:${item.author_email}?subject=${encodeURIComponent(
                          isContact ? "Re: Contact Inquiry - Ahmed Osama" : `Re: ${item.article_title}`
                        )}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 text-xs font-semibold border border-indigo-500/30 transition"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Reply via Email</span>
                      </a>
                    )}

                    {!isContact && item.page_path && (
                      <Link
                        href={item.page_path}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition"
                      >
                        <span>View Article</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    )}
                  </div>

                  <span className="text-[11px] text-slate-500 font-mono">
                    ID #{item.id} &bull; {new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </MotionPageWrapper>
  );
}
