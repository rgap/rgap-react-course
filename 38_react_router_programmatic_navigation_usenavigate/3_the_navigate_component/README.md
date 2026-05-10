# 3. The `<Navigate />` Component

Sometimes you want to perform a redirect automatically. You don't want to wait for the user to click a button.

In older versions of React Router, you might be tempted to use `useNavigate` inside a `useEffect` to redirect on mount. 

**Don't do that!** It causes unnecessary renders.

---

## Declarative Redirects

React Router v6 provides a component specifically for redirecting: `<Navigate />`.

When this component is rendered, it immediately alters the browser URL and navigates the user.

### Use Case 1: Legacy URLs

If you redesign your website and change `/about-us` to `/about`, you don't want old bookmarks to break. 

You can set up a Route that renders a `<Navigate />` component to instantly redirect users.

```jsx
<Routes>
  {/* The new page */}
  <Route path="/about" element={<About />} />
  
  {/* The redirect */}
  <Route path="/about-us" element={<Navigate to="/about" replace />} />
</Routes>
```
*(Always use `replace` for redirects so the user doesn't get stuck in a "Back Button Loop"!)*

### Use Case 2: Render Bailing

If a component figures out that it shouldn't be rendering (e.g., a requested product ID doesn't exist in the database), it can simply `return` a `<Navigate>` component instead of JSX!

```jsx
function Product() {
  const { id } = useParams();
  const product = findProduct(id);

  if (!product) {
    // Force a redirect to the 404 page!
    return <Navigate to="/404" replace />;
  }

  return <h1>{product.name}</h1>;
}
```

This is much cleaner and more "React-like" (declarative) than using `useNavigate` inside a `useEffect`.
