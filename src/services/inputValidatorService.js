export function validateEmail(email) {
  //check if Email is not empty
  if (!email) {
    return {
      isValid: false,
      message: "Please enter your Email Adrdress",
    };
  } else {
    //Check if Email is in the correct format
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(String(email).toLowerCase())) {
      return {
        isValid: false,
        message: "Please enter a valid Email Address",
      };
    } else {
      return {
        isValid: true,
        message: "",
      };
    }
  }
}

export function validatePassword(password) {
  // Check if password is not empty
  if (!password) {
    return {
      isValid: false,
      message: "Please enter your Password",
    };
  } else {
    // Check if password is in the correct format
    // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!re.test(String(password))) {
      return {
        isValid: false,
        message:
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      };
    } else {
      return {
        isValid: true,
        message: "",
      };
    }
  }
}
