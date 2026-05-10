# 1. Nested Routes

As your application grows, you will likely have sections of your site that group related pages together. For example:

- `/settings/profile`
- `/settings/security`
- `/settings/billing`

---

## The Flat (Old) Way

In older versions of React Router, you had to define every route exactly as it appeared in the URL:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/settings/profile" element={<Profile />} />
  <Route path="/settings/security" element={<Security />} />
  <Route path="/settings/billing" element={<Billing />} />
</Routes>
```

This works, but it requires you to repeat `/settings` over and over. It's tedious and error-prone.

---

## The Nested (New) Way

In React Router v6, you can **nest** `<Route>` components inside one another.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  
  <Route path="/settings">
    <Route path="profile" element={<Profile />} />
    <Route path="security" element={<Security />} />
    <Route path="billing" element={<Billing />} />
  </Route>
</Routes>
```

### Relative Paths
Notice that the child routes **do not start with a slash `/`**.

- `path="profile"` (relative path)
- `path="/profile"` (absolute path - avoids the parent prefix! Don't do this here)

Because `profile` is relative, React Router automatically combines it with the parent's path (`/settings`), creating the final URL: `/settings/profile`.

---

## The Real Power of Nesting

Right now, nesting just saves us from typing `/settings` multiple times. That's a nice syntax feature, but it's not revolutionary.

The *true* power of nested routes is **Nested Layouts**. What if we want a sidebar to appear on *all* settings pages, but not on the Home page? 

We will see how to do that in the next lesson using `<Outlet />`.
