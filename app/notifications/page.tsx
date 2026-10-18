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

type FilterCategory = "all" | "contact" | "tech-blog" | "literature";

export default function NotificationsPage() {
  // Authentication State (shared with /stats via stats_authenticated)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [loginError, setLoginError] = useState<string>("");
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  // Contact form submission notice (?sent=true)
  const [sentNotice, setSentNotice] = useState<boolean>(false);
  const [dismissNotice, setDismissNotice] = useState<boolean>(false);

  // Feed State
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [dbConfigured, setDbConfigured] = useState<boolean>(false);

  // Check persisted auth and query parameters on mount
  useEffect(() => {
    try {
      const sessionAuth = sessionStorage.getItem("stats_authenticated");
      const localAuth = localStorage.getItem("stats_authenticated");
      if (sessionAuth === "true" || localAuth === "true") {
        setIsAuthenticated(true);
      }

      const params = new URLSearchParams(window.location.search);
      if (params.get("sent") === "true") {
        setSentNotice(true);
      }
    } catch (err) {
      console.warn("Storage check failed:", err);
    } finally {
      setIsCheckingAuth(false);
    }
  }, []);

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

  // Fetch feed only when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchNotifications();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);

    setTimeout(() => {
      if (username.trim() === "admin" && password.trim() === "246809") {
        setIsAuthenticated(true);
        if (rememberMe) {
          localStorage.setItem("stats_authenticated", "true");
        } else {
          sessionStorage.setItem("stats_authenticated", "true");
        }
      } else {
        setLoginError("Invalid admin credentials. Please verify username and password.");
      }
      setIsLoggingIn(false);
    }, 300);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("stats_authenticated");
    localStorage.removeItem("stats_authenticated");
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  // While checking initial storage state, avoid layout flash
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-xs text-slate-400 font-medium">Verifying access...</span>
        </div>
      </div>
    );
  }

  // If NOT authenticated, render Admin Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white select-none relative overflow-hidden py-12">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#EE3E54]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-md relative z-10 space-y-5">
          {/* Contact Sent Notice Banner for visitors who submitted a message */}
          {sentNotice && (
            <div className="p-5 rounded-3xl bg-emerald-950/40 border border-emerald-500/40 backdrop-blur-xl shadow-2xl space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-emerald-300">Message Delivered Successfully!</h3>
                  <p className="text-xs text-emerald-200/80 mt-1 leading-relaxed">
                    Thank you! Your message has been safely recorded and routed to Ahmed&apos;s notification inbox.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-emerald-500/20 text-xs">
                <Link
                  href="/"
                  className="px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 font-semibold border border-emerald-500/30 transition flex items-center gap-1"
                >
                  <span>← Return to Home</span>
                </Link>
                <Link
                  href="/contact"
                  className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 font-semibold border border-slate-700 transition"
                >
                  <span>Send Another Message</span>
                </Link>
              </div>
            </div>
          )}

          {/* Login Card */}
          <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent shadow-2xl">
            <div className="relative bg-slate-900/90 backdrop-blur-2xl rounded-[23px] p-8 sm:p-10 border border-white/5">
              {/* Card Header */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#565FA1] to-[#EE3E54] flex items-center justify-center shadow-lg shadow-[#565FA1]/30 mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2">
                  <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Admin Protected Stream</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Notifications & Feed
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  Sign in with administrator credentials to view live contact submissions and reader feedback.
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                {loginError && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                    <svg className="w-4 h-4 shrink-0 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{loginError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="admin"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition pe-10 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 end-0 pe-3 flex items-center text-slate-400 hover:text-white"
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded bg-slate-800 border-slate-700 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>Remember session</span>
                  </label>
                  <span className="text-[11px] text-slate-500">Syncs with Stats</span>
                </div>

                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full py-3.5 px-4 rounded-xl font-bold bg-gradient-to-r from-[#565FA1] to-[#EE3E54] text-white shadow-lg shadow-[#565FA1]/25 hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  {isLoggingIn ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>Enter Notifications Hub</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* Back to Home & credentials indicator */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <Link href="/" className="hover:text-indigo-400 flex items-center gap-1 transition">
                    ← Portfolio
                  </Link>
                  <span>&bull;</span>
                  <Link href="/stats" className="hover:text-indigo-400 flex items-center gap-1 transition">
                    Stats Dashboard
                  </Link>
                </div>
                <div className="text-[11px] bg-slate-800/80 px-2.5 py-1 rounded-md text-slate-300 border border-slate-700/60 font-mono">
                  admin / 246809
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Count items by category
  const contactCount = comments.filter((c) => c.article_type === "contact").length;
  const techCount = comments.filter((c) => c.article_type === "tech-blog").length;
  const litCount = comments.filter((c) => c.article_type === "literature").length;

  const filteredItems =
    filter === "all"
      ? comments
      : comments.filter((c) => c.article_type === filter);

  // Authenticated State: Full Notifications Hub
  return (
    <MotionPageWrapper className="min-h-full py-8 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto overflow-y-auto">
      {/* Top Admin Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
        {/* Breadcrumb */}
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

        {/* Admin Navigation & Logout */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Admin</span>
          </div>

          <Link
            href="/stats"
            className="text-xs px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Stats Dashboard</span>
          </Link>

          <Link
            href="/stats?tab=notifications"
            className="text-xs px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition flex items-center gap-1.5"
          >
            <span>Moderation Feed</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <button
            onClick={handleLogout}
            className="text-xs px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/20 transition flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Dismissible New Submission Alert if redirected from contact form */}
      {sentNotice && !dismissNotice && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>New contact submission recorded. Displayed live at the top of the feed below.</span>
          </div>
          <button
            onClick={() => setDismissNotice(true)}
            className="text-emerald-400 hover:text-white text-xs font-bold px-2 py-1 rounded-md hover:bg-emerald-500/20 transition"
          >
            Dismiss
          </button>
        </div>
      )}

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
            <div className="text-xs text-rose-300 font-medium">خواطر</div>
            <div className="text-xl font-bold text-rose-400 mt-0.5">{litCount}</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
        {([
          { id: "all", label: `All (${comments.length})` },
          { id: "contact", label: `Contact Inquiries (${contactCount})` },
          { id: "tech-blog", label: `Tech Blog (${techCount})` },
          { id: "literature", label: `خواطر (${litCount})` },
        ] as { id: FilterCategory; label: string }[]).map((t) => (
          <button
            key={t.id}
            onClick={() => setFilter(t.id)}
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
                        <span className="font-bold text-white text-base">
                          {item.author_name}
                        </span>
                        {item.author_email && (
                          <span className="text-xs text-slate-400 font-mono">
                            ({item.author_email})
                          </span>
                        )}
                        {isContact && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Direct Inquiry
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {isContact ? (
                          <span>Submitted via Contact Form</span>
                        ) : (
                          <span>
                            Commented on{" "}
                            <span className="text-slate-200 font-semibold">
                              &ldquo;{item.article_title}&rdquo;
                            </span>
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
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
