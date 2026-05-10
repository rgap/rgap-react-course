import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000
});

// --- REQUEST INTERCEPTOR ---
// This function will run automatically BEFORE every single request is sent!
api.interceptors.request.use(
  (config) => {
    console.log(`[INTERCEPTOR] Intercepting request to: ${config.url}`);
    
    // 1. We read the token from localStorage
    const token = localStorage.getItem("my_auth_token");

    // 2. If a token exists, we attach it to the headers
    if (token) {
      console.log(`[INTERCEPTOR] Attaching token to headers!`);
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 3. We MUST return the config object, or the request will stall!
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);
