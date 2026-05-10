# 4. The `errorElement`

In standard React, if a component throws a JavaScript error during rendering, the entire React application crashes. The user sees a completely blank white screen. This is known as the "White Screen of Death".

To fix this, you historically had to write complex Class components called **Error Boundaries**.

React Router 6.4 makes this incredibly easy with the `errorElement` property!

---

## Global Error Handling

When you define a route in `createBrowserRouter`, you can provide an `errorElement`.

If the `element` on that route (or any of its children) crashes, React Router will automatically catch the error, suppress it, and render the `errorElement` instead.

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <GlobalErrorPage />, // <--- Catches all crashes!
    children: [
      { path: "dashboard", element: <Dashboard /> }
    ]
  }
]);
```

---

## Accessing the Error

Inside your custom error component, you can use the `useRouteError` hook to find out exactly what went wrong.

```jsx
import { useRouteError } from "react-router-dom";

function GlobalErrorPage() {
  const error = useRouteError();
  
  return (
    <div>
      <h1>Application Crashed</h1>
      <p>{error.message}</p>
    </div>
  );
}
```

This prevents the white screen of death, providing a much safer and more professional experience for the end user! In the next module, we'll see how we can place `errorElement`s deeper in the tree to isolate crashes to specific sections of the UI.
