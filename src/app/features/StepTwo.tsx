import React, { useState } from "react";
import { useFormStore } from "@/store/useFormStore";
import Input from "../components/Input";
import Button from "../components/Button";
import CountryCodeModal from "../components/CountryCodeModal";
import Modal from "../components/Modal";
import { termsAndConditions, privacyPolicy } from "../utils/legalTexts";
import { validatePhoneNumber } from "../utils/validation";

interface StepTwoProps {
  // Props for handling the country code modal.
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  // Props for handling modals (Terms & Conditions and Privacy Policy).
  isTermsOpen: boolean;
  setIsTermsOpen: (open: boolean) => void;
  isPrivacyOpen: boolean;
  setIsPrivacyOpen: (open: boolean) => void;
}

/**
 * StepTwo Component
 * -----------------
 * This component renders the second step of the form, where the user validates
 * their phone number. It also manages the display of additional modals for selecting
 * the country code and for displaying legal texts.
 */
const StepTwo: React.FC<StepTwoProps> = ({
  isModalOpen,
  setIsModalOpen,
  isTermsOpen,
  setIsTermsOpen,
  isPrivacyOpen,
  setIsPrivacyOpen,
}) => {
  const { formData, setFormData, nextStep } = useFormStore();
  const [errors, setErrors] = useState<{ phoneNumber?: string }>({});

  // Handle phone number form submission.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validatePhoneNumber(formData.phoneNumber);
    setErrors(newErrors);
    // Proceed to the next step if validation passes.
    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="font-heading text-left text-xl font-bold px-2 text-black">
        Let’s validate your number
      </h1>

      {/* Phone number form */}
      <form onSubmit={handleSubmit} className="mt-4 w-full">
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone number
          </label>
          <div className="flex flex-col w-full">
            <div>
              <div className="flex items-center space-x-2 w-full">
                {/* Country Code Selector Button */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className={`w-[100px] h-[56px] px-4 bg-gray-50 text-[#021626] font-medium rounded-full border-[2px] flex items-center justify-between shrink-0 mt-4
                    ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}`}
                  aria-label="Select country code"
                  aria-expanded={isModalOpen}
                  aria-controls="country-code-modal"
                >
                  {formData.countryCode} <span>▼</span>
                </button>

                {/* Phone Number Input */}
                <div className="w-full">
                  <Input
                    label=""
                    name="phoneNumber"
                    placeholder="07890 123456"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ phoneNumber: e.target.value })}
                    error={errors.phoneNumber}
                    hideErrorMessage={true}
                    className={`h-[56px] px-4 rounded-full w-full bg-gray-50 text-[#021626] font-medium
                      ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}`}
                    aria-label="Phone number input"
                    aria-invalid={!!errors.phoneNumber}
                    aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
                  />
                </div>
              </div>

              {/* Display consolidated error message for phone number */}
              {errors.phoneNumber && (
                <div data-testid="phoneNumber-error" className="flex items-center text-red-500 text-xs mt-1 ml-2">
                  <img
                    src="/images/WarningIcon.svg"
                    alt="Warning"
                    role="alert"
                    className="w-4 h-4 mr-1"
                  />
                  {errors.phoneNumber}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Terms and Privacy Links */}
        <p className="text-sm text-gray-600 mt-2">
          By clicking ‘Continue’ you confirm that you agree to our{" "}
          <span
            className="text-[#0D71C9] font-semibold cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setIsTermsOpen(true);
            }}
          >
            terms and conditions
          </span>{" "}
          and{" "}
          <span
            className="text-[#0D71C9] font-semibold cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setIsPrivacyOpen(true);
            }}
          >
            privacy policy
          </span>.
        </p>

        {/* Continue Button */}
        <Button type="submit" text="Continue" className="mt-4" />
      </form>

      {/* Modals for selecting country code, terms, and privacy policy */}
      <CountryCodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={(code) => setFormData({ countryCode: code })}
      />

      <Modal title="Terms & Conditions" isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)}>
        <div className="overflow-y-auto pr-2">
          {termsAndConditions.map((paragraph, index) => (
            <p key={index} className="text-sm font-body text-gray-800 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </Modal>

      <Modal title="Privacy Policy" isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)}>
        <div className="overflow-y-auto pr-2">
          {privacyPolicy.map((paragraph, index) => (
            <p key={index} className="text-sm font-body text-gray-800 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default StepTwo;
