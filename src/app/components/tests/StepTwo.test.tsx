import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useFormStore } from "@/store/useFormStore";
import StepTwo from "@/app/features/StepTwo";

// Mock the Zustand store so that we can control its state in tests.
jest.mock("@/store/useFormStore", () => ({
  useFormStore: jest.fn(),
}));

describe("Step Two Component", () => {
  // Default setup before each test: initialize with an empty phone number.
  beforeEach(() => {
    // Cast useFormStore as unknown then as jest.Mock to access mockReturnValue.
    (useFormStore as unknown as jest.Mock).mockReturnValue({
      // The form starts with an empty phone number by default.
      formData: { countryCode: "+44", phoneNumber: "" },
      setFormData: jest.fn(),
      nextStep: jest.fn(),
    });
  });

  it("renders step two correctly", () => {
    // Render the StepTwo component with all required props.
    render(
      <StepTwo
        isModalOpen={false}
        setIsModalOpen={() => {}}
        isTermsOpen={false}
        setIsTermsOpen={() => {}}
        isPrivacyOpen={false}
        setIsPrivacyOpen={() => {}}
      />
    );

    // Verify that the title and phone number input are rendered.
    expect(screen.getByText("Let’s validate your number")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("07890 123456")).toBeInTheDocument();
  });

  it("shows validation error if phone number is invalid", async () => {
    // Override the store's state to simulate an invalid phone number.
    // The value "invalid" (which contains non-digits) will fail the regex check.
    (useFormStore as unknown as jest.Mock).mockReturnValue({
      formData: { countryCode: "+44", phoneNumber: "invalid" },
      setFormData: jest.fn(),
      nextStep: jest.fn(),
    });

    // Render the component with all required props.
    render(
      <StepTwo
        isModalOpen={false}
        setIsModalOpen={() => {}}
        isTermsOpen={false}
        setIsTermsOpen={() => {}}
        isPrivacyOpen={false}
        setIsPrivacyOpen={() => {}}
      />
    );

    // Click the "Continue" button to trigger form submission and validation.
    fireEvent.click(screen.getByText("Continue"));

    // Wait for the error message element to appear by querying its test id.
    const errorEl = await screen.findByTestId("phoneNumber-error");

    // Check that the error message contains the expected text.
    expect(errorEl).toHaveTextContent(/check the phone number format/i);
  });

  it("allows valid phone number and proceeds to next step", () => {
    // Create a mock function to track if nextStep() is called.
    const mockNextStep = jest.fn();

    // Set the store's state with a valid phone number.
    (useFormStore as unknown as jest.Mock).mockReturnValue({
      formData: { countryCode: "+44", phoneNumber: "07890123456" },
      setFormData: jest.fn(),
      nextStep: mockNextStep,
    });

    // Render the component with all required props.
    render(
      <StepTwo
        isModalOpen={false}
        setIsModalOpen={() => {}}
        isTermsOpen={false}
        setIsTermsOpen={() => {}}
        isPrivacyOpen={false}
        setIsPrivacyOpen={() => {}}
      />
    );

    // Click the "Continue" button to submit the form.
    fireEvent.click(screen.getByText("Continue"));

    // Verify that nextStep() was called, indicating the form passed validation.
    expect(mockNextStep).toHaveBeenCalled();
  });
});
