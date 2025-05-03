import axios from "axios";
import api_properties from "../../constants/api_properties";
import RequestTypes from "../../constants/requestTypes";

// This function retrieves the token from local storage
export function storeToken(token) {
  // Store the token in local storage
  if (!checkTokenId()) {
    localStorage.setItem("tokenID", token);
  }
}

//This function retrieves the token from local storage
export function getToken() {
  // Retrieve the token from local storage
  const tokenId = localStorage.getItem("tokenID");
  console.log("Token in local storage:", tokenId);
  return tokenId;
}

//This function stores the refresh token in local storage
export function storeRefreshToken(refreshToken) {
  // Store the refresh token in local storage
  if (!checkRefreshToken()) {
    localStorage.setItem("refreshToken", refreshToken);
  }
}

// This function retrieves the refresh token from local storage
export function getRefreshToken() {
  // Retrieve the refresh token from local storage
  const refreshToken = localStorage.getItem("refreshToken");
  console.log("Refresh token in local storage:", refreshToken);
  return refreshToken;
}

// This function checks if a token exists in local storage - kept by previous login action
export function checkTokenId() {
  // Check if the token exists in local storage
  const token = localStorage.getItem("tokenID");
  console.log("Token in local storage:", token);
  if (token) {
    // Token exists, return true
    return true;
  } else {
    // Token does not exist, return false
    return false;
  }
}

export function checkRefreshToken() {
  if (!checkTokenId()) {
    // If tokenID is not present, return false
    return false;
  }
  // Check if the refresh token exists in local storage
  const refreshToken = localStorage.getItem("refreshToken");
  console.log("Refresh token in local storage:", refreshToken);
  if (refreshToken) {
    // Refresh token exists, return true
    return true;
  } else {
    // Refresh token does not exist, return false
    return false;
  }
}

// This function checks if the token is valid by making an API call
export async function verifyToken() {
  // Check if the token exists in local storage
  if (!checkTokenId()) {
    // If tokenID is not present, return false
    return false;
  }

  // Make an API call to verify the tokenId
  try {
    const response = await axios.post(
      api_properties.authenticationEndpoint.local +
        api_properties.server_routes.verifyToken,
      {
        type: RequestTypes.VERIFY_TOKEN,
        data: {
          tokenId: getToken(),
        },
      }
    );
    console.log("Token verification successful", response.data);
    return true;
  } catch (error) {
    console.error(
      //
      "Token verification failed:",
      error.response?.data || error.message
    );
    return false;
  }
}

export async function refreshToken() {
  // Check if the token exists in local storage
  if (!checkRefreshToken()) {
    // If Refresh is not present, return false
    return false;
  }

  // Make an API call to refresh the tokenId
  try {
    const response = await axios.post(
      api_properties.authenticationEndpoint.local +
        api_properties.server_routes.refreshToken,
      {
        type: RequestTypes.REFRESH_TOKEN,
        data: {
          refreshToken: getRefreshToken(),
        },
      }
    );
    console.log("Token refresh successful", response.data);
    // Store the new token in local storage
    if (response.data.token) {
      storeToken(response.data.token);
      storeRefreshToken(response.data.refreshToken);
      return true;
    } else {
      console.error("New token not found in response");
      return false;
    }
  } catch (error) {
    console.error(
      "Token refresh failed:",
      error.response?.data || error.message
    );
    return false;
  }
}
