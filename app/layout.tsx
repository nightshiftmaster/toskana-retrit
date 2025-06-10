import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <meta property="og:title" content="ДЕВИЧНИК В ИТАЛИИ" />
        <meta property="og:description" content="КРАСОТА ТЕЛА И ДУШИ" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://womens-retreat.vercel.app" />
        <meta
          property="og:image"
          content="https://womens-retreat.vercel.app/OG.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="ДЕВИЧНИК В ИТАЛИИ" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ДЕВИЧНИК В ИТАЛИИ" />
        <meta name="twitter:description" content="КРАСОТА ТЕЛА И ДУШИ" />
        <meta
          name="twitter:image"
          content="https://womens-retreat.vercel.app/OG.jpg"
        />
        <meta name="twitter:image:alt" content="ДЕВИЧНИК В ИТАЛИИ" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
