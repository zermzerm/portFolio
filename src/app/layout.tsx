import Navbar from "@/components/Navbar";
import "./globals.css";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "PKS Portfolio",
  description: "내가 만든 포트폴리오 사이트",
  icons: {
    icon: [{url: "/favicon.ico", type: "image/x-icon"}],
  },
  openGraph: {
    type: "website",
    url: "https://pks-portfolio-v2.vercel.app",
    title: "PKS Portfolio",
    description: "내가 만든 포트폴리오 사이트",
    images: ["https://pks-portfolio-v2.vercel.app/face.png"],
  },
};

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
