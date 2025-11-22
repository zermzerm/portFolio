import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="min-h-[500px] flex justify-center items-center bg-[#e3d7ea]">
        {/* 내부 컨텐츠 wrapper */}
        <div className="flex gap-[100px]">
          {/* 왼쪽 이미지 */}
          <Image src="/face.png" width={300} height={500} alt="myFace" className="rounded-lg" />
          {/* 오른쪽 설명 */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-[#4b5563]">About me</h2>
            <p className="text-lg">
              여기에 설명 내용을 작성하세요. 텍스트 길이에 따라 자동으로 높이가 조정됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
