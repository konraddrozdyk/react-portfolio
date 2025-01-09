// import { useState } from "react";

const AboutMe: React.FC = () => {
  // const [activeTab, setActiveTab] = useState("journey");

  // const tabs = [
  //   {
  //     id: "journey",
  //     label: "Professional Journey",
  //     content:
  //       "I started my career in software testing, building expertise in automation, performance, and security testing. Over the years, I've transitioned into full-stack development, focusing on creating seamless user experiences and robust backend systems.",
  //   },
  //   {
  //     id: "skills",
  //     label: "Technical Skills",
  //     content:
  //       "Proficient in .NET, React, Tailwind CSS, Selenium, and REST API development. Adept at integrating test automation strategies into CI/CD pipelines to enhance software quality and delivery speed.",
  //   },
  //   {
  //     id: "hobbies",
  //     label: "Hobbies & Interests",
  //     content:
  //       "When I'm not coding, I enjoy exploring nature through hiking, capturing moments through photography, and diving into sci-fi novels. I also have a passion for learning new technologies and participating in hackathons.",
  //   },
  // ];

  return (
    <section
      id="about"
      className="flex flex-col items-center py-16 px-4 bg-gray-50"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
        <div className="flex justify-center items-center w-28 h-28 mb-6">
          <img
            src="images/face.JPG"
            alt="Your Name"
            className="rounded-full w-28 h-28 object-cover border-4 mb-6"
          />
        </div>
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl font-semibold text-quincy mb-4">About Me</h2>
          <p className="text-lg text-gray-700 mb-6">
            I am a passionate and detail-oriented software developer with a
            strong foundation in software testing and test automation. I excel
            at building high-quality, reliable solutions with expertise in tools
            such as Selenium, Playwright, Docker, and frameworks like ReactJS
            and .NET. Let's build something amazing together!
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-8 mt-8 flex-wrap">
        <div className="flex-1 p-6 rounded-lg shadow-lg bg-warmyellow transform transition-all hover:scale-105 hover:bg-yellow-400">
          <h3 className="text-3xl font-bold">3+</h3>
          <p className="text-xl">Years of Experience</p>
        </div>
        <div className="flex-1 p-6 rounded-lg shadow-lg bg-seablue transform transition-all hover:scale-105 hover:bg-blue-400">
          <h3 className="text-3xl font-bold">Quality</h3>
          <p className="text-xl">Test & Test Automation</p>
        </div>
        <div className="flex-1 p-6 rounded-lg shadow-lg bg-santafe transform transition-all hover:scale-105 hover:bg-red-400">
          <h3 className="text-3xl font-bold">Development</h3>
          <p className="text-xl">.NET, Java, TypeScript</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
