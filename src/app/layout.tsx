"use client";

import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <nav className="text-[#172626] bg-white/30 backdrop-blur absolute z-9999  w-screen h-[50px] text-[18px] font-bold flex justify-between items-center px-8">
          <div>
            <span>PKS</span>
          </div>
          <div className="flex gap-[24px]">
            <span
              onClick={() => {
                handleScroll("about");
              }}
              className="cursor-pointer"
            >
              About
            </span>
            <span
              onClick={() => {
                handleScroll("skills");
              }}
              className="cursor-pointer"
            >
              Skills
            </span>
            <span
              onClick={() => {
                handleScroll("projects");
              }}
              className="cursor-pointer"
            >
              Projects
            </span>
            <span
              onClick={() => {
                handleScroll("contact");
              }}
              className="cursor-pointer"
            >
              Contact
            </span>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
