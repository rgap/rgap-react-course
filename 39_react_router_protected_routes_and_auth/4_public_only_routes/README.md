# 4. Public Only Routes

We've spent a lot of time learning how to kick unauthorized users out of the Dashboard.

But what about the inverse?

If a user is already logged in, they shouldn't be able to go to `/login` or `/signup`. If they try to navigate there, we should redirect them straight to the `/dashboard`!

---

## The `PublicOnlyRoute` Wrapper

We can create another wrapper component that does the exact opposite of our `<ProtectedRoute>`.

Instead of kicking the user out if they are NOT authenticated, it kicks the user out if they ARE authenticated!

```jsx
function PublicOnlyRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // If they are already logged in, send them to the app!
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  // If they are logged out, let them see the login/signup form.
  return children;
}
```

You then wrap this around your authentication routes:

```jsx
<Routes>
  {/* Standard Public Route */}
  <Route path="/" element={<Home />} />

  {/* Public ONLY Routes */}
  <Route path="/login" element={
    <PublicOnlyRoute><Login /></PublicOnlyRoute>
  } />
  
  <Route path="/signup" element={
    <PublicOnlyRoute><Signup /></PublicOnlyRoute>
  } />

  {/* Protected Routes */}
  <Route path="/dashboard" element={
    <ProtectedRoute><Dashboard /></ProtectedRoute>
  } />
</Routes>
```

This ensures a seamless user experience where users are never presented with forms or pages that contradict their current authentication state.
