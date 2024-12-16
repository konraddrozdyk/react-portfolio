import { useState } from "react";

const AboutMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState("journey");

  const tabs = [
    {
      id: "journey",
      label: "Professional Journey",
      content:
        "I started my career in software testing, building expertise in automation, performance, and security testing. Over the years, I've transitioned into full-stack development, focusing on creating seamless user experiences and robust backend systems.",
    },
    {
      id: "skills",
      label: "Technical Skills",
      content:
        "Proficient in .NET, React, Tailwind CSS, Selenium, and REST API development. Adept at integrating test automation strategies into CI/CD pipelines to enhance software quality and delivery speed.",
    },
    {
      id: "hobbies",
      label: "Hobbies & Interests",
      content:
        "When I'm not coding, I enjoy exploring nature through hiking, capturing moments through photography, and diving into sci-fi novels. I also have a passion for learning new technologies and participating in hackathons.",
    },
  ];

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center py-12 px-6 md:px-16"
    >
      {/* Left Section: Image and Stats */}
      <div className="flex-1 flex flex-col items-center mb-6 md:mb-0 md:pr-8">
        <img
          src="/path-to-your-photo.jpg"
          alt="Your Name"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 shadow-lg border-4 border-blue-300 mb-6"
        />
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            Hi, I'm{" "}
            <span className="font-semibold text-blue-600">[Your Name]</span>, a
            passionate{" "}
            <span className="font-semibold">Full-Stack Developer</span> with a
            knack for building robust applications and crafting efficient test
            automation strategies. With{" "}
            <span className="font-semibold">X years of experience</span>, I
            specialize in <span className="font-semibold">.NET</span>,{" "}
            <span className="font-semibold">React</span>, and{" "}
            <span className="font-semibold">Test Automation</span>. My mission
            is to deliver high-quality solutions that bridge the gap between
            innovation and functionality.
          </p>
          <a
            href="#contact"
            className="bg-quincy inline-block px-6 py-3 text-white rounded-lg shadow-lg transition-all"
          >
            Get in Touch
          </a>
        </div>

        <div className="bg-santafe flex flex-wrap justify-center gap-4 mt-8">
          <div className="text-gray-800 p-4 rounded-lg shadow-lg w-48 text-center">
            <h3 className="text-2xl font-semibold text-blue-600">5+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="text-gray-800 p-4 rounded-lg shadow-lg w-48 text-center">
            <h3 className="text-2xl font-semibold text-blue-600">20+</h3>
            <p>Completed Projects</p>
          </div>
          <div className="text-gray-800 p-4 rounded-lg shadow-lg w-48 text-center">
            <h3 className="text-2xl font-semibold text-blue-600">Key Skills</h3>
            <p>React, .NET, Testing</p>
          </div>
        </div>
      </div>

      {/* Right Section: Tabs */}
      <div className="flex-1 w-full max-w-xl">
        {/* Tabs Navigation */}
        <div className="flex justify-center md:justify-start space-x-4 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-costa text-white"
                  : "bg-quincy hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-santafe rounded-lg shadow-lg p-6">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
