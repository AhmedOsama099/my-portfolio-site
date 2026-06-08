import "./globals.css"; // Make sure this path is correct
import { Cairo } from "next/font/google";

const cairo = Cairo({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
});
import { Metadata } from "next";
import TransitionProvider from "@/Components/transitionProvider";
import TranslationProvider from "@/Components/TranslationProvider";
import { ThemeProvider } from "@/context/ThemeContext";
import OutsideTechBlogStateHandler from "@/Components/PagesLanguagesStateHandler";
import HtmlLangSync from "@/Components/HtmlLangSync";

const siteUrl = "https://ahmedosamadev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ahmed Osama - Software Engineer Portfolio",
    template: "%s | Ahmed Osama",
  },
  description:
    "Portfolio of Ahmed Osama, a Senior Software Engineer — showcasing projects, skills, experience and a technical blog in English and Arabic.",
  keywords: [
    "Ahmed Osama",
    "Software Engineer",
    "Frontend Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Ahmed Osama" }],
  creator: "Ahmed Osama",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Ahmed Osama Portfolio",
    title: "Ahmed Osama - Software Engineer Portfolio",
    description:
      "Portfolio of Ahmed Osama, a Senior Software Engineer — projects, skills, experience and a technical blog.",
    url: siteUrl,
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Osama Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Osama - Software Engineer Portfolio",
    description:
      "Portfolio of Ahmed Osama, a Senior Software Engineer — projects, skills, experience and a technical blog.",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      {/* suppressHydrationWarning prop prevents React hydration warnings that occur when server and client content don't match exactly */}
      <body suppressHydrationWarning className={`${cairo.className}`}>
        <HtmlLangSync />
        <TranslationProvider>
          <ThemeProvider>
            <OutsideTechBlogStateHandler>
              <TransitionProvider>{children}</TransitionProvider>
            </OutsideTechBlogStateHandler>
          </ThemeProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
