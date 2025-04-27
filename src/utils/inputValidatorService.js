import { VALIDATION_MESSAGES } from "../constants/validationMessages";

// Function to validate the email
export function validateEmail(email) {
  // Check if the email is empty or not
  if (!email) {
    return {
      isValid: false,
      ...VALIDATION_MESSAGES.EMAIL.EMPTY,
    };
  } else {
    // Regular expression to validate the email format
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(String(email).toLowerCase())) {
      return {
        isValid: false,
        ...VALIDATION_MESSAGES.EMAIL.INVALID_FORMAT,
      };
    } else {
      return {
        isValid: true,
        ...VALIDATION_MESSAGES.EMAIL.VALID,
      };
    }
  }
}

// Function to validate the password
export function validatePassword(password) {
  // Check if the password is empty or not
  if (!password) {
    return {
      isValid: false,
      ...VALIDATION_MESSAGES.PASSWORD.EMPTY,
    };
  } else {
    // Regular expression to validate the password format
    // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!re.test(String(password))) {
      return {
        isValid: false,
        ...VALIDATION_MESSAGES.PASSWORD.INVALID_FORMAT,
      };
    } else {
      return {
        isValid: true,
        ...VALIDATION_MESSAGES.PASSWORD.VALID,
      };
    }
  }
}
