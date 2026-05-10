# 2. Index Routes & Layout Context

A common point of confusion for beginners is how an `index` route interacts with the parent layout's state.

Because an `index` route doesn't have a `path` prop, it sometimes feels like a "lesser" route or a special edge case.

---

## Index Routes are Full Citizens

An `index` route is rendered inside the parent's `<Outlet />` exactly like any other child route.

This means that **anything passed into the `<Outlet context={...}>` is fully available to the index route**.

```jsx
// The Layout
function DashboardLayout() {
  const [user, setUser] = useState({ name: "Alice" });
  
  return (
    <div>
      <Sidebar />
      <Outlet context={{ user }} />
    </div>
  );
}
```

```jsx
// The Index Route
import { useOutletContext } from "react-router-dom";

function DashboardIndex() {
  // ✅ Works perfectly!
  const { user } = useOutletContext();
  
  return <h1>Welcome to the dashboard, {user.name}</h1>;
}
```

---

## Why this is important

Often, your `index` route is the "Dashboard Overview" page. This page usually needs the most data out of any page in the dashboard!

By fetching global dashboard data in the `DashboardLayout` and passing it down via context, your `index` route can immediately display a rich UI without having to make redundant API calls.
