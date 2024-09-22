import { env } from "@/lib/env";
import { getItem } from "@/lib/helper/localStorage";
import axios from "axios";

/**
 * baseURL is the base URL for the API
 * axiosInstance is an instance of axios with baseURL and headers set
 * axiosInstance is used to make requests to the API
 * axiosInstance has request and response interceptors
 * request interceptor adds the token to the headers
 * response interceptor handles the response and error
 * response interceptor returns the response or rejects the error
 * response interceptor is used to handle the response and error globally
 * response interceptor is used to handle the token expiration error
 */

export const baseURL = env.VITE_API_URL_BE;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
  timeout: 10000,
});

export const api = () => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: false,
    timeout: 10000,
  });
};

axiosInstance.interceptors.request.use(
  (config) => {
    // get token from local storage
    const token = getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
