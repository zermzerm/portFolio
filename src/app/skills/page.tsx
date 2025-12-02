"use client";

import SkillCard from "@/app/skills/_components/SkillCard";
import {SKILLS} from "@/constants/skill";
import {motion} from "framer-motion";

export default function Skills() {
  return (
    <section
      className="py-[96px] bg-[#F8F0FC] flex flex-col justify-center items-center"
      id="skills"
    >
      <h1 className="text-[32px] font-bold ">Skills</h1>

      <div className="flex gap-5 p-6">
        <motion.div
          initial={{opacity: 0, x: -80}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: false, amount: 0.2}}
          transition={{duration: 0.7, ease: "easeOut"}}
          className="p-6 bg-[#bfb9e6] rounded-2xl flex flex-col gap-5"
        >
          <h2 className="text-2xl text-center">Technology Stacks</h2>

          <SkillCard type={SKILLS.languages} />
          <SkillCard type={SKILLS.library} />
          <SkillCard type={SKILLS.styling} />
        </motion.div>

        <motion.div
          initial={{opacity: 0, x: 80}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: false, amount: 0.2}}
          transition={{duration: 0.7, ease: "easeOut"}}
          className="flex flex-col gap-5"
        >
          <SkillCard type={SKILLS.version} />
          <SkillCard type={SKILLS.deployment} />
        </motion.div>
      </div>
    </section>
  );
}
