# 4. No Match Routes (404)

What happens if a user types a URL that doesn't exist? You need to show them a "404 Not Found" page.

In React Router v6, you do this using the wildcard path: `path="*"`.

---

## Global 404 Pages

Place a wildcard route at the very bottom of your top-level `<Routes>`.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  
  {/* If no URL above matched, render this: */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

If the user goes to `/random-gibberish`, they will see the `NotFound` component.

---

## Nested 404 Pages

Because we can nest routes, we can also nest 404 pages!

```jsx
<Routes>
  <Route path="/settings" element={<SettingsLayout />}>
    <Route index element={<SettingsGeneral />} />
    <Route path="profile" element={<Profile />} />
    
    {/* Nested Wildcard */}
    <Route path="*" element={<SettingsNotFound />} />
  </Route>

  {/* Global Wildcard */}
  <Route path="*" element={<GlobalNotFound />} />
</Routes>
```

### How React Router prioritizes them:

1. User goes to `/apple`.
   - Does it match `/settings`? No.
   - It hits the Global Wildcard. Shows `GlobalNotFound`.

2. User goes to `/settings/banana`.
   - Does it match `/settings`? Yes! React Router enters the nested routes.
   - It renders `<SettingsLayout>`.
   - Does `banana` match `index`? No.
   - Does `banana` match `profile`? No.
   - It hits the Nested Wildcard. It renders `<SettingsNotFound>` *inside* the SettingsLayout Outlet.

This is incredible for User Experience. If a user mistypes a settings URL, they don't get kicked out to a generic global 404 page. They stay inside the Settings Dashboard, and the main content area simply tells them "This specific setting does not exist."
