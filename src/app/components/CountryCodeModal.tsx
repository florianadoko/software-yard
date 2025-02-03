import React, { useState } from "react";
import { countries } from "../utils/countryData";

// Props for the CountryCodeModal component.
interface CountryCodeModalProps {
  isOpen: boolean;                      // Flag to control modal visibility.
  onClose: () => void;                  // Callback to close the modal.
  onSelect: (countryCode: string) => void; // Callback with the selected country's code.
}

/**
 * CountryCodeModal Component
 * --------------------------
 * Displays a full-screen modal that allows the user to search and select a country code.
 * When a country is selected, it calls the onSelect callback and then closes itself.
 */
const CountryCodeModal: React.FC<CountryCodeModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  // Local state for managing the search query.
  const [searchQuery, setSearchQuery] = useState("");

  // If the modal is not open, render nothing.
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-[1000] flex flex-col w-full h-full overflow-hidden">
      {/* Modal Header with a search input */}
      <div className="relative w-full px-4 mt-4">
        <div className="relative flex items-center border border-gray-300 rounded-full shadow-sm">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-full outline-none text-gray-700"
          />
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 2a6 6 0 00-4.9 9.8l-2.7 2.7a1 1 0 001.4 1.4l2.7-2.7A6 6 0 108 2zm0 2a4 4 0 110 8 4 4 0 010-8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Country List */}
      <div className="flex-1 overflow-y-auto">
        {countries
          .filter((country) =>
            country.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((country) => (
            <div
              key={country.code}
              className="flex items-center px-4 py-3 hover:bg-blue-100 rounded-lg cursor-pointer transition duration-200"
              onClick={() => {
                onSelect(country.code); // Send selected country code.
                onClose();              // Close the modal.
              }}
            >
              <span className="text-lg">{country.flag}</span>
              <span className="ml-3 text-gray-800">{country.code}</span>
              <span className="ml-auto text-gray-600">{country.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CountryCodeModal;
