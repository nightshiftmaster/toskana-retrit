import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ДЕВИЧНИК В ТОСКАНЕ",
  description: "КРАСОТА ТЕЛА И ДУШИ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
