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

export const user = () => {
  return apiClient.post("/auth/user/me");
};

export default apiClient;
