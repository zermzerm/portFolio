import Image from "next/image";

interface SkillType {
  type: {
    name: string;
    images: string[][];
    variant?: boolean;
  };
}

export default function SkillCard({type}: SkillType) {
  return (
    <div className={`flex flex-col gap-2 ${type.variant && "p-5 bg-[#7e81cb] rounded-2xl"}`}>
      <h3 className={`${type.variant && "text-2xl text-center pb-5"} text[16px]`}>{type.name}</h3>
      <ul className="flex gap-3">
        {type.images.map((el, idx) => (
          <li key={idx}>
            <Image src={el[0]} width={70} height={70} alt={el[1]} />
          </li>
        ))}
      </ul>
    </div>
  );
}
