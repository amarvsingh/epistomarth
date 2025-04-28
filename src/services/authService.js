import axios from "axios";

//TODO: Implement the login function
export async function loginWithEmailandPassword(email, password) {
  try {
    const response = axios.post("http://localhost:8080/login", {
      email: email,
      password: password,
    });
    console.log("Login successful", response.data);
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    setMessage(
      "Login failed: " + (error.response?.data?.error || "Unknown error")
    );
  }
}
