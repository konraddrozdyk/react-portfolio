import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const LandingPage: React.FC = () => {
  return (
    <section
      id="landing"
      className="h-screen bg-mountains flex flex-col justify-center items-center text-white"
    >
      <div className="w-40 h-40 md:w-48 md:h-48 absolute top-10 left-10 text-4xl">
        &lt;/salt &gt;
      </div>
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Konrad Drozdyk</h1>
        <p className="text-xl md:text-2xl font-light mb-8">
          <h2>
            <ReactTypingEffect
              text={[
                "Full-Stack Developer",
                "Test Automation Specialist",
                "Lifelong Learner",
              ]}
              speed={200}
              eraseSpeed={100}
              typingDelay={200}
              className="text-blue-600"
            />
          </h2>
        </p>
      </div>

      <div className="flex space-x-6">
        <a
          href="#about"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-100 transition bg-costa"
        >
          Get to know me
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-blue-600 transition bg-quincy"
        >
          <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
          Contact
        </a>
      </div>
    </section>
  );
};

export default LandingPage;
