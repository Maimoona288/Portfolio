import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-indigo-800 text-white fixed w-full top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1
          className="text-xl font-bold cursor-pointer hover:text-accent transition"
          onClick={() => scrollToSection("hero")}
        >
          Maimoona Shahbaz
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          {["home", "about", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize hover:text-accent hover:scale-105 transition duration-300"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl hover:text-accent transition"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 right-4 z-50">
          <div className="w-64 bg-indigo-900 text-white rounded-xl shadow-2xl border border-indigo-700">
            
            <div className="flex flex-col py-4">
              {["home", "about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left px-4 py-2 capitalize hover:bg-indigo-800 hover:text-accent transition rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

export default Header;