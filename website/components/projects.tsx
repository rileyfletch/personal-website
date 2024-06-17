import ProjectCard from "./project-card";

export default function ProjectSection() {
    return (
        <section id="projects" className="pt-8">
          <div className="flex flex-col">
            <h2 className="text-5xl font-bold mb-4 text-center transition-colors duration-700 hover:text-persian">Projects</h2>
            <div className="flex flex-row">
              <ProjectCard
                projectdesc="This is an example"
                projectlink="www.google.com"
                projectname="HistoryMaps"
                iconcolor="bg-persian"
                imageurl="www.google.com"
              ></ProjectCard>
              <ProjectCard
                projectdesc="This is an example"
                projectlink="www.google.com"
                projectname="TriviaBot thing"
                iconcolor="bg-persian"
                imageurl="www.google.com"
              ></ProjectCard>
            </div>
            <div className="flex flex-row">
              <ProjectCard
                projectdesc="This is an example"
                projectlink="https:www.google.com"
                projectname="socket-talk yp"
                iconcolor="bg-persian"
                imageurl="https://unpkg.com/css.gg@2.0.0/icons/css/adidas.css' rel='stylesheet"
              ></ProjectCard>
              <ProjectCard
                projectdesc="This is an example but actually we will probably have a fair amount of text in these spaces"
                projectlink="www.google.com"
                projectname="Swing Chess"
                iconcolor="bg-persian"
                imageurl="www.google.com"
              ></ProjectCard>
            </div>
            <div className="flex flex-row">
              <ProjectCard
                projectdesc="This is an example"
                projectlink="https:www.google.com"
                projectname="personal website"
                iconcolor="bg-persian"
                imageurl="https://unpkg.com/css.gg@2.0.0/icons/css/adidas.css' rel='stylesheet"
              ></ProjectCard>
              <ProjectCard
                projectdesc="This is an example"
                projectlink="www.google.com"
                projectname="Data"
                iconcolor="bg-persian"
                imageurl="www.google.com"
              ></ProjectCard>
            </div>
          </div>
        </section>
    )
}