# 2. Array of Objects Syntax

Transitioning to `createBrowserRouter` requires learning how to translate your JSX routing tree into a massive JavaScript Array of Objects.

---

## Translating the Basics

In the old way, you passed props to a component:
```jsx
<Route path="/about" element={<About />} />
```

In the new way, you define properties on an object:
```javascript
{ path: "/about", element: <About /> }
```

---

## Translating Nested Routes

Previously, to create a Layout Wrapper and an `<Outlet />`, you nested `<Route>` tags inside of each other:

```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
```

In the Data Router, objects cannot have JSX children. Instead, the Route Object accepts a `children` property, which takes an array of *more* Route Objects!

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "settings",
        element: <Settings />
      }
    ]
  }
])
```

## Translating Index Routes

Previously, you passed the `index` boolean prop to designate the default child:
```jsx
<Route index element={<Home />} />
```

In the new syntax, you set the `index` property to `true`:
```javascript
{ index: true, element: <Home /> }
```

*(Note: If a route has `index: true`, it cannot have a `path` property!)*
