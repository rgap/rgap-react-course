import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// A dummy function to simulate fetching a new token from the backend
const fetchNewToken = async () => {
  console.log("🔄 [REFRESH] Reaching out to Auth Server for a new token...");
  await new Promise(res => setTimeout(res, 1500)); // Simulate network delay
  return "NEW_FRESH_TOKEN_999";
};

// Response Interceptor for Token Refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // We only care about 401 Unauthorized errors
    if (error.response && error.response.status === 401) {
      console.warn("⚠️ [INTERCEPTOR] 401 caught! Token is dead.");
      
      // Grab the original config for the request that just failed
      const originalRequest = error.config;

      // CRITICAL: We add a custom flag so we don't get stuck in an infinite loop!
      if (!originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // 1. Fetch the new token
          const newToken = await fetchNewToken();
          
          // 2. Save it to storage
          localStorage.setItem("my_auth_token", newToken);
          console.log(`✅ [REFRESH] New token acquired: ${newToken}`);
          
          // 3. Update the headers of the ORIGINAL request
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          
          // 4. RETRY the original request!
          console.log("🚀 [RETRY] Firing the original request again with the new token...");
          return api(originalRequest);
          
        } catch (refreshError) {
          // If the refresh ALSO failed, the user's session is truly dead. 
          // Kick them out.
          console.error("❌ [FATAL] Refresh failed. Logging user out.");
          localStorage.removeItem("my_auth_token");
          // window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      }
    }

    // If it's not a 401, or if the retry already failed, just pass the error along
    return Promise.reject(error);
  }
);
