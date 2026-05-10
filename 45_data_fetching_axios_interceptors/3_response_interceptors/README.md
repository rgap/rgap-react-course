# 3. Response Interceptors

Just as we can intercept requests *before* they leave the browser, we can also intercept responses *after* they return from the server, but *before* they are handed to the `await` statement inside your React component.

---

## Global Error Handling

Imagine a user leaves your app open overnight. The next morning, their security token has expired. 

When they click "Save Comment", the server responds with a `401 Unauthorized`.
If they click "Like Post", the server responds with a `401 Unauthorized`.

Instead of writing logic in **every single component** to check for a 401 error and redirect the user to the login page, you can handle it globally using a **Response Interceptor**.

```javascript
api.interceptors.response.use(
  (response) => {
    // Passes successful responses down to the component
    return response;
  },
  (error) => {
    // Intercepts all errors!
    if (error.response && error.response.status === 401) {
      // 1. Clear the invalid token from storage
      localStorage.removeItem("token");
      
      // 2. Force the browser back to the login screen
      window.location.href = "/login";
    }

    // 3. Reject the promise so the component's try/catch block knows it failed!
    return Promise.reject(error);
  }
);
```

By placing this logic inside the `api.js` file, you guarantee that every single component in your application automatically benefits from secure, standardized error handling without writing a single line of extra code in the UI layer.
