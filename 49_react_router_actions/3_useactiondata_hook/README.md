# 3. The `useActionData` Hook

In the previous lesson, our Action function finished by calling `redirect()`.

But what if the user types in an invalid password? We don't want to redirect them to the Dashboard! We want to keep them on the Login page and show them a red error message.

---

## Returning Data

If an Action function returns raw data (instead of a `redirect`), React Router halts the navigation and passes that data directly back to the component that rendered the `<Form>`.

```javascript
export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const password = formData.get("password");

  if (password.length < 6) {
    // Return an error object!
    return { error: "Password is too short!" };
  }

  return redirect("/dashboard");
};
```

---

## Accessing the Data

Inside your component, you can retrieve whatever the Action returned by using the `useActionData()` hook.

*(Note: If the form hasn't been submitted yet, `useActionData()` will return `undefined`)*.

```jsx
import { Form, useActionData } from "react-router-dom";

function Login() {
  const actionData = useActionData();

  return (
    <Form method="post">
      {/* If actionData exists, and it has an error property, display it! */}
      {actionData?.error && <p className="error">{actionData.error}</p>}
      
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </Form>
  );
}
```

This is the exact same pattern as `useLoaderData`, except it handles the response from *mutations* rather than *queries*.
