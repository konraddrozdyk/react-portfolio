import React from "react";

const LandingPage: React.FC = () => {
  return (
    <section
      id="landing"
      className="h-screen bg-gradient-to-br from-blue-600 to-green-500 flex flex-col justify-center items-center text-white"
    >
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white">
        <img
          src="../public/konradimg.jpeg"
          alt="Konrad"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hello, I'm Konrad
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8">
          Full-Stack Developer | Test Automation Expert | Lifelong Learner
        </p>
      </div>

      <div className="flex space-x-6">
        <a
          href="#timeline"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-100 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-blue-600 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default LandingPage;
