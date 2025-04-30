import axios from "axios";
import RequestTypes from "../constants/requestTypes";

// Implement the login function
export async function loginWithEmailandPassword(email, password) {
  try {
    const response = await axios.post("http://localhost:8080/api/request", {
      type: RequestTypes.LOGIN,
      data: {
        email: email,
        password: password,
      },
    });
    console.log("Login successful", response.data);
    console.log("Response from Server", response.data);
    return response.data;
    // Return the response data for further use
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Login failed"); // Throw a meaningful error
  }
}
