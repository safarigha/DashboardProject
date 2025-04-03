// src/services/api.ts
import axios from "axios";
import { useLoading } from "@/context/loadingContext";

const api = axios.create({
  baseURL: "https://localhost:5001/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let setGlobalLoading: ((loading: boolean) => void) | null = null;
export const setLoadingHandler = (setFn: typeof setGlobalLoading) => {
  setGlobalLoading = setFn;
};

api.interceptors.request.use((config) => {
  setGlobalLoading?.(true);
  return config;
});

api.interceptors.response.use(
  (response) => {
    setGlobalLoading?.(false);
    return response;
  },
  (error) => {
    setGlobalLoading?.(false);
    return Promise.reject(error);
  }
);

export default api;

// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://localhost:5001/api",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default api;
