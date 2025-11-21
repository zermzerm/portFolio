import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Projects from "@/app/projects/page";
import Skills from "@/app/skills/page";

export default function Home() {
  return (
    <main className="overflow-auto h-screen no-scrollbar">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
