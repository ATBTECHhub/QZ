import axios from "axios"
export const Axios = axios.create({
  baseURL: "https://qz-platform-backend-1.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
}); 