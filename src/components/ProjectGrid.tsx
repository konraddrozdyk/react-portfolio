import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  link: string;
  year: string;
  imageUrl?: string;
  detailedDescription?: string;
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-transparent"
      id="projects"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          year={project.year}
          imageUrl={project.imageUrl}
          detailedDescription={project.detailedDescription}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
