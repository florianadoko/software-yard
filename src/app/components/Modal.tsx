import React, { FC, ReactNode, useEffect, useRef } from "react";

// Props for the Modal component.
interface ModalProps {
  title: string;        // Title text for the modal.
  children: ReactNode;  // Content to be displayed inside the modal.
  isOpen: boolean;      // Flag to control modal visibility.
  onClose: () => void;  // Callback to close the modal.
}

/**
 * Modal Component
 * ---------------
 * A generic modal component that displays a title and children content.
 * It supports closing via an ESC key press or clicking outside the modal.
 */
const Modal: FC<ModalProps> = ({ title, children, isOpen, onClose }) => {
  // Reference to the modal content container.
  const modalRef = useRef<HTMLDivElement>(null);

  // Attach an event listener to close the modal when the Escape key is pressed.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Close modal if a click occurs outside the modal content.
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  // If the modal is not open, render nothing.
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-white backdrop-blur-md flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div ref={modalRef} className="bg-white w-full h-full p-6 rounded-lg relative flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-xl focus:outline-none"
          aria-label="Close Modal"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h1 className="text-2xl font-heading font-bold text-black mb-4">{title}</h1>

        {/* Modal Content */}
        <div className="overflow-y-auto flex-1 pr-2 mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
