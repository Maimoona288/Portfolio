import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = {
    frontend: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGitAlt /> },
    ],
  };

  const badgeStyle =
    "flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-slate-700 transition duration-300 hover:shadow-md hover:-translate-y-1 hover:bg-indigo-50";

  return (
    <section id="skills" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 mb-10">Skills</h2>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill, index) => (
                <span key={index} className={badgeStyle}>
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill, index) => (
                <span key={index} className={badgeStyle}>
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, index) => (
                <span key={index} className={badgeStyle}>
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;