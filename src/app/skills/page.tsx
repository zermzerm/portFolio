import Image from "next/image";

export default function Skills() {
  return (
    <section
      className="py-[96px] bg-[#d7e3ea] flex flex-col justify-center items-center"
      id="skills"
    >
      <h1 className="text-[32px] font-bold">Skills</h1>
      <div className="flex gap-5 p-5 text-white">
        <div className="p-5 bg-[#7e81cb] rounded-2xl flex flex-col gap-5">
          <h2 className="text-center">Technology Stacks</h2>

          {/* 언어 및 프레임워크 */}
          <div className="flex flex-col gap-2">
            <h3>Languages & Frameworks</h3>
            <ul className="flex gap-3">
              <li className="inline">
                <Image src="/images/HTML.svg" width={70} height={70} alt="HTML" />
              </li>
              <li className="inline">
                <Image src="/images/TypeScript.svg" width={70} height={70} alt="TypeScript" />
              </li>
              <li className="inline">
                <Image src="/images/NextJS-Dark.svg" width={70} height={70} alt="NextJS-Dark" />
              </li>
            </ul>
          </div>

          {/* 상태 관리 및 라이브러리 */}
          <div className="flex flex-col gap-2">
            <h3>Library & State Management</h3>
            <ul className="flex gap-3">
              <li className="inline">
                <Image src="/images/React.svg" width={70} height={70} alt="React" />
              </li>
              <li className="inline">
                <Image src="/images/ReactQuery.svg" width={70} height={70} alt="ReactQuery" />
              </li>
              <li className="inline">
                <Image src="/images/Zustand.svg" width={70} height={70} alt="Zustand" />
              </li>
              <li className="inline">
                <Image
                  src="/images/Recoil.svg"
                  width={70}
                  height={70}
                  alt="Recoil"
                  className="rounded-[15px]"
                />
              </li>
            </ul>
          </div>

          {/* 스타일링 */}
          <div className="flex flex-col gap-2">
            <h3>Styling</h3>
            <ul className="flex gap-3">
              <li className="inline">
                <Image src="/images/CSS.svg" width={70} height={70} alt="CSS" />
              </li>
              <li className="inline">
                <Image
                  src="/images/StyledComponents.svg"
                  width={70}
                  height={70}
                  alt="StyledComponents"
                />
              </li>
              <li className="inline">
                <Image src="/images/CSSModule.png" width={70} height={70} alt="CSSModule" />
              </li>
              <li className="inline">
                <Image src="/images/Figma.svg" width={70} height={70} alt="Figma" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {/* 버전 관리 */}
          <div className="p-5 bg-[#7e81cb] rounded-2xl flex flex-col gap-2">
            <h2 className="text-center">Version Controls</h2>
            <ul className="flex gap-3">
              <li className="inline">
                <Image src="/images/Git.svg" width={70} height={70} alt="Git" />
              </li>
              <li className="inline">
                <Image src="/images/Github.svg" width={70} height={70} alt="Github" />
              </li>
            </ul>
          </div>

          {/* 배포 */}
          <div className="p-5 bg-[#7e81cb] rounded-2xl flex flex-col gap-2">
            <h2 className="text-center">Deployment</h2>
            <ul className="flex gap-3">
              <li className="inline">
                <Image src="/images/Netlify.svg" width={70} height={70} alt="Netlify" />
              </li>
              <li className="inline">
                <Image src="/images/Vercel.svg" width={70} height={70} alt="Vercel" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
