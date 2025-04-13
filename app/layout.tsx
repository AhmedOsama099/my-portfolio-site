import { Metadata } from "next";
import "./globals.css";
import TransitionProvider from "@/Components/transitionProvider";

export const metadata: Metadata = {
  title: "Ahmed Osama - Portfolio",
  description: "Portfolio website showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning prop prevents React hydration warnings that occur when server and client content don't match exactly */}
      <body suppressHydrationWarning>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
