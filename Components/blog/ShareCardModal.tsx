"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LiteratureContent } from "@/types/blog";

interface ShareCardModalProps {
  piece: LiteratureContent;
  postId: string;
  open: boolean;
  onClose: () => void;
}

const AUTHOR_NAME_AR = "أحمد أسامة الدعوشي";
const AUTHOR_HANDLE = "ahmedosamadev";
const PROFILE_SRC = "/images/profile.jpg";
const PROFILE_FALLBACK = "/images/hero1.png";

const nextPaint = () =>
  new Promise<void>((res) =>
    requestAnimationFrame(() => requestAnimationFrame(() => res()))
  );

/** The card body — shared by the on-screen (scrollable) and the off-screen
 *  (fully-expanded, used for export) versions so they always look identical. */
const CardBody = ({
  piece,
  fullText,
  scrollable,
}: {
  piece: LiteratureContent;
  fullText: string;
  scrollable: boolean;
}) => (
  <div className="rounded-2xl overflow-hidden bg-white shadow-2xl">
    <div className="h-3 bg-gradient-to-l from-[#565FA1] to-[#9333ea]" />
    <div className="p-7">
      {/* Author */}
      <div className="flex items-center gap-3 mb-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PROFILE_SRC}
          alt={AUTHOR_NAME_AR}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-[#565FA1]/40 shrink-0"
          style={{ objectPosition: "50% 18%" }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = PROFILE_FALLBACK;
          }}
        />
        <div>
          <div className="font-bold text-gray-900 leading-tight">
            {AUTHOR_NAME_AR}
          </div>
          <div dir="ltr" className="text-sm text-[#565FA1] text-right">
            @{AUTHOR_HANDLE}
          </div>
        </div>
      </div>

      {/* Title */}
      {piece.title && (
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{piece.title}</h3>
      )}

      {/* Text */}
      <div className={scrollable ? "max-h-[40vh] overflow-y-auto pl-1" : ""}>
        <p className="text-gray-700 leading-9 text-[15px] whitespace-pre-line">
          {fullText}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-400">{piece.date}</span>
        <span dir="ltr" className="text-xs font-semibold text-[#565FA1]">
          ahmedosamadev.vercel.app
        </span>
      </div>
    </div>
  </div>
);

const ShareCardModal: React.FC<ShareCardModalProps> = ({
  piece,
  postId,
  open,
  onClose,
}) => {
  const exportRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState<"image" | "pdf" | null>(null);

  useEffect(() => setMounted(true), []);

  // Permanent, preview-able deep link to this post: /<locale>/blog/<id>.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const { origin, pathname } = window.location;
    const base = pathname.replace(/\/+$/, ""); // e.g. /ar/blog
    setShareUrl(`${origin}${base}/${postId}`);
  }, [postId]);

  // Close on Escape + lock background scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  const fullText = (piece.content ?? "").trim();
  const shareText = `${piece.title ? piece.title + " — " : ""}${AUTHOR_NAME_AR}`;

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);

  const shareLinks = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      icon: "/images/whatsapp.svg",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: "/images/facebook.svg",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: "/images/linkedin.svg",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard not available */
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: shareText, text: shareText, url: shareUrl });
      } catch {
        /* user dismissed */
      }
    } else {
      handleCopy();
    }
  };

  // Capture the OFF-SCREEN expanded clone, so nothing visibly "flushes" on
  // screen and the full text is always included.
  const renderToPng = async () => {
    if (!exportRef.current) return null;
    const { toPng } = await import("html-to-image");
    return toPng(exportRef.current, {
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: "#ffffff",
    });
  };

  const runExport = async (
    kind: "image" | "pdf",
    finish: (dataUrl: string) => void | Promise<void>
  ) => {
    setBusy(kind);
    await nextPaint(); // paint the "...جارٍ" label before the heavy work
    try {
      const dataUrl = await renderToPng();
      if (dataUrl) await finish(dataUrl);
    } finally {
      setBusy(null);
    }
  };

  const downloadImage = () =>
    runExport("image", (dataUrl) => {
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `${postId}.png`;
      a.click();
    });

  const downloadPdf = () =>
    runExport("pdf", async (dataUrl) => {
      const node = exportRef.current;
      if (!node) return;
      const w = node.offsetWidth;
      const h = node.offsetHeight;
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF({
        orientation: w >= h ? "landscape" : "portrait",
        unit: "px",
        format: [w, h],
      });
      pdf.addImage(dataUrl, "PNG", 0, 0, w, h);
      pdf.save(`${postId}.pdf`);
    });

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Off-screen, full-width, fully-expanded clone used only for export. */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          left: "-10000px",
          top: 0,
          width: "640px",
          pointerEvents: "none",
        }}
      >
        <div ref={exportRef} dir="rtl">
          <CardBody piece={piece} fullText={fullText} scrollable={false} />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            dir="rtl"
            className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="relative w-full max-w-md my-8"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={onClose}
                aria-label="إغلاق"
                className="absolute -top-3 -left-3 z-10 w-9 h-9 rounded-full bg-white text-gray-700 shadow-lg flex items-center justify-center hover:bg-gray-100"
              >
                ✕
              </button>

              {/* On-screen card (scrollable) */}
              <CardBody piece={piece} fullText={fullText} scrollable />

              {/* Controls */}
              <div className="mt-4 rounded-2xl bg-white shadow-2xl p-4">
                <p className="text-sm font-semibold text-gray-600 mb-3 text-center">
                  مشاركة هذا النص
                </p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  {shareLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      title={s.name}
                      className="w-11 h-11 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center transition"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.icon} alt={s.name} className="w-5 h-5" />
                    </a>
                  ))}

                  <button
                    onClick={handleNativeShare}
                    aria-label="مشاركة"
                    title="مشاركة"
                    className="w-11 h-11 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center transition"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#565FA1]">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
                    </svg>
                  </button>

                  <button
                    onClick={handleCopy}
                    aria-label="نسخ الرابط"
                    title="نسخ الرابط"
                    className="w-11 h-11 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center transition"
                  >
                    {copied ? (
                      <span className="text-[#16a34a] text-lg">✓</span>
                    ) : (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#565FA1]">
                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                      </svg>
                    )}
                  </button>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={downloadImage}
                    disabled={busy !== null}
                    className="flex-1 py-2.5 rounded-lg bg-[#565FA1] text-white font-semibold hover:bg-[#4A5390] transition disabled:opacity-60"
                  >
                    {busy === "image" ? "...جارٍ" : "تحميل كصورة"}
                  </button>
                  <button
                    onClick={downloadPdf}
                    disabled={busy !== null}
                    className="flex-1 py-2.5 rounded-lg border-2 border-[#565FA1] text-[#565FA1] font-semibold hover:bg-[#565FA1]/5 transition disabled:opacity-60"
                  >
                    {busy === "pdf" ? "...جارٍ" : "تحميل PDF"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
};

export default ShareCardModal;
