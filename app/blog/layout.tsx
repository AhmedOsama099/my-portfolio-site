import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خواطر — أحمد أسامة الدعوشي",
  description:
    "مجموعة نصوص أدبية وتأملات نثرية وفلسفية بقلم أحمد أسامة — خواطر، قراءات، وتأملات في الحياة والإنسان.",
  alternates: {
    canonical: "https://ahmedosamadev.vercel.app/blog",
  },
  openGraph: {
    type: "website",
    url: "https://ahmedosamadev.vercel.app/blog",
    title: "خواطر — أحمد أسامة الدعوشي",
    description:
      "مجموعة نصوص أدبية وتأملات نثرية وفلسفية بقلم أحمد أسامة — خواطر، قراءات، وتأملات في الحياة والإنسان.",
    siteName: "Ahmed Osama",
    locale: "ar_AR",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "أحمد أسامة — نصوص وخواطر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "خواطر — أحمد أسامة الدعوشي",
    description:
      "مجموعة نصوص أدبية وتأملات نثرية وفلسفية بقلم أحمد أسامة — خواطر، قراءات، وتأملات في الحياة والإنسان.",
    images: ["/images/profile.jpg"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
