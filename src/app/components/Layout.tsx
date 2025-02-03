import React from "react";
import StepIndicator from "./StepIndicator";
import { useFormStore } from "@/store/useFormStore";

interface LayoutProps {
  children: React.ReactNode;
  // Flag indicating whether any modal is open.
  isModalOpen?: boolean;
  // Flag to optionally hide the header (for example on the success screen).
  hideHeader?: boolean;
}

/**
 * Layout Component
 * ----------------
 * This component provides a common layout for the form.
 * It includes a header (logo, back button, and step indicator) that is hidden when:
 *   - A modal is open (isModalOpen = true)
 *   - The `hideHeader` flag is true (e.g., on the success screen).
 */
const Layout: React.FC<LayoutProps> = ({ children, isModalOpen = false, hideHeader = false }) => {
  const { step, prevStep } = useFormStore();

  return (
    <div className="w-[393px] h-[852px] mx-auto px-4 sm:px-8 relative">
      {/* Render header only if hideHeader is false and no modal is open */}
      {!hideHeader && !isModalOpen && (
        <>
          {/* Back Button: Visible only on steps greater than 1 */}
          {step > 1 && (
            <button
              onClick={prevStep}
              className="absolute top-[50px] left-4 p-2"
              aria-label="Go back"
            >
              <img src="/images/BackIcon.svg" alt="BackIcon" />
            </button>
          )}
          {/* Logo Section */}
          <div className="p-4 flex justify-center items-center mt-[59px] mb-2">
            <img src="/images/Logo25.svg" alt="Logo" className="w-[56px] h-[56px]" />
          </div>
          {/* Step Indicator */}
          <StepIndicator />
        </>
      )}

      {/* Render the children components (the current step of the form) */}
      {children}
    </div>
  );
};

export default Layout;
