import Image from "next/image";

interface ProjectProps {
  data: {
    id: number;
    name: string;
    date: string;
    images: string[][];
    skills: string;
    github: string;
    deployment: string;
    description: string;
    accomplishment: string[];
  };
  key: number;
}

export default function ProjectCard({data}: ProjectProps) {
  return (
    <div className="flex flex-col gap-5 p-5 bg-[#7e81cb] text-white rounded-2xl">
      <h2 className="text-center text-2xl">{data.name}</h2>
      <div className="text-center">{data.date}</div>
      <div className="flex justify-around gap-5">
        <div className="flex flex-col gap-3 text-center">
          <Image src={data.images[0][0]} width={400} height={400} alt={data.images[0][1]} />
          <div>기술스택</div>
          <div>{data.skills}</div>
          <div>{data.github}</div>
          <div>{data.deployment}</div>
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <div>
            <h3 className="text-[20px]">{data.name}</h3>
            <div>{data.description}</div>
          </div>
          <div>
            <div>역할 및 성과</div>
            <div>{data.accomplishment[0]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
