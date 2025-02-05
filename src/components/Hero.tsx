import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const LandingPage: React.FC = () => {
  return (
    <section
      id="landing"
      className="h-screen flex flex-col justify-center items-center text-white"
    >
      <div className="w-40 h-40 md:w-48 md:h-48 absolute top-10 left-10 text-4xl">
        &lt; /salt &gt;
      </div>
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2 shadow-xl">
        <a href="https://github.com/konraddrozdyk" target="_blank">
          <img
            src="images/github-logo.svg"
            alt="GitHub"
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
        </a>
        <a href="https://linkedin.com/in/konrad-drozdyk/" target="_blank">
          <img
            src="images/linkedin-logo.svg"
            alt="LinkedIn"
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
        </a>
      </div>

      <div className="text-center">
        <h1 className="text-5xl md:text-6xl mb-4">Konrad Drozdyk</h1>
        <p className="text-xl md:text-2xl mb-8">
          <h2>
            <ReactTypingEffect
              text={[
                "Full-Stack Developer",
                "Test Automation Specialist",
                "Lifelong Learner",
              ]}
              speed={50}
              eraseSpeed={50}
              typingDelay={100}
              className="text-blue-600"
            />
          </h2>
        </p>
      </div>

      <div className="flex space-x-6">
        <a
          href="#about"
          className="px-6 py-3 bg-white rounded-lg shadow-lg hover:bg-seablue transition bg-warmyellow"
        >
          Get to know me
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-transparent border border-white rounded-lg shadow-lg hover:bg-warmyellow transition bg-seablue"
        >
          <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
          Contact
        </a>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faArrowDown}
          className="absolute bottom-5 h-8 w-8 animate-bounce"
        />{" "}
      </div>
    </section>
  );
};

export default LandingPage;
