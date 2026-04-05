import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
      <footer className="bg-indigo-900 text-white w-full border-t border-indigo-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-center gap-3">
        
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © 2026 Maimoona Shahbaz. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 text-lg">
          
          <a 
            href="https://github.com/Maimoona288" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>

          <a 
            href="https://www.linkedin.com/in/maimoona-shahbaz-728b74310?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
           rel="noopener noreferrer" 
            className="hover:text-white hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>


        </div>

      </div>

    </footer>
  );
}

export default Footer;