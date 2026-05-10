# 3. Role Based Routing

Authentication tells us **who** the user is.
Authorization tells us **what** the user is allowed to do.

Many applications have different tiers of users (e.g., standard users, moderators, administrators). A standard user is authenticated, but they shouldn't be allowed to view the `/admin` routing panel.

---

## Extending the Wrapper

We can easily adapt our `<ProtectedRoute>` wrapper to accept a `requiredRole` prop.

```jsx
function ProtectedRoute({ children, requiredRole }) {
  const { user, isAuthenticated } = useAuth();

  // 1. Are they logged in at all?
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 2. Are they authorized for this specific route?
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  // 3. They are logged in AND authorized!
  return children;
}
```

Now, we have fine-grained control over our routing hierarchy directly inside our `<Routes>` definition.

```jsx
<Routes>
  {/* Public */}
  <Route path="/" element={<Home />} />
  
  {/* Requires Authentication, but any role is fine */}
  <Route path="/dashboard" element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } />

  {/* Requires Authentication AND the 'admin' role */}
  <Route path="/admin" element={
    <ProtectedRoute requiredRole="admin">
      <AdminPanel />
    </ProtectedRoute>
  } />
</Routes>
```

---

## Security Warning!

React is a client-side framework. All of the JavaScript code runs directly on the user's computer.

**A clever user can easily open their browser developer tools, edit the React state, and change their `role` from "user" to "admin".**

If they do this, the `<ProtectedRoute>` will see they are an "admin", and it will render the `<AdminPanel>` component.

This is fine. Why? Because the actual data must come from your backend server. The user might trick React into rendering the Admin Panel layout on their screen, but when that component tries to fetch the secret user list from your API, your backend server must verify their session token and return a `403 Forbidden` error. 

**Client-side routing is for User Experience, not Security. Security is the job of the backend.**
