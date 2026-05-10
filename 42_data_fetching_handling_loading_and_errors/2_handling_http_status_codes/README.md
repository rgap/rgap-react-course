# 2. Handling HTTP Status Codes

A very common mistake beginners make with the `fetch` API is assuming that `.catch()` handles all errors.

**It doesn't.**

---

## The `fetch` API Gotcha

If you use `fetch()` to request a user profile, and the server returns a `404 Not Found` or a `500 Internal Server Error`, **the Promise does NOT reject.** 

The `.catch()` block will be completely ignored!

Why? Because the network request successfully reached the server, and the server successfully sent a response back. `fetch` only rejects the Promise if there is a fundamental network failure (e.g., the user's wifi is turned off, or CORS blocks the request).

If you don't manually check for `404` or `500` errors, your code will proceed to `await response.json()`, which will crash your app when it tries to parse a raw HTML error page!

---

## Checking `response.ok`

To fix this, you must always check the `response.ok` property immediately after the fetch.

`response.ok` is a boolean that is `true` if the status code is between 200-299, and `false` otherwise.

```jsx
const response = await fetch('/api/user/99');

if (!response.ok) {
  // We MUST throw an error manually to trigger the catch block!
  throw new Error(`Something went wrong: ${response.status}`);
}

// It is now safe to parse the JSON
const data = await response.json();
```

---

## Rendering Specific Errors

It's bad UX to show a generic "Something went wrong" message for every problem.

If a user requests `/user/99` and it doesn't exist, you should show a UI that says "User not found".
If the server crashes, you should show a UI that says "We are experiencing technical difficulties."

You can achieve this by inspecting `response.status` before throwing the error:

```jsx
if (!response.ok) {
  if (response.status === 404) throw new Error("not_found");
  if (response.status === 401) throw new Error("unauthorized");
  if (response.status >= 500) throw new Error("server_crash");
}
```

Then, in your JSX, you can render exactly what the user needs to see to understand the problem!
