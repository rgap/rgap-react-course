# 2. `isRouteErrorResponse`

Because an `errorElement` serves as a catch-all for **every single type of failure** in your application, the object returned by `useRouteError()` could be many different things.

It might be a standard JavaScript `Error` object (e.g., a TypeError because you called `.map()` on `undefined`).
It might be a Web `Response` object (e.g., because you deliberately threw a 404 in a loader).

To build a robust Global Error Page, we need to know exactly what kind of error we are dealing with.

---

## The Type Checker

React Router provides a utility function specifically for this: `isRouteErrorResponse()`.

This function takes the caught error and returns `true` if the error is a `Response` object thrown from a loader or action. It returns `false` if it is a standard JavaScript error.

```javascript
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function GlobalError() {
  const error = useRouteError();

  // 1. Is it an HTTP Error?
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <h1>Page Not Found</h1>;
    }
    if (error.status === 401) {
      return <h1>You are not authorized!</h1>;
    }
    return <h1>Server Error: {error.status}</h1>;
  }

  // 2. If it's not a Response, it's a JS Runtime Crash.
  return (
    <div>
      <h1>Application Crashed</h1>
      <pre>{error.message}</pre>
    </div>
  );
}
```

This pattern ensures that users get clean, helpful feedback for predictable HTTP errors, while still catching catastrophic code failures safely!
