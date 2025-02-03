import React, { useState } from "react";
import { useFormStore } from "@/store/useFormStore";
import StepOne from "../features/StepOne";
import StepTwo from "../features/StepTwo";
import SuccessScreen from "../features/SuccessScreen";
import Layout from "../components/Layout";

/**
 * MultiStepForm Component
 * -------------------------
 * This is the main component that manages the multi-step form.
 * It renders different steps (StepOne, StepTwo, and SuccessScreen) based on the `step` value
 * from the form store. It also manages the state for various modals used in StepTwo.
 */
const MultiStepForm = () => {
  const { step, restartForm } = useFormStore();
  // State for the country code modal.
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  // State for the legal modals (terms and privacy).
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Combine modal states to determine if any modal is open.
  const isAnyModalOpen = isCountryModalOpen || isTermsOpen || isPrivacyOpen;

  return (
    // Layout component that receives modal state and a flag to hide header on step 3.
    <Layout isModalOpen={isAnyModalOpen} hideHeader={step === 3}>
      <div className="relative w-full h-full overflow-hidden">
        {/* Step One */}
        <div
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
            step === 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          {step === 1 && <StepOne />}
        </div>

        {/* Step Two */}
        <div
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
            step === 2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          {step === 2 && (
            <StepTwo
              // Pass modal state and handlers as props to StepTwo.
              isModalOpen={isCountryModalOpen}
              setIsModalOpen={setIsCountryModalOpen}
              isTermsOpen={isTermsOpen}
              setIsTermsOpen={setIsTermsOpen}
              isPrivacyOpen={isPrivacyOpen}
              setIsPrivacyOpen={setIsPrivacyOpen}
            />
          )}
        </div>

        {/* Success Screen */}
        <div
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
            step === 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          {step === 3 && <SuccessScreen onRestart={restartForm} />}
        </div>
      </div>
    </Layout>
  );
};

export default MultiStepForm;
