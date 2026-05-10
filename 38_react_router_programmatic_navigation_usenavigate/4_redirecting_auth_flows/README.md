# 4. Redirecting Auth Flows

The most common use case for programmatic navigation and declarative `<Navigate>` components is **Authentication**.

You don't want unauthorized users to be able to access the `/dashboard` route.

---

## The Wrapper Pattern

The industry standard way to handle this in React Router is to create a wrapper component (usually called `<ProtectedRoute>` or `<RequireAuth>`).

This component checks if the user is authenticated.
- If YES: It renders its `children`.
- If NO: It renders a `<Navigate>` component to kick the user out to the login screen.

```jsx
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Assume we have a context

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
```

You then use this wrapper directly inside your `<Routes>` definition:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  
  {/* Protected Route! */}
  <Route 
    path="/dashboard" 
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    } 
  />
</Routes>
```

---

## Enhancing UX with `state`

A frustrating UX issue is when a user clicks a link they got in an email (e.g., `mywebsite.com/settings`). 
Because they aren't logged in, they get redirected to `/login`.
They log in, and the login form blindly redirects them to `/dashboard`. **They lost the settings page they originally wanted to see!**

We can fix this by combining `<Navigate>` with the `state` prop we learned about in lesson 2.

When the `<ProtectedRoute>` kicks the user out, it can secretly pass their intended destination along with them!

```jsx
// Inside ProtectedRoute
const location = useLocation();

if (!isAuthenticated) {
  // Pass the current URL so the Login page knows where to send them later!
  return <Navigate to="/login" state={{ from: location.pathname }} replace />;
}
```

Then, inside the Login form, after a successful authentication, we check if `from` exists in the route state. If it does, we send them there instead of the default dashboard!

```jsx
// Inside Login Form
const location = useLocation();
const intendedUrl = location.state?.from || "/dashboard";

const handleLogin = async () => {
  await authenticate();
  navigate(intendedUrl, { replace: true });
}
```
