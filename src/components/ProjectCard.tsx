// src/components/ProjectCard.tsx
import React, { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  year: string;
  imageUrl?: string;
  detailedDescription?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  year,
  imageUrl,
  detailedDescription,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 mb-6 cursor-pointer"
      onClick={toggleExpand}
    >
      <div className="flex items-center space-x-4">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-16 h-16 object-cover rounded-lg"
          />
        )}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-blue-600">{title}</h3>
          <p className="text-sm text-gray-500">{year}</p>
        </div>
      </div>
      <p className="text-gray-700 mt-2">{description}</p>

      {isExpanded && (
        <div className="mt-4 text-sm text-gray-800 transition-all duration-300 ease-in-out">
          <h4 className="font-semibold mb-2">Project Details</h4>
          <p>{detailedDescription}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block hover:underline"
            >
              View Project
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
