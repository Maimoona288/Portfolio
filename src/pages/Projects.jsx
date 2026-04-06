import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built using React and Tailwind CSS.",
      link: "https://your-link.com",
    },
    {
      title: "Quiz App",
      description: "Interactive quiz app with dynamic questions and scoring.",
      link: "https://your-link.com",
    },
    {
      title: "Full Stack App",
      description: "MERN stack application with authentication and dashboard.",
      link: "https://your-link.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
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