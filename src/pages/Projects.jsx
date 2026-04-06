import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        

        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;