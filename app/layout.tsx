import "./globals.css"; // Make sure this path is correct
import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const cairo = Cairo({
  weight: ["400", "700"],
  subsets: ["arabic"],
  display: "swap",
});
import { Metadata } from "next";
import TransitionProvider from "@/Components/transitionProvider";
import TranslationProvider from "@/Components/TranslationProvider";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Ahmed Osama - Portfolio",
  description: "Portfolio website showcasing my work and skills",
  openGraph: {
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Osama Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      {/* suppressHydrationWarning prop prevents React hydration warnings that occur when server and client content don't match exactly */}
      <body suppressHydrationWarning className={`${cairo.className}`}>
        <TranslationProvider>
          <ThemeProvider>
            <TransitionProvider>{children}</TransitionProvider>
          </ThemeProvider>
        </TranslationProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
