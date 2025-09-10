import axios from "axios";
import useAuthStore from "./store/authStore";
const token = useAuthStore.getState().token;
export const Axios = axios.create({
  // baseURL: "http://127.0.0.1:4000/api",
  baseURL: "https://qz-platform-backend-1.onrender.com/api",

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${token}`,
  },
});

// Add a request interceptor to include the token dynamically
Axios.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
