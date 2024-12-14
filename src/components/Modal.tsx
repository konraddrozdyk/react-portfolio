// src/components/Modal.tsx
import React, { useEffect, useRef } from "react";

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
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCloseButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full relative"
      >
        <button
          onClick={handleCloseButtonClick}
          className="absolute top-4 right-4 text-xl font-bold text-gray-500"
        >
          ×
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
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default Modal;
