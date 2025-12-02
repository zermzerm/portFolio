import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="min-h-[500px] flex justify-center items-center bg-[#bfb9e6]">
        <div className="flex gap-[100px]">
          <Image src="/face.png" width={300} height={500} alt="myFace" className="rounded-lg" />
          <div className="flex flex-col justify-center gap-2">
            <h2 className="text-3xl font-bold mb-4 text-[#172626]">About me</h2>
            <p className="text-lg text-[#172626]">
              여기에 설명 여기에 설명 여기에 설명 여기에 설명 여기에 설명 여기에 설명
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
