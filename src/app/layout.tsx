import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body>
        <nav className="text-white absolute w-full h-[50px] text-[50px] font-bold flex justify-evenly items-center">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </nav>
        {children}
      </body>
    </html>
  );
}
