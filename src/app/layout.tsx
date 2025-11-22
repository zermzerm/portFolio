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
      <body>
        <nav className="text-[#4b5563] absolute  w-screen h-[50px] text-[18px] font-bold flex justify-between items-center px-8">
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
