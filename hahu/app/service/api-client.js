import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://192.168.1.106:8001",
});

export default apiClient;
