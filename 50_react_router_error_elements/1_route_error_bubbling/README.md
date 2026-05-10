# 1. Route Error Bubbling

In Module 46, we placed an `errorElement` on the absolute Root Route (`/`).

This works great as a global catch-all. If any component in the entire application crashes, React Router will render that global error page. 

However, this is often a **bad User Experience**. If a user is looking at a complex Dashboard, and one tiny chart component crashes, we do not want to destroy the entire page, including the Navigation Bar and Sidebar, just to show an error message!

---

## Error Bubbling

React Router handles errors similarly to how the DOM handles events: **Bubbling**.

If a route crashes (either during rendering, in a loader, or in an action), React Router looks at that specific route definition.
- Does it have an `errorElement`? 
- If yes, render it in place of its `element`.
- If no, **bubble the error UP to the parent route.**
- Repeat until it finds an `errorElement`.

## Localized Error Boundaries

By placing an `errorElement` deep within your routing tree, you can isolate crashes to specific sections of your UI!

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,     // Contains Navbar
    children: [
      {
        path: "dashboard",
        element: <DashboardLayout />, // Contains Sidebar
        errorElement: <DashboardError />, // <--- Catches all dashboard crashes!
        children: [
          { path: "chart", element: <Chart /> }
        ]
      }
    ]
  }
]);
```

If `<Chart>` crashes, the error bubbles up to `dashboard`. It finds `<DashboardError />`. 

React Router replaces the `<DashboardLayout>` (and its sidebar) with `<DashboardError />`. But because the error was caught there, it **does not** bubble up to `/`! The `<RootLayout>` (and its Navbar) remains perfectly intact and fully functional!
