import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="min-h-[500px] flex justify-center items-center bg-[#F5E6E6]">
        {/* 내부 컨텐츠 wrapper */}
        <div className="flex gap-[100px]">
          {/* 왼쪽 이미지 */}
          <Image src="/face.png" width={300} height={500} alt="myFace" className="rounded-lg" />
          {/* 오른쪽 설명 */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-[#2F4F4F]">About me</h2>
            <p className="text-lg text-[#2F4F4F]">
              여기에 설명 내용을 작성하세요. 텍스트 길이에 따라 자동으로 높이가 조정됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
