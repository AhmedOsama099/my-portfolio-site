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
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-96px)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
