# 1. The Default Child Component

We briefly touched on `index` routes in Module 32, but they are so foundational to React Router v6 that we are dedicating an entire module to exploring their mechanics and rules.

---

## The Empty Outlet Problem

When you create nested routes, the parent route usually acts as a Layout (a shell with an `<Outlet />`).

```jsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="reports" element={<Reports />} />
  <Route path="users" element={<Users />} />
</Route>
```

If the user goes to `/dashboard/reports`, React Router puts `<Reports />` into the layout's `<Outlet />`. Everything works perfectly.

But what happens if the user just goes to `/dashboard`?

React Router looks at the URL. It matches the parent path (`/dashboard`). It renders the `<DashboardLayout />`. 

Then it checks the children. Does `/dashboard` match `reports`? No. Does it match `users`? No. 

Therefore, React Router has nothing to put inside the `<Outlet />`. The Outlet renders as `null`. The user sees a sidebar with a giant blank white space next to it!

---

## The Solution: Index Routes

An **index route** is the default child route. It is the component that React Router will put inside the `<Outlet />` when the URL perfectly matches the parent route, but doesn't match any of the children.

You define it by using the `index` boolean prop instead of a `path` prop.

```jsx
<Route path="/dashboard" element={<DashboardLayout />}>
  
  {/* The default child! */}
  <Route index element={<DashboardHome />} />
  
  <Route path="reports" element={<Reports />} />
</Route>
```

---

## Why are they called "Index" routes?

In traditional web development, if you build a website and upload a folder called `dashboard/` to the server, the web server doesn't know what file to send the user when they visit `mywebsite.com/dashboard/`.

The universal standard is that the server will automatically look for a file named `index.html` inside that folder and serve it as the default.

React Router adopted this naming convention. An `index` route is simply the `index.html` of a nested route group.
