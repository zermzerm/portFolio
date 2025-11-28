import ProjectCard from "@/app/projects/_components/ProjectCard";
import {PROJECT} from "@/constants/project";

export default function Projects() {
  return (
    <section
      className="py-[96px] bg-[#e3e3ea] flex flex-col justify-center items-center"
      id="projects"
    >
      <h1 className="text-[32px] font-bold">Projects</h1>
      <div className="p-5 text flex flex-col gap-6">
        {PROJECT.map((el) => (
          <ProjectCard data={el} key={el.id} />
        ))}
      </div>
    </section>
  );
}
