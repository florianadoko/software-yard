import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useFormStore } from "@/store/useFormStore";
import StepOne from "@/app/features/StepOne";

// Mock the Zustand store for StepOne tests.
jest.mock("@/store/useFormStore", () => ({
  useFormStore: jest.fn(),
}));

describe("Step One Component", () => {
  // Default setup before each test: initialize with empty first and last names.
  beforeEach(() => {
    (useFormStore as unknown as jest.Mock).mockReturnValue({
      formData: { firstName: "", lastName: "" },
      setFormData: jest.fn(),
      nextStep: jest.fn(),
    });
  });

  it("renders step one form correctly", () => {
    // Render the StepOne component.
    render(<StepOne />);
    
    // Verify that both first name and last name inputs are rendered.
    expect(screen.getByPlaceholderText("Your first name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your last name")).toBeInTheDocument();
  });

  it("shows validation error if fields are empty", async () => {
    // Render the component.
    render(<StepOne />);
    
    // Click the "Continue" button to submit the form.
    fireEvent.click(screen.getByText("Continue"));
    
    // Wait for the validation errors to appear.
    await waitFor(() => {
      expect(screen.getByText("First name is required")).toBeInTheDocument();
      expect(screen.getByText("Last name is required")).toBeInTheDocument();
    });
  });

  it("allows valid input and proceeds to next step", () => {
    // Create a mock function to track if nextStep() is called.
    const mockNextStep = jest.fn();
    
    // Set the store's state with valid first and last names.
    (useFormStore as unknown as jest.Mock).mockReturnValue({
      formData: { firstName: "John", lastName: "Doe" },
      setFormData: jest.fn(),
      nextStep: mockNextStep,
    });

    // Render the StepOne component.
    render(<StepOne />);
    
    // Click the "Continue" button to submit the form.
    fireEvent.click(screen.getByText("Continue"));
    
    // Verify that nextStep() was called, indicating successful validation.
    expect(mockNextStep).toHaveBeenCalled();
  });
});
