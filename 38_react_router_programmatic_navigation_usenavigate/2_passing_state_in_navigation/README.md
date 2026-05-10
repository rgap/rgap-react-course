# 2. Passing State in Navigation

Sometimes you need to send data from one page to another during navigation.

For example, when a user completes a checkout, you want to redirect them to a `/success` page and display their Order ID.

---

## Option 1: URL Search Parameters
You could put the data in the URL: `navigate('/success?orderId=123')`.
- **Pros:** Bookmarkable, shareable.
- **Cons:** Visible to the user. Clutters the URL. Cannot easily pass complex objects or arrays.

## Option 2: Route State
React Router allows you to attach a hidden "payload" of data to a navigation event. This data is stored internally by the router and the browser's History API, so it never shows up in the URL.

---

## How to pass state

Inside the options object of `navigate`, provide a `state` property.

```jsx
const user = { name: "Alice", role: "Admin" };

// Pass the object!
navigate("/dashboard", { state: user });
```

*(Note: You can do this with `<Link>` components too! `<Link to="/dashboard" state={user}>`)*

---

## How to read state

To read the hidden payload, the destination component must import the `useLocation` hook.

The `useLocation` hook returns an object representing the current URL. This object contains a `state` property, which will hold whatever data you sent!

```jsx
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const user = location.state;

  if (!user) {
    return <p>No user data provided.</p>;
  }

  return <h1>Welcome, {user.name}</h1>;
}
```

---

## The Danger of Route State

You should **never** rely on Route State for critical data fetching.

Why? Because if the user bookmarks `/dashboard`, or copies the URL and sends it to a friend, **the state will be null**. The hidden payload only exists if the user actually clicked the button or triggered the specific `navigate` function.

**Best Practice:**
Use route state for cosmetic UI enhancements (like "Success" toast messages, temporary confirmation banners, or complex object payloads that are okay to lose on refresh). Do not use it as a replacement for database queries.
