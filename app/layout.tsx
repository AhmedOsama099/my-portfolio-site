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
        <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
