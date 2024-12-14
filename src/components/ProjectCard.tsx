import React, { useState } from "react";
import Modal from "./Modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 mb-6 cursor-pointer"
      onClick={openModal}
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
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        description={description}
        year={year}
        detailedDescription={
          detailedDescription || "No detailed description available."
        }
        link={link}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default ProjectCard;
