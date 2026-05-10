# 2. The Protected Route Wrapper

Now that we have a real `AuthContext` providing global authentication state, we can wire it up to the `<ProtectedRoute>` wrapper we learned about in the previous module.

---

## How the Wrapper works

A React component can receive a special prop called `children`. This prop represents whatever JSX is nested *inside* the component tags.

By creating a `<ProtectedRoute>` component, we can intercept the rendering process.

```jsx
function ProtectedRoute({ children }) {
  // 1. Check global auth state
  const { isAuthenticated } = useAuth();

  // 2. If not authenticated, bail out and redirect!
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 3. If authenticated, proceed to render the child route!
  return children;
}
```

---

## Using it in the Router

To use the wrapper, you simply wrap it around the `element` prop inside your Route definitions.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  
  <Route 
    path="/dashboard" 
    element={
      <ProtectedRoute>
        <Dashboard /> {/* This is passed as 'children' */}
      </ProtectedRoute>
    } 
  />
</Routes>
```

When the user navigates to `/dashboard`, React Router tries to render `<ProtectedRoute>`. The `ProtectedRoute` checks the context. If `isAuthenticated` is true, it returns its `children` (which is the `<Dashboard />` component), and the dashboard appears on the screen.
