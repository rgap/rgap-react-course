# 4. Relative Navigation

When you are deep inside nested routes, writing absolute paths can become tedious and brittle.

```jsx
<Link to="/app/users/admin/dashboard/settings">Settings</Link>
```

If you ever change the name of `/app` to `/portal`, you will have to find and replace every single absolute link in your application.

---

## Relative Links

In React Router v6, links inside nested routes are **relative by default**.

If you are rendering a component inside the `/dashboard` route:

```jsx
// ❌ Absolute Link (starts with a slash)
// Resolves to: "mywebsite.com/settings"
<Link to="/settings">Settings</Link>

// ✅ Relative Link (NO slash)
// Resolves to: "mywebsite.com/dashboard/settings"
<Link to="settings">Settings</Link>
```

React Router is smart enough to know where the current component lives in the `<Routes>` hierarchy, and it builds the URL automatically based on the parent paths.

---

## Going Backwards (`..`)

Just like in a terminal or command line, you can use `..` to go **up one level** in the route hierarchy.

If you are currently at `/dashboard/settings/profile`:

```jsx
// Resolves to "/dashboard/settings"
<Link to="..">Go Back to Settings</Link>

// Resolves to "/dashboard"
<Link to="../..">Go Back to Dashboard</Link>
```

### Route Hierarchy vs History Stack

It is extremely important to understand the difference between `<Link to="..">` and `navigate(-1)`.

- `navigate(-1)` pops the browser history stack. If the user came to the settings page from Google, `navigate(-1)` will take them back to Google.
- `<Link to="..">` moves up the **React Router `<Routes>` definition tree**. It ignores browser history. It will always take the user to the parent layout, regardless of how they got there.

Use `..` when you want a "Go Up" button that enforces the structure of your application. Use `-1` when you want a literal "Browser Back" button.
