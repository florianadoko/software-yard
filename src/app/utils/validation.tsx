/**
 * validatePhoneNumber Function
 * ----------------------------
 * Validates the phone number based on two criteria:
 * 1. The phone number must not be empty.
 * 2. The phone number must consist of 7 to 15 digits.
 * Returns an object with an error message if validation fails.
 */
export const validatePhoneNumber = (phoneNumber: string) => {
  let errors: { phoneNumber?: string } = {};

  // Check if the phone number is empty after trimming whitespace.
  if (!phoneNumber.trim()) {
    errors.phoneNumber = "Please enter your phone number";
  }
  // Check if the phone number matches the required digit pattern.
  else if (!/^\d{7,15}$/.test(phoneNumber)) {
    errors.phoneNumber = "Please check the phone number format";
  }

  return errors;
};

/**
 * validateStepOne Function
 * ------------------------
 * Validates the first name and last name inputs for Step One.
 * - First name must not be empty.
 * - Last name must not be empty and should only contain letters and spaces.
 * Returns an object with error messages for invalid fields.
 */
export const validateStepOne = (firstName: string, lastName: string) => {
  let errors: { firstName?: string; lastName?: string } = {};

  // Validate the first name field.
  if (!firstName.trim()) {
    errors.firstName = "First name is required";
  }

  // Validate the last name field.
  if (!lastName.trim()) {
    errors.lastName = "Last name is required";
  } else if (!/^[A-Za-z\s]+$/.test(lastName)) {
    errors.lastName = "We only accept letters and spaces for names, no special characters";
  }

  return errors;
};
