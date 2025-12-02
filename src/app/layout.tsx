// app/layout.tsx
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PKS Portfolio</title>
        <meta name="description" content="내가 만든 포트폴리오 사이트" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PKS Portfolio" />
        <meta property="og:description" content="내가 만든 포트폴리오 사이트" />
        <meta property="og:image" content="https://pks-portfolio-v2.vercel.app/face.png" />
        <meta property="og:url" content="https://pks-portfolio-v2.vercel.app" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
