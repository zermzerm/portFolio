"use client";

import ProjectCard from "@/app/projects/_components/ProjectCard";
import {PROJECT} from "@/constants/project";
import {motion} from "framer-motion";

export default function Projects() {
  return (
    <section
      className="py-[96px] bg-[#dfdcf7] flex flex-col justify-center items-center"
      id="Projects"
    >
      <h1 className="text-[32px] font-bold">Projects</h1>
      <motion.div
        initial={{opacity: 0, y: 180}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: false, amount: 0.1}}
        transition={{duration: 0.3, ease: "easeOut"}}
        className="p-6 text flex flex-col gap-6"
      >
        {PROJECT.map((el) => (
          <ProjectCard data={el} key={el.id} />
        ))}
      </motion.div>
    </section>
  );
}
