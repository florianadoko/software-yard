import React from "react";

// Props for the Input component.
interface InputProps {
  label: string;  // Label text displayed above the input.
  name: string;   // Name and id for the input.
  placeholder: string;  // Placeholder text.
  value: string;  // Current value of the input.
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler.
  error?: string; // Optional error message.
  type?: string;  // Input type (default is "text").
  className?: string; // Additional custom CSS classes.
  hideErrorMessage?: boolean; // Flag to hide the error message.
}

/**
 * Input Component
 * ---------------
 * A reusable input component that includes a label, an input field,
 * and optionally displays an error message below the input.
 * Styling is provided by Tailwind CSS classes.
 */
const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  hideErrorMessage = false,
  className,
}) => {
  return (
    <div className="mt-4">
      {/* Input Label */}
      <label htmlFor={name} className="block font-body text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {/* Input Field */}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`font-body w-full h-[56px] px-4 py-2 bg-gray-50 rounded-full text-[#021626] placeholder:text-[#021626]/50 border-[2px] focus:outline-none focus:ring-[#0D71C9] focus:border-[#0D71C9] ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
      />
      {/* Conditionally render the error message */}
      {!hideErrorMessage && error && (
        <p className="text-red-500 text-xs mt-1 flex items-center">
          <img
            src="/images/WarningIcon.svg"
            className="w-4 h-4 mr-1"
            alt="Warning"
          />
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
