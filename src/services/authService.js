import axios from "axios";
import RequestTypes from "../constants/requestTypes";

// Implement the login function
export async function loginWithEmailandPassword(email, password) {
  var loginSuccess = false;
  try {
    const response = await axios.post("http://localhost:8080/api/login", {
      type: RequestTypes.LOGIN,
      data: {
        email: email,
        password: password,
      },
    });
    console.log("Login successful", response.data);
    console.log("Response from Server", response.data);
    return { ...response.data, loginStatus: true };
    // Return the response data for further use
  } catch (error) {
    //TODO: Handle UI state for login failure -- done (code does not throw error or break the app)
    console.error("Login failed:", error.response?.data || error.message);
    return { ...error, loginStatus: false };
    // throw new Error(error.response?.data?.message || "Login failed");
  }
}
