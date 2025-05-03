const authenticationEndpoint = {
  local: "http://localhost:8080/api",
};

const server_routes = {
  login: "/login",
  verifyToken: "/verifyToken",
  refreshToken: "/refreshToken",
  logout: "/logout",
};

export default {
  authenticationEndpoint,
  server_routes,
};
