import profile from "../assets/images/profile.jpeg";

function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT  Image */}
          <div className="flex justify-center">
            <img
              src={profile}
              alt="About profile"
              className="w-64 sm:w-80 md:w-96 rounded-xl shadow-lg border border-gray-200 "
            />
          </div>

          {/* RIGHT  Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-10">
              About Me
            </h2>

            <p className="mt-4 text-slate-800 text-base sm:text-lg leading-relaxed">
              
              I am a MERN Stack Developer passionate about building modern and
              responsive web applications. I enjoy creating user-friendly interfaces
              and working with technologies like MongoDB, Express, React, and Node.js.
            </p>

            <p className="mt-4 text-slate-800 text-base sm:text-lg leading-relaxed">
              I focus on writing clean code, solving real-world problems, and
              continuously improving my skills.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;