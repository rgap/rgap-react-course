# 3. Deeply Nested Layouts

You are not limited to one layer of nesting. You can nest `<Route>` components and `<Outlet />` components as deeply as you need.

---

## Multiple Layouts

Complex applications often have multiple layers of shared UI.

For example:
1. **Global App Layout:** Has a top navbar and footer.
2. **Dashboard Layout:** Has a left sidebar for dashboard navigation.
3. **Settings Layout:** Has a tab menu across the top for different settings pages.

You can achieve this by simply nesting the routes.

```jsx
<Routes>
  {/* Level 1 */}
  <Route path="/app" element={<AppLayout />}>
    
    {/* Level 2 */}
    <Route path="dashboard" element={<DashboardLayout />}>
      
      {/* Level 3 */}
      <Route path="settings" element={<SettingsLayout />}>
        
        {/* Level 4 (The actual content) */}
        <Route path="profile" element={<ProfileForm />} />
        <Route path="security" element={<SecurityForm />} />

      </Route>
    </Route>
  </Route>
</Routes>
```

When a user visits `/app/dashboard/settings/profile`, React Router builds a component tree that looks like this:

```jsx
<AppLayout>
  {/* The first Outlet */}
  <DashboardLayout>
    {/* The second Outlet */}
    <SettingsLayout>
      {/* The third Outlet */}
      <ProfileForm />
    </SettingsLayout>
  </DashboardLayout>
</AppLayout>
```

---

## Context in Deeply Nested Layouts

If you use `useOutletContext()`, a child component receives the context of its **immediate parent `<Outlet>`**.

If `AppLayout` passes `{ user }` to its outlet, but `DashboardLayout` does not pass it down to its own outlet, then `SettingsLayout` will **not** be able to access the user context!

If you have deeply nested layouts and you need global data to skip levels, you should use standard React Context instead.
