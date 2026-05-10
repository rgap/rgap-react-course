import axios from "axios";

// 1. Create a custom Axios instance
export const api = axios.create({
  // Base URL applies to all requests made with this instance
  baseURL: "https://jsonplaceholder.typicode.com",
  
  // Timeout in milliseconds (fails the request if it takes longer than 5 seconds)
  timeout: 5000,
  
  // Default headers applied to every request
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});

// You can create multiple instances for different microservices!
export const paymentApi = axios.create({
  baseURL: "https://api.stripe.com/v1",
  timeout: 10000
});
