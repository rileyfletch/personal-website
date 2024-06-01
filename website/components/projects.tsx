import ProjectCard from "./project-card";

export default function ProjectSection() {
    return (
        <section id="projects" className="pt-8">
          <div className="flex flex-col">
            <h2 className="text-5xl font-bold mb-4 text-center transition-colors duration-700 hover:text-engineering">Projects</h2>
            <div className="flex flex-row">
              <ProjectCard
                projectdesc="This is an example"
                projectlink="www.google.com"
                projectname="HistoryMaps"
                iconcolor="bg-engineering"
                imageurl="www.google.com"
              ></ProjectCard>
              <ProjectCard
                projectdesc="This is an example"
                projectlink="www.google.com"
                projectname="TriviaBot"
                iconcolor="bg-engineering"
                imageurl="www.google.com"
              ></ProjectCard>
            </div>
            <div className="flex flex-row">
              <ProjectCard
                projectdesc="This is an example"
                projectlink="https:www.google.com"
                projectname="socket-talk"
                iconcolor="bg-engineering"
                imageurl="https://unpkg.com/css.gg@2.0.0/icons/css/adidas.css' rel='stylesheet"
              ></ProjectCard>
              <ProjectCard
                projectdesc="This is an example"
                projectlink="www.google.com"
                projectname="Swing Chess"
                iconcolor="bg-engineering"
                imageurl="www.google.com"
              ></ProjectCard>
            </div>
            <div className="flex flex-row">
              <ProjectCard
                projectdesc="This is an example"
                projectlink="https:www.google.com"
                projectname="personal website"
                iconcolor="bg-engineering"
                imageurl="https://unpkg.com/css.gg@2.0.0/icons/css/adidas.css' rel='stylesheet"
              ></ProjectCard>
              <ProjectCard
                projectdesc="This is an example"
                projectlink="www.google.com"
                projectname="Data Science ChatGPT"
                iconcolor="bg-engineering"
                imageurl="www.google.com"
              ></ProjectCard>
            </div>
          </div>
        </section>
    )
}