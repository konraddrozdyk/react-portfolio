import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  year: string;
  detailedDescription: string;
  link: string;
  imageUrl?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  year,
  detailedDescription,
  link,
  imageUrl,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <button onClick={onClose} className="btn btn-blue">
          Back to Projects
        </button>
        <div className="flex items-center mb-6">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-32 h-32 object-cover rounded-lg mr-4"
            />
          )}
          <div>
            <h2 className="text-3xl font-semibold text-blue-600">{title}</h2>
            <p className="text-lg text-gray-500">{year}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <h3 className="font-semibold text-lg">Project Details</h3>
        <p className="text-gray-800 mb-4">{detailedDescription}</p>
      </div>
    </div>
  );
};

export default Modal;
