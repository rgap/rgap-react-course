# 3. Index Routes

We have a problem with our `SettingsLayout`.

What happens if the user navigates to exactly `/settings`?

```jsx
<Route path="/settings" element={<SettingsLayout />}>
  <Route path="profile" element={<Profile />} />
  <Route path="security" element={<Security />} />
</Route>
```

React Router will render `<SettingsLayout>`. But since the URL is not `/settings/profile` or `/settings/security`, there is no child component to render. The `<Outlet />` will just render `null`. The user will see a sidebar next to a giant empty white space.

---

## The Solution: Index Routes

An **index route** is the default child route that renders when the parent's exact URL is matched.

To create one, you provide the `index` boolean prop instead of a `path` prop.

```jsx
<Route path="/settings" element={<SettingsLayout />}>
  
  {/* This renders in the Outlet when the URL is exactly "/settings" */}
  <Route index element={<SettingsGeneral />} />
  
  <Route path="profile" element={<Profile />} />
  <Route path="security" element={<Security />} />
</Route>
```

---

## Think of it like `index.html`

In traditional web servers, if a user navigates to a folder like `mywebsite.com/about/`, the server automatically looks for a file named `index.html` inside that folder.

An index route does exactly the same thing. It is the "default file" for that specific URL level.
