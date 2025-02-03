import React from "react";

// Props for the Button component.
interface ButtonProps {
  text: string;                 // Text to display inside the button.
  onClick?: () => void;         // Optional click handler.
  type?: "button" | "submit";   // Button type attribute (default is "button").
  className?: string;           // Additional custom CSS classes.
}

/**
 * Button Component
 * ----------------
 * A reusable button that applies standard styling via Tailwind CSS classes.
 * It accepts text, an optional onClick handler, and additional CSS classes.
 */
const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full h-[56px] bg-[#0D71C9] mt-8 text-white font-body font-bold text-base rounded-full flex items-center justify-center transition duration-300 hover:bg-[#0A5A9C] active:bg-[#094B88] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
