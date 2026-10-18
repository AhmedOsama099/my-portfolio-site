"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { usePageTransition } from "@/Components/transitionProvider";

export interface TechAuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthModalOpen: boolean;
  openAuthModal: (targetHref?: string) => void;
  closeAuthModal: () => void;
  pendingRedirectHref: string | null;
  isItemLocked: (parentKey: string, articleHref?: string) => boolean;
}

const TechAuthContext = createContext<TechAuthContextType | undefined>(undefined);

/**
 * Determines whether a technology section or article is locked behind author credentials.
 * - Accessibility is an upcoming domain (locked without auth)
 * - Performance has TTFB as public, while all other articles (FCP, LCP, CLS, INP) are upcoming (locked without auth)
 * - Git and TypeScript remain public
 */
export const checkIsItemLocked = (
  parentKey: string,
  articleHref?: string,
  authenticated: boolean = false
): boolean => {
  if (authenticated) return false;

  const key = parentKey.toLowerCase();
  if (key === "accessibility") {
    return true;
  }

  if (key === "performance") {
    // If no specific article is given (e.g. parent category), it defaults to TTFB which is public
    if (!articleHref) return false;
    const cleanArticle = articleHref.replace(/^\/+|\/+$/g, "").split("/").pop() || "";
    return cleanArticle !== "ttfb";
  }

  return false;
};

export const TechAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [pendingRedirectHref, setPendingRedirectHref] = useState<string | null>(null);

  // Check persistent authentication on client mount
  useEffect(() => {
    try {
      const statsAuth =
        localStorage.getItem("stats_authenticated") === "true" ||
        sessionStorage.getItem("stats_authenticated") === "true";
      const techAuth =
        localStorage.getItem("tech_authenticated") === "true" ||
        sessionStorage.getItem("tech_authenticated") === "true";

      if (statsAuth || techAuth) {
        setIsAuthenticated(true);
      }
    } catch {}
  }, []);

  const login = useCallback((username: string, password: string): boolean => {
    const u = username.trim().toLowerCase();
    const p = password.trim();

    // Supports author credentials (matching stats admin or author alias)
    const isValid =
      (u === "admin" && p === "246809") ||
      (u === "ahmed" && p === "246809") ||
      (u === "admin" && p === "admin");

    if (isValid) {
      setIsAuthenticated(true);
      try {
        localStorage.setItem("tech_authenticated", "true");
        localStorage.setItem("stats_authenticated", "true");
      } catch {}
      return true;
    }

    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    try {
      localStorage.removeItem("tech_authenticated");
      sessionStorage.removeItem("tech_authenticated");
    } catch {}
  }, []);

  const openAuthModal = useCallback((targetHref?: string) => {
    if (targetHref) {
      setPendingRedirectHref(targetHref);
    }
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
    setPendingRedirectHref(null);
  }, []);

  const isItemLocked = useCallback(
    (parentKey: string, articleHref?: string) => {
      return checkIsItemLocked(parentKey, articleHref, isAuthenticated);
    },
    [isAuthenticated]
  );

  return (
    <TechAuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        pendingRedirectHref,
        isItemLocked,
      }}
    >
      {children}
      <TechAuthModal />
    </TechAuthContext.Provider>
  );
};

export const useTechAuth = (): TechAuthContextType => {
  const context = useContext(TechAuthContext);
  if (!context) {
    // Provide a safe fallback if accessed outside the provider
    return {
      isAuthenticated: false,
      login: () => false,
      logout: () => {},
      isAuthModalOpen: false,
      openAuthModal: () => {},
      closeAuthModal: () => {},
      pendingRedirectHref: null,
      isItemLocked: (parentKey, articleHref) => checkIsItemLocked(parentKey, articleHref, false),
    };
  }
  return context;
};

/**
 * Sleek, glassmorphic authentication modal that prompts for credentials
 * when clicking upcoming / locked tech blog items.
 */
function TechAuthModal() {
  const { isAuthModalOpen, closeAuthModal, login, pendingRedirectHref } = useTechAuth();
  const { navigateWithTransition } = usePageTransition();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthModalOpen) {
      setError("");
      setUsername("");
      setPassword("");
    }
  }, [isAuthModalOpen]);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    setTimeout(() => {
      const success = login(username, password);
      setIsSubmitting(false);

      if (success) {
        closeAuthModal();
        if (pendingRedirectHref) {
          if (navigateWithTransition) {
            navigateWithTransition(pendingRedirectHref);
          } else {
            router.push(pendingRedirectHref);
          }
        }
      } else {
        setError("Invalid credentials. Please enter valid author credentials.");
      }
    }, 250);
  };

  return (
    <div
      className="fixed inset-0 z-[350] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md transition-all select-none"
      onClick={closeAuthModal}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/90 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative glow */}
        <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-gradient-to-br from-[#EE3E54]/20 to-[#565FA1]/20 blur-2xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon & Title */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#3A4184] via-[#565FA1] to-[#EE3E54] text-white flex items-center justify-center shadow-lg shadow-indigo-950/20 shrink-0">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#EE3E54]">
              Upcoming Article Preview
            </span>
            <h3 className="text-xl font-extrabold text-[#3D4082]">
              Author Credentials Required
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
          This article is part of the upcoming publication series. Please enter your sign-in credentials to unlock and preview this guide.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
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
              autoFocus
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
            className="w-full mt-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#3A4184] via-[#565FA1] to-[#EE3E54] hover:shadow-lg hover:shadow-indigo-950/20 active:scale-[0.98] transition-all disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>Verifying...</span>
            ) : (
              <>
                <span>Unlock & Continue</span>
                <span>→</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-[11px] text-slate-400">
            Looking for public articles? <span className="font-semibold text-slate-600">TTFB, Git & TypeScript</span> are fully open.
          </p>
        </div>
      </div>
    </div>
  );
}
