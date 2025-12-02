import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      className="py-[96px] text-white bg-[#2e2c3e] flex flex-col justify-around items-center gap-10"
      id="contact"
    >
      <h1 className="text-[32px] font-bold text-center">Contact</h1>
      <div className="flex gap-[200px] text-center">
        <div className="w-[300px]">
          <div>Mail</div>
          <div>zerm0907@gmail.com</div>
        </div>
        <Link href="https://github.com/zermzerm" className="w-[300px]" target="_blank">
          <div className="flex justify-center items-center">
            <Image src="/link.png" width={33} height={33} alt="linkImage"></Image>
            <p>Github</p>
          </div>
          <div>https://github.com/zermzerm</div>
        </Link>
        <Link href="https://zermzerm.tistory.com/" className="w-[300px]" target="_blank">
          <div className="flex justify-center items-center">
            <Image src="/link.png" width={33} height={33} alt="linkImage"></Image>
            <p>Tistory</p>
          </div>
          <div>https://zermzerm.tistory.com</div>
        </Link>
      </div>
    </section>
  );
}
