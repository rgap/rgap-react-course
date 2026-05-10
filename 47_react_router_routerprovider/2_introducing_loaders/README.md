# 2. Introducing Loaders

In the traditional React architecture (using `<BrowserRouter>`), data fetching always happened inside `useEffect`. 

This meant:
1. React renders the page (showing a Spinner).
2. The `useEffect` triggers the fetch.
3. The data returns.
4. React re-renders the page (showing the Data).

The **Data Router** changes everything by introducing `loaders`.

---

## The Loader Function

A loader is a simple async function that you attach directly to the route definition in your `router.jsx` file.

React Router guarantees that **it will wait for the loader to finish before it renders the component.**

```javascript
const userLoader = async () => {
  const res = await fetch("/api/user");
  return res.json();
};

const router = createBrowserRouter([
  { 
    path: "/user", 
    element: <UserProfile />,
    loader: userLoader // Attach the loader!
  }
]);
```

---

## Accessing the Data

Because React Router waits for the loader to finish, by the time your component mounts, the data is already there!

You access it using the `useLoaderData()` hook.

```jsx
import { useLoaderData } from "react-router-dom";

function UserProfile() {
  const data = useLoaderData();

  // No loading state needed! 
  // No useEffect needed!
  return <h1>{data.name}</h1>;
}
```

This completely eliminates the need for `useState` and `useEffect` for basic data fetching. It simplifies components drastically and eliminates the "waterfall" rendering delay!

*(Note: Test this out. Click the "Profile" link. Notice how the URL changes immediately, but the screen doesn't change for 2 seconds while the data fetches, and then the Profile suddenly appears!)*
