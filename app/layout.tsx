import "./globals.css"; // Make sure this path is correct
import { Cairo, Aref_Ruqaa } from "next/font/google";

const cairo = Cairo({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
});

const arefRuqaa = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-khawatir",
  display: "swap",
});
import { Metadata } from "next";
import { headers } from "next/headers";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n/config";
import TransitionProvider from "@/Components/transitionProvider";
import TranslationProvider from "@/Components/TranslationProvider";
import { ThemeProvider } from "@/context/ThemeContext";
import OutsideTechBlogStateHandler from "@/Components/PagesLanguagesStateHandler";
import HtmlLangSync from "@/Components/HtmlLangSync";
import WebVitals from "@/Components/WebVitals";
import AnalyticsTracker from "@/Components/AnalyticsTracker";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = "https://ahmedosamadev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ahmed Osama - Senior Software Engineer & Arabic Writer",
    template: "%s | Ahmed Osama",
  },
  description:
    "Portfolio of Ahmed Osama: Senior Software Engineer & Arabic Writer — showcasing engineering projects, technical blog in English & Arabic, and reflective Arabic literature writings.",
  keywords: [
    "Ahmed Osama",
    "Software Engineer",
    "Frontend Developer",
    "Full-Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Arabic Literature",
    "أحمد أسامة",
    "أدب عربي",
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
    title: "Ahmed Osama - Senior Software Engineer & Arabic Writer",
    description:
      "Explore software engineering projects, technical deep-dive guides, and creative Arabic literary prose by Ahmed Osama.",
    url: siteUrl,
    images: [
      {
        url: "/images/hero-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Osama — Software Engineer & Writer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Osama - Senior Software Engineer & Arabic Writer",
    description:
      "Software engineering projects, technical articles, and Arabic literature writings by Ahmed Osama.",
    images: ["/images/hero-portrait.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerLocale = (await headers()).get("x-locale");
  const locale = isLocale(headerLocale) ? headerLocale : DEFAULT_LOCALE;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      {/* suppressHydrationWarning prop prevents React hydration warnings that occur when server and client content don't match exactly */}
      <body suppressHydrationWarning className={`${cairo.className} ${arefRuqaa.variable}`}>
        <HtmlLangSync />
        <WebVitals />
        <AnalyticsTracker />
        <SpeedInsights />
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
