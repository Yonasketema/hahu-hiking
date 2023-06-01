import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://192.168.1.106:8001",
});

export const login = (username, password) => {
  return apiClient.post("/auth/jwt/create/", {
    username,
    password,
  });
};

export const register = (username, email, password) => {
  return apiClient.post("/auth/users/", {
    username,
    password,
    email,
  });
};

export default apiClient;
