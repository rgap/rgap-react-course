# 4. The `useNavigate` Hook

So far, we have navigated between pages using `<Link>` and `<NavLink>`.

These are declarative. The user clicks them, and the navigation happens instantly.

But what if we don't want to navigate instantly?
- The user submits a "Create Account" form.
- We need to wait for the server to reply.
- *If* the server says OK, *then* we navigate them to their profile.
- *If* the server says ERROR, we *do not* navigate, and instead show an error message.

For this, we need **programmatic navigation**.

---

## `useNavigate`

React Router provides a hook called `useNavigate`. It returns a function that you can call in your event handlers to trigger a navigation.

```jsx
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const success = await sendDataToServer();
    
    if (success) {
      // Programmatically navigate!
      navigate("/profile");
    } else {
      alert("Signup failed.");
    }
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

---

## Options Object

You can pass a second argument to the `navigate` function: the options object.

This is where you specify things like the `replace` behavior (which we learned about in lesson 1).

```jsx
// Adds to history stack (default)
navigate("/success");

// Overwrites current entry in history stack
navigate("/success", { replace: true });
```

---

## Navigating Backwards and Forwards

You can also use the `navigate` function to move backwards and forwards through the browser's history stack.

Instead of passing a string path, pass a **number**.

```jsx
// Go back exactly 1 page (like clicking the browser's Back arrow)
navigate(-1);

// Go back 2 pages
navigate(-2);

// Go forward 1 page (like clicking the browser's Forward arrow)
navigate(1);
```

This is incredibly useful if you want to build a custom "Cancel" or "Go Back" button inside your application UI.
