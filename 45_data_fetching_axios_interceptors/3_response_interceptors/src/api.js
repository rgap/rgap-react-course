import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000
});

// --- RESPONSE INTERCEPTOR ---
// This runs automatically whenever a response returns from the server,
// BEFORE the response is handed over to the component's await call!

api.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    console.log(`[INTERCEPTOR] Success! Received data from ${response.config.url}`);
    
    // We must return the response so the component can use it
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    console.error(`[INTERCEPTOR] Error detected globally: ${error.response?.status}`);
    
    // Global Error Handling Logic!
    if (error.response && error.response.status === 401) {
      console.error("[INTERCEPTOR] Unauthorized! The user's token must have expired.");
      
      // In a real app with a Router, you could do something like:
      // window.location.href = '/login';
      // Or trigger a global context logout function.
      alert("Your session has expired. Please log in again.");
    }
    
    if (error.response && error.response.status === 500) {
      alert("The server is down. Our engineers are panicking right now.");
    }

    // Pass the error down to the component so it can handle local UI state (like hiding a spinner)
    return Promise.reject(error);
  }
);
