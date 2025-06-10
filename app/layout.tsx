import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "ДЕВИЧНИК В ИТАЛИИ",
  description: "КРАСОТА ТЕЛА И ДУШИ",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://womens-retreat.vercel.app",
    title: "ДЕВИЧНИК В ИТАЛИИ",
    description: "КРАСОТА ТЕЛА И ДУШИ",
    siteName: "ДЕВИЧНИК В ИТАЛИИ",
    images: [
      {
        url: "https://womens-retreat.vercel.app/OG.jpg",
        width: 1200,
        height: 630,
        alt: "ДЕВИЧНИК В ИТАЛИИ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ДЕВИЧНИК В ИТАЛИИ",
    description: "КРАСОТА ТЕЛА И ДУШИ",
    images: ["https://womens-retreat.vercel.app/OG.jpg"],
  },

  metadataBase: new URL("https://womens-retreat.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/jpeg",
    "og:image:secure_url": "https://womens-retreat.vercel.app/OG.jpg",
    "og:image:alt": "ДЕВИЧНИК В ИТАЛИИ",
    "twitter:image:alt": "ДЕВИЧНИК В ИТАЛИИ",
    "twitter:image:width": "1200",
    "twitter:image:height": "630",
  },
};

// export const metadata: Metadata = {
//   title: "ДЕВИЧНИК В ТОСКАНЕ",
//   description: "КРАСОТА ТЕЛА И ДУШИ",
// };

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
