import profile from "../assets/images/profile.jpeg";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-50  pt-16 md:pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left side intro */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 leading-snug md:leading-tight">
            Hi, I'm <span>Maimoona Shahbaz</span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-slate-800 leading-relaxed">
            <span className="text-indigo-700 text-2xl sm:text-3xl md:text-4xl font-bold inline-block overflow-hidden whitespace-nowrap align-bottom typing-text">
              MERN Stack Developer
            </span>{" "}
            <span className="block mt-2 font-semibold">
              passionate about building modern web applications.
            </span>
          </p>
          {/* <button className="mt-8 font-semibold bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition duration-300">
            View Projects
          </button> */}
          <button
  onClick={() => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="mt-8 font-semibold bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition duration-300"
>
  View Projects
</button>
        </div>

        {/* Right side Profile image */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="w-64 sm:w-80 md:w-96 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
