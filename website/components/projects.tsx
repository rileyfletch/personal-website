import ProjectCard from "./project-card";

export default function ProjectSection() {
    return (
        <section id="projects" className="pt-8">
          <h2 className="text-5xl font-bold mb-4 text-center transition-colors duration-700 hover:text-engineering">Projects</h2>
          <div className="flex flex-row space-x-4">
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
          </div>
          <div className="flex flex-row space-x-4">
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
          </div>
          
        </section>
    )
}