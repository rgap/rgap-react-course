# 2. The Action Function

When you click submit on a `<Form method="post">`, React Router intercepts the event and looks for an `action` function attached to the current route.

If it finds one, it executes it and passes it the `request` object.

---

## Extracting Form Data

Just like Loaders, Actions run **outside** of the component. They do not have access to React State.

Instead, you extract the data directly from the Web Request object using the standard `formData()` API.

```javascript
// action.jsx
export const submitAction = async ({ request }) => {
  // Extract all the data from the form
  const data = await request.formData();

  // Retrieve specific inputs by their `name` attribute
  const username = data.get("username");
  const password = data.get("password");

  // Send the data to your real backend
  await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ username, password })
  });

  return null;
}
```

This completely eliminates the need for Controlled Components (React State attached to inputs) when building basic forms!

---

## The `redirect` Utility

When a form submission is successful, you usually want to send the user to a different page (e.g., redirecting to the Dashboard after logging in).

React Router provides a helper function called `redirect()`.

```javascript
import { redirect } from "react-router-dom";

export const submitAction = async ({ request }) => {
  await fakeLogin();

  // Instantly navigates the user to the dashboard
  return redirect("/dashboard");
}
```
