"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { stripLocale } from "@/lib/i18n/config";
import { useTechAuth, checkIsItemLocked } from "./TechAuthContext";
import LocaleLink from "@/Components/LocaleLink";

export default function TechArticleGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isAuthenticated, login } = useTechAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Extract category and article ID from pathname, e.g. /tech-blog/performance/fcp -> ["tech-blog", "performance", "fcp"]
  const cleanPath = stripLocale(pathname || "");
  const segments = cleanPath.split("/").filter(Boolean);

  // Check if current route is a technology article
  const category = segments[1] || "";
  const articleId = segments[2] || "";

  const isLocked = checkIsItemLocked(category, articleId, isAuthenticated);

  if (!isLocked) {
    return <>{children}</>;
  }

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    setTimeout(() => {
      const ok = login(username, password);
      setIsSubmitting(false);
      if (!ok) {
        setError("Invalid credentials. Please verify your username and password.");
      }
    }, 250);
  };

  return (
    <div className="py-12 sm:py-20 px-4 flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-lg bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-[#3A4184] via-[#565FA1] to-[#EE3E54] text-white flex items-center justify-center mx-auto shadow-xl shadow-indigo-950/20 mb-5">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>

        <span className="inline-block px-3 py-1 rounded-full bg-rose-50 text-[#EE3E54] text-xs font-bold uppercase tracking-wider mb-2 border border-rose-200/60">
          Upcoming Article
        </span>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3D4082] tracking-tight">
          Preview Credentials Required
        </h2>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          This article is currently an upcoming release in the series. Please sign in with your author or reviewer credentials to unlock full access.
        </p>

        <form onSubmit={handleUnlock} className="mt-6 space-y-3.5 text-start">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. admin"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#565FA1] focus:ring-2 focus:ring-[#565FA1]/20 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#565FA1] focus:ring-2 focus:ring-[#565FA1]/20 outline-none transition-all"
            />
          </div>

          {error && (
            <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#3A4184] via-[#565FA1] to-[#EE3E54] hover:shadow-lg hover:shadow-indigo-950/20 active:scale-[0.98] transition-all disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
          >
            {isSubmitting ? "Verifying..." : "Unlock Article →"}
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <LocaleLink
            href="/tech-blog/performance/ttfb"
            className="text-[#565FA1] hover:text-[#EE3E54] font-semibold transition-colors"
          >
            ← Read Public TTFB Guide
          </LocaleLink>
          <LocaleLink
            href="/tech-blog"
            className="text-slate-500 hover:text-slate-800 font-medium transition-colors"
          >
            Tech Blog Home
          </LocaleLink>
        </div>
      </div>
    </div>
  );
}
