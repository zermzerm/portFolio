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
        <nav className="text-white absolute w-full h-[50px] text-[50px] font-bold flex justify-evenly items-center">
          <div
            onClick={() => {
              handleScroll("main");
            }}
            className="cursor-pointer"
          >
            main
          </div>
          <div
            onClick={() => {
              handleScroll("about");
            }}
            className="cursor-pointer"
          >
            about
          </div>
          <div
            onClick={() => {
              handleScroll("skills");
            }}
            className="cursor-pointer"
          >
            skills
          </div>
          <div
            onClick={() => {
              handleScroll("projects");
            }}
            className="cursor-pointer"
          >
            projects
          </div>
          <div
            onClick={() => {
              handleScroll("contact");
            }}
            className="cursor-pointer"
          >
            contact
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
