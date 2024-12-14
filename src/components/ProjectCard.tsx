// src/components/ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src="https://via.placeholder.com/300"
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
