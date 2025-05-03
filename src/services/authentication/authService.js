import axios from "axios";
import RequestTypes from "../../constants/requestTypes";
import {
  checkTokenId,
  refreshToken,
  storeRefreshToken,
  storeToken,
  verifyToken,
} from "../authentication/tokenService";
import api_properties from "../../constants/api_properties";

export async function checkAuthentication() {
  // First check if the user tokenId is present in local storage

  console.log("Checking local storage for tokenID");
  if (!checkTokenId()) {
    // If tokenID is not present, return false
    return false;
  }

  // If tokenID is present, make an API call to verify the tokenId.

  //If the tokenId is expired or invalid, the API will return an error - Then we will refresh the tokenId
  //After refreshing the tokenId, we save the new tokenId in local storage
  //We use the new tokenId and make another API call to fetch User Details

  //If the tokenId is valid, we will get the user details and return true

  //Step 1: Make an API call to verify the tokenId
  const isTokenVerified = await verifyToken();

  if (!isTokenVerified) {
    //Step 2: If the tokenId is not valid, we need to refresh the tokenId
    console.log("Token verification failed. Refreshing token...");
    const isTokenRefreshed = refreshToken();

    if (isTokenRefreshed) {
      console.log("Token refreshed successfully");
      // Step 3: Make an API call to fetch user details
    } else {
      console.error("Token refresh failed. User not authenticated.");
      // TODO: Handle the case where the token refresh fails
      return false;
    }
  } else {
    console.log("Token verification successful");
    // Step 3: If the tokenId is valid, we can proceed to fetch user details
    //TODO: Make an API call to fetch user details
  }
}

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
    // Store the token in local storage
    if (response.data.token) {
      console.log("Token found in response:", response.data.token);
      storeToken(response.data.token);
      storeRefreshToken(response.data.refreshToken);
      loginSuccess = true;
    } else {
      console.error("Token not found in response");
      loginSuccess = false;
    }
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
