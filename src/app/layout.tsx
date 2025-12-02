import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <head>
        <meta property="og:title" content="PKS Portfolio" />
        <meta property="og:description" content="내가 만든 포트폴리오 사이트" />
        <meta property="og:image" content="https://postimg.cc/QBvYtnSX" />
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
