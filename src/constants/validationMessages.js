// This file contains the validation messages for different fields in the application.
export const VALIDATION_MESSAGES = {
  EMAIL: {
    EMPTY: {
      SUBJECT: "Invalid Email",
      MESSAGE: "Please enter your Email Address",
    },
    INVALID_FORMAT: {
      SUBJECT: "Invalid Email",
      MESSAGE: "Please enter a valid Email Address",
    },
    VALID: {
      SUBJECT: "Valid Email",
      MESSAGE: "",
    },
  },
  PASSWORD: {
    EMPTY: {
      SUBJECT: "Invalid Password",
      MESSAGE: "Please enter your Password",
    },
    INVALID_FORMAT: {
      SUBJECT: "Invalid Password",
      MESSAGE:
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    },
    VALID: {
      SUBJECT: "Valid Password",
      MESSAGE: "",
    },
  },
};
