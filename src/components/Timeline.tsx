interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2018-2020",
    title: "Vocational Education in Software Testing",
    description:
      "Completed a two-year vocational education focused on test automation, test strategy, and project models.",
  },
  {
    year: "2021-2022",
    title: "Technical Tester",
    description:
      "Worked as a Technical Tester, focusing on creating automated test scripts and implementing test automation frameworks.",
  },
  {
    year: "2023-Present",
    title: "Full-Stack Developer Bootcamp",
    description:
      "Currently participating in a bootcamp to sharpen full-stack development skills with a focus on React, TypeScript, and Node.js.",
  },
  {
    year: "Future",
    title: "Software Developer",
    description:
      "Looking forward to starting a career as a software developer, building web applications and contributing to open-source projects.",
  },
  {
    year: "Future",
    title: "Software Developer",
    description:
      "Looking forward to starting a career as a software developer, building web applications and contributing to open-source projects.",
  },
  {
    year: "Future",
    title: "Software Developer",
    description:
      "Looking forward to starting a career as a software developer, building web applications and contributing to open-source projects.",
  },
  {
    year: "Future",
    title: "Software Developer",
    description:
      "Looking forward to starting a career as a software developer, building web applications and contributing to open-source projects.",
  },
  {
    year: "Future",
    title: "Software Developer",
    description:
      "Looking forward to starting a career as a software developer, building web applications and contributing to open-source projects.",
  },
  {
    year: "Future",
    title: "Software Developer",
    description:
      "Looking forward to starting a career as a software developer, building web applications and contributing to open-source projects.",
  },
  {
    year: "Future",
    title: "Software Developer",
    description:
      "Looking forward to starting a career as a software developer, building web applications and contributing to open-source projects.",
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-200" id="timeline">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Career Timeline
        </h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-8">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
              >
                <h3 className="text-xl font-semibold mb-2">{item.year}</h3>
                <h4 className="text-lg font-medium text-blue-500">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-700 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
