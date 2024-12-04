import "./globals.css";
import TransitionProvider from "@/Components/transitionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
