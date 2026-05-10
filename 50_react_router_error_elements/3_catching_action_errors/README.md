# 3. Catching Action Errors

In Module 49, we learned how to `return` data from an Action so that the UI can display validation errors (using `useActionData()`). 

Returning data does **not** trigger an `errorElement`. Returning data means the action completed successfully, it just decided to hand data back to the component.

But what happens if your `fetch()` call to save the data completely fails? Or if the server returns a `500 Internal Server Error`?

---

## Throwing from Actions

Just like Loaders, if an `action` function `throw`s, React Router instantly aborts everything and renders the nearest `errorElement`.

```javascript
export const submitAction = async ({ request }) => {
  const res = await fetch("/api/save", { method: "POST" });

  if (!res.ok) {
    // The server crashed! Throw an error!
    throw new Response("Failed to save data.", { status: 500 });
  }

  return redirect("/dashboard");
};
```

If this `throw` occurs, React Router destroys the component that rendered the `<Form>` and mounts the `errorElement`.

## When to Return vs When to Throw

**RETURN** data when it is a *User Error*:
- The password is too short.
- The username is taken.
- The email format is invalid.
- *Why?* Because you want the user to stay on the form so they can fix their mistake.

**THROW** an error when it is a *System Error*:
- The server is down (500).
- The user's authentication token expired mid-request (401).
- The Javascript code crashed (TypeError).
- *Why?* Because the user cannot fix this. The application is fundamentally broken, and you need to show the Global Error Boundary.
