# 4. The No Children Rule

There is one extremely important rule about Index routes:

**Index routes cannot have children.**

They are "leaf nodes" in your routing tree.

---

## Why?

By definition, an `index` route renders when the parent matches the URL *exactly*, and no other children match.

If an `index` route had its own children, it would cease to be an index route; it would just be another path-based parent layout!

Because of this rule, the following syntax is **invalid** and will crash your application:

```jsx
<Route path="/admin" element={<AdminLayout />}>
  
  {/* ❌ CRASH: Index routes cannot have children! */}
  <Route index element={<AdminIndex />}>
    <Route path="logs" element={<Logs />} />
  </Route>

</Route>
```

---

## What does this mean for your components?

Because an index route can never have child routes, **an index component should never contain an `<Outlet />`.**

If you put an `<Outlet />` inside an index component, it will sit there completely empty forever, because React Router will never route a child component into it.

```jsx
function DashboardIndex() {
  return (
    <div>
      <h1>Welcome</h1>
      
      {/* ❌ Useless. This will never render anything. */}
      <Outlet /> 
    </div>
  );
}
```

If you ever find yourself needing an `<Outlet />` inside your index component, it means your routing architecture is wrong. You need to convert that index route into a standard path-based parent route!
