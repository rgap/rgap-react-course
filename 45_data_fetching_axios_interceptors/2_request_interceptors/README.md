# 2. Request Interceptors

If your backend is secure, every single network request you make must include an Authentication Token (usually a JWT) in the Headers.

```javascript
// Doing this manually in every component is a nightmare:
const token = localStorage.getItem("token");
fetch("/api/data", { headers: { Authorization: `Bearer ${token}` } });
```

If you forget to include the token, the request will fail. If the token storage location changes (e.g. from `localStorage` to a cookie), you have to update 50 different files.

---

## Intercepting the Request

Axios provides a feature called **Interceptors**.

An Interceptor is a middleware function. You attach it to your custom Axios instance, and it will automatically run *before* every single request leaves the browser.

```javascript
// src/api.js

api.interceptors.request.use((config) => {
  // 1. Grab the token from wherever it is stored
  const token = localStorage.getItem("token");

  // 2. Attach it to the configuration object
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // 3. You MUST return the config object to let the request proceed!
  return config;
});
```

Now, your UI components can just call `api.get('/users/me')`. The component knows absolutely nothing about authentication headers. The Interceptor handles all the security in the background!

This is a massive win for the **Separation of Concerns** principle.
