import SkillCard from "@/app/skills/_components/SkillCard";
import {SKILLS} from "@/constants/skill";

export default function Skills() {
  return (
    <section
      className="py-[96px] bg-[#F8F0FC] flex flex-col justify-center items-center"
      id="skills"
    >
      <h1 className="text-[32px] font-bold text-[#2F4F4F]">Skills</h1>
      <div className="flex gap-5 p-5 text-[#2F4F4F]">
        <div className="p-5 bg-[#bfb9e6] rounded-2xl flex flex-col gap-5">
          <h2 className="text-2xl text-center">Technology Stacks</h2>
          {/* 언어 및 프레임워크 */}
          <SkillCard type={SKILLS.languages} />
          {/* 상태 관리 및 라이브러리 */}
          <SkillCard type={SKILLS.languages} />
          {/* 스타일링 */}
          <SkillCard type={SKILLS.styling} />
        </div>
        <div className="flex flex-col gap-5">
          {/* 버전 관리 */}
          <SkillCard type={SKILLS.version} />
          {/* 배포 */}
          <SkillCard type={SKILLS.deployment} />
        </div>
      </div>
    </section>
  );
}
