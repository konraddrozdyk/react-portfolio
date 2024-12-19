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
    <section id="about" className="flex flex-col">
      <div className="flex justify-center items-center p-8 w-7/10 h-screen flex-col">
        <img
          src="images/face.JPG"
          alt="Your Name"
          className="rounded-full w-28 h-28 object-cover border-4 mb-6"
        />
        <h2 className="mb-4">About Me</h2>
        <p className="text-center mb-6">
          Hi, I'm <span>[Your Name]</span>, a passionate Full-Stack Developer
          with a knack for building robust applications and crafting efficient
          test automation strategies. With <span>X years of experience</span>, I
          specialize in .NET, Test & Automation, and .NET. My mission is to
          deliver high-quality solutions that bridge the gap between innovation
          and functionality.
        </p>
        <div className="flex justify-between w-full max-w-lg gap-6">
          <div className="text-center flex-1 p-4 rounded-lg shadow-lg">
            <h3>3+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="text-center flex-1 p-4 rounded-lg shadow-lg">
            <h3>10+</h3>
            <p>Completed Projects</p>
          </div>
          <div className="text-center flex-1 p-4 rounded-lg shadow-lg">
            <h3>Key Skills</h3>
            <p>Test & Automation, .NET</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-8 w-7/10 h-screen">
        <div className="flex flex-col items-center w-full">
          <div className="flex space-x-4 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeTab === tab.id ? "border-2" : "border-2"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="rounded-lg shadow-lg p-6 w-full max-w-xl">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
