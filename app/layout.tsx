import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../Components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-screen h-screen bg-red-500">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
