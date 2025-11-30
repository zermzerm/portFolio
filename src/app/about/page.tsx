import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="min-h-[500px] flex justify-center items-center bg-[#F5E6E6]">
        <div className="flex gap-[100px]">
          <Image src="/face.png" width={300} height={500} alt="myFace" className="rounded-lg" />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-[#2F4F4F]">About me</h2>
            <p className="text-lg text-[#2F4F4F]">
              여기에 설명 여기에 설명 여기에 설명 여기에 설명 여기에 설명 여기에 설명
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
