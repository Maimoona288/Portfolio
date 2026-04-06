
// import { FaExternalLinkAlt } from "react-icons/fa";

// function ProjectCard({ title, description, link }) {
//   return (
//     <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col justify-between">
//       <div>
//         <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:transition">
//           {title}
//         </h3>

//         <p className="text-slate-600 text-sm leading-relaxed">
//           {description}
//         </p>
//       </div>

//       <a
//         href={link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="mt-6 inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition group-hover:translate-x-1"
//       >
//         View Project <FaExternalLinkAlt className="text-sm" />
//       </a>

//     </div>
//   );
// }

// export default ProjectCard;

import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, description, link }) {
  return (
    // <div className="group bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col justify-between text-center md:text-left">
      <div className="group bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col justify-between text-center md:text-left max-w-sm mx-auto md:max-w-none">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2 group-hover:text-indigo-600 transition">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center md:justify-start gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition group-hover:translate-x-1"
      >
        View Project <FaExternalLinkAlt className="text-sm" />
      </a>

    </div>
  );
}

export default ProjectCard;