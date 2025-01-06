import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "./constants/Statics";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: API_URL,
});

instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

// Request interceptor for handling token authorization
instance.interceptors.request.use(
  async (config) => {
    // First check sessionStorage, then fallback to localStorage for the token
    const JWT_token = sessionStorage.getItem("token") || localStorage.getItem("token");

    if (JWT_token) {
      config.headers.common["Authorization"] = "Bearer " + JWT_token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors like 401 (unauthorized)
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 419) {
        toast.error("Session expired. Please log in again.", {
          position: "top-right",
        });
        // Clear both sessionStorage and localStorage
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userData");
        localStorage.removeItem("token");
        localStorage.removeItem("userData");

        window.location.pathname = "/adminPanel";
      } else if (error.response.status === 500) {
        toast.error("Server error. Please try again later.", {
          position: "top-right",
        });
      }
    } else {
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
      });
    }

    return Promise.reject(error);
  }
);

export default instance;
