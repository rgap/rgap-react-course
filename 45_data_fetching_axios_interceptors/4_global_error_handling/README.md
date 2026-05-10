# 4. Silent Token Refresh

The ultimate use-case for Axios Interceptors is the **Silent Token Refresh**.

In modern web security, access tokens (JWTs) usually expire very quickly (e.g., every 15 minutes). When they expire, the server returns a `401 Unauthorized`. 

It is a terrible User Experience to force the user to type their username and password every 15 minutes. 

Instead, auth systems use a "Refresh Token" (a long-lived token stored securely) to silently request a new short-lived access token.

---

## The Interceptor Flow

We can automate this entire flow using a Response Interceptor!

1. A component makes a request (`api.get('/posts')`).
2. The server responds with `401 Unauthorized`.
3. The Response Interceptor catches the error.
4. It pauses the component's Promise.
5. It fires off a *new* request to `/api/refresh_token`.
6. It receives the new token and saves it.
7. It modifies the **original** `/posts` request to include the new token.
8. It fires the original `/posts` request again!
9. The server responds with `200 OK`.
10. The interceptor passes the data back to the component.

**The component has absolutely no idea that its token expired, that a refresh occurred, or that a retry happened.** It just called `api.get()` and received data!

```javascript
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    // If it's a 401, and we haven't already tried refreshing...
    if (error.response.status === 401 && !error.config._retry) {
      error.config._retry = true; // Set flag to prevent infinite loops

      // Fetch new token
      const newToken = await fetchNewToken();
      
      // Update the failed request's headers
      error.config.headers.Authorization = `Bearer ${newToken}`;
      
      // Retry the request!
      return api(error.config);
    }
    
    return Promise.reject(error);
  }
);
```

This pattern is the hallmark of a professional, enterprise-grade React application.
