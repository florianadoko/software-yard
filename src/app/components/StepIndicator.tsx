import React from "react";
import { useFormStore } from "@/store/useFormStore";

/**
 * StepIndicator Component
 * -------------------------
 * This component displays a visual indicator of the current step in the form.
 * It uses the `step` value from the form store to determine which step is active.
 */
const StepIndicator = () => {
  const { step } = useFormStore();

  return (
    <div className="flex justify-center items-center gap-2 my-4">
      {/* Step 1 Indicator */}
      <div
        className={`w-[32px] h-[32px] flex items-center justify-center rounded-full ${
          step === 1 ? "bg-[#0D71C9] text-white" : "bg-gray-200 text-gray-500"
        } font-semibold text-sm`}
      >
        1
      </div>
      {/* Divider */}
      <div className="w-[4px] h-[4px] bg-gray-400 rounded-full"></div>
      {/* Step 2 Indicator */}
      <div
        className={`w-[32px] h-[32px] flex items-center justify-center rounded-full ${
          step === 2 ? "bg-[#0D71C9] text-white" : "bg-gray-200 text-gray-500"
        } font-semibold text-sm`}
      >
        2
      </div>
    </div>
  );
};

export default StepIndicator;
