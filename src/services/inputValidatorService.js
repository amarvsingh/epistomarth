export function validateEmail(email) {
    //check if Email is not empty
    if (!email) {
       return {
            isValid: false,
            message: "Please enter your Email Adrdress",
        };
       }
    else {
        //Check if Email is in the correct format
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
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
    // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return re.test(String(password))
}
