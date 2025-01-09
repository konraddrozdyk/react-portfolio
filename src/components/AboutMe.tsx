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
    <section id="about" className="flex flex-col">
      <div className="flex justify-center items-center p-8 w-7/10 h-screen flex-col">
        <img
          src="images/face.JPG"
          alt="Your Name"
          className="rounded-full w-28 h-28 object-cover border-4 mb-6"
        />
        <h2 className="mb-4 text-4xl text-quincy">About Me</h2>
        <p className="text-center mb-6">
          I am a passionate and detail-oriented software developer with a strong
          foundation in software testing and test automation. With experience in
          both backend and frontend development, I excel at building
          high-quality, reliable solutions. My technical skills include C#,
          JavaScript, TypeScript, and frameworks like ReactJS and .NET, combined
          with expertise in tools such as Selenium, Playwright, and Docker.
          Having worked on diverse projects in agile environments, I bring a
          unique perspective to problem-solving and thrive on continuous
          learning to refine my craft. Whether it's leading teams, collaborating
          with stakeholders, or implementing CI/CD pipelines, I am committed to
          delivering efficient and innovative results. When I’m not coding, I
          enjoy tackling new challenges and exploring ways to enhance my skills.
          Let's build something amazing together!
        </p>
        <div className="flex justify-between w-full max-w-lg gap-6">
          <div className="text-center flex-1 p-4 rounded-lg shadow-lg bg-warmyellow">
            <h3>3+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="text-center flex-1 p-4 rounded-lg shadow-lg bg-seablue">
            <h3>Quality</h3>
            <p>Test & Test automation</p>
          </div>
          <div className="text-center flex-1 p-4 rounded-lg shadow-lg bg-santafe">
            <h3>Development</h3>
            <p>.NET, Java and TypeScript</p>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center items-center p-8 w-7/10 h-screen">
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
      </div> */}
    </section>
  );
};

export default AboutMe;
