const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-50 via-gray-100 to-blue-200 text-gray-800 py-12 px-6 md:px-16"
    >
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img
          src="/path-to-your-photo.jpg"
          alt="Your Name"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 shadow-lg border-4 border-blue-300"
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed mb-6">
          Hi, I'm{" "}
          <span className="font-semibold text-blue-600">[Your Name]</span>, a
          passionate <span className="font-semibold">Full-Stack Developer</span>{" "}
          with a knack for building robust applications and crafting efficient
          test automation strategies. With{" "}
          <span className="font-semibold">X years of experience</span>, I
          specialize in <span className="font-semibold">.NET</span>,{" "}
          <span className="font-semibold">React</span>, and{" "}
          <span className="font-semibold">Test Automation</span>. My mission is
          to deliver high-quality solutions that bridge the gap between
          innovation and functionality.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Get in Touch
        </a>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg w-48 text-center">
            <h3 className="text-2xl font-semibold text-blue-600">5+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg w-48 text-center">
            <h3 className="text-2xl font-semibold text-blue-600">20+</h3>
            <p>Completed Projects</p>
          </div>
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg w-48 text-center">
            <h3 className="text-2xl font-semibold text-blue-600">Key Skills</h3>
            <p>React, .NET, Testing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
