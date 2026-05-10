# 1. `useNavigate` Recap

In Module 33, we were introduced to the `useNavigate` hook. 

While the `<Link>` component is great for declarative, user-driven navigation (clicking a menu item), there are many times when navigation must happen **programmatically** in response to an event.

## The Basics

You call the hook to get the `navigate` function, and then call that function with a path.

```jsx
import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    await authenticateUser();
    
    // Programmatic navigation!
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Log In</button>;
}
```

## The Options Object

The `navigate` function accepts a second argument: an options object.

```jsx
navigate("/dashboard", { replace: true });
```

Setting `replace: true` tells React Router to overwrite the current entry in the browser's history stack, rather than pushing a new one onto the stack. This is crucial for redirecting users away from pages they shouldn't be able to "Go Back" to (like an old login screen after they are already logged in).

## History Traversal

You can also pass numbers into the `navigate` function to move forward or backward through the user's history stack.

```jsx
// Go back one page
navigate(-1);

// Go forward one page
navigate(1);
```

In the rest of this module, we will explore some advanced programmatic navigation techniques, including passing hidden state variables and building declarative `<Navigate />` components.
