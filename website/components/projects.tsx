import ProjectCard from "./project-card";

export default function ProjectSection() {
    return (
        <section id="projects" className="py-16">
          <h2 className="text-5xl font-bold mb-4 text-center transition-colors duration-700 hover:text-engineering">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            <ProjectCard></ProjectCard>
          </div>
        </section>
    )
}