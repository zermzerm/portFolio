export default function Home() {
  return (
    <main className="overflow-auto h-full snap-y snap-mandatory scroll-smooth">
      <section className="min-h-screen snap-start bg-[#e3d7ea]" id="main">
        main
      </section>
      <section className="min-h-screen snap-start bg-[#d7e3ea]" id="about">
        about
      </section>
      <section className="min-h-screen snap-start bg-[#e3e3ea]" id="skills">
        skills
      </section>
      <section className="min-h-screen snap-start bg-[#e3ead7]" id="projects">
        projects
      </section>
      <section className="min-h-screen snap-start bg-[#ead7e3]" id="contact">
        contact
      </section>
    </main>
  );
}
