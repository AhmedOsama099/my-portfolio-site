import "./globals.css"; // Make sure this path is correct

import { Metadata } from "next";
import TransitionProvider from "@/Components/transitionProvider";
import TranslationProvider from "@/Components/TranslationProvider";

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
    <html lang={"en"}>
      {/* suppressHydrationWarning prop prevents React hydration warnings that occur when server and client content don't match exactly */}
      <body suppressHydrationWarning>
        <TranslationProvider>
          <TransitionProvider>{children}</TransitionProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
