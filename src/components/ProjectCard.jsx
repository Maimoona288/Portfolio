import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 p-6 flex flex-col justify-between">
      
      {/* Content */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">
          {title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition"
      >
        View Project <FaExternalLinkAlt className="text-sm" />
      </a>

    </div>
  );
}

export default ProjectCard;