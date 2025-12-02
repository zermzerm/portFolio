import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <head>
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
