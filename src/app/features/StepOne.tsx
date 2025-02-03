import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useFormStore } from "@/store/useFormStore";
import { useState } from "react";
import { validateStepOne } from "../utils/validation";

/**
 * StepOne Component
 * -----------------
 * This component renders the first step of the multi-step form.
 * It collects the user's first name and last name.
 * On submission, it validates the inputs using the `validateStepOne` function.
 * If the inputs are valid, it calls `nextStep` from the form store.
 */
const StepOne = () => {
  // Get form data and functions from the Zustand store.
  const { formData, setFormData, nextStep } = useFormStore();
  // Local state for storing validation errors.
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string }>({});

  // Handle form submission.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Validate the first name and last name fields.
    const validationErrors = validateStepOne(formData.firstName, formData.lastName);
    setErrors(validationErrors);

    // If there are no validation errors, move to the next step.
    if (Object.keys(validationErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <div className="flex flex-col justify-center">
      {/* Page title */}
      <h1 className="font-heading text-left text-xl font-bold text-black">Some introductions</h1>
     
      {/* Form for first and last name */}
      <form onSubmit={handleSubmit} className="mt-4 w-full">
        <Input
          label="First name"
          name="firstName"
          placeholder="Your first name"
          value={formData.firstName}
          onChange={(e) => setFormData({ firstName: e.target.value })}
          error={errors.firstName}
          aria-label="First name input"
          aria-invalid={!!errors.firstName}
          aria-describedby={errors.firstName ? "firstName-error" : undefined}
        />

        <Input
          label="Last name"
          name="lastName"
          placeholder="Your last name"
          value={formData.lastName}
          onChange={(e) => setFormData({ lastName: e.target.value })}
          error={errors.lastName}
          aria-label="Last name input"
          aria-invalid={!!errors.lastName}
          aria-describedby={errors.lastName ? "lastName-error" : undefined}
        />

        {/* Continue button */}
        <Button type="submit" text="Continue" />
      </form>

      {/* Additional links and version info */}
      <p className="text-[#0D71C9] text-sm font-bold mt-4 text-center">
        <a href="#" className="hover:underline">Already have an account?</a>
      </p>

      <p className="text-[#021626] text-xs opacity-50 text-center mt-8">
        Version 0.1
      </p>
    </div>
  );
};

export default StepOne;
