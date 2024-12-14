import React from "react";
import technologies from "../data/technologies";

const Technologies: React.FC = () => {
  const { testingTools, developmentTechnologies } = technologies;

  return (
    <section
      id="technologies"
      className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md flex flex-col items-center"
    >
      <h2 className="text-3xl font-semibold text-center mb-6">Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Testing Tools
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {testingTools.map((tool, index) => (
              <li key={index} className="text-gray-700">
                {tool}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Development Technologies
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {developmentTechnologies.map((tech, index) => (
              <li key={index} className="text-gray-700">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
