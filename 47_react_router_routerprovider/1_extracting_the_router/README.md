# 1. Extracting the Router

In the previous module, we placed `createBrowserRouter` and `<RouterProvider>` directly inside `App.jsx`.

While this works for simple demonstrations, it is not how professional applications are structured. A real application has dozens or hundreds of routes, and putting all of them in `App.jsx` creates a massive, unreadable file.

---

## The Standard Architecture

The industry standard architecture for Data Router applications is:

### 1. `router.jsx` (or `router.js`)
You create a dedicated file solely for defining the routing tree. This file imports all your page components and exports the `router` variable.
```javascript
export const router = createBrowserRouter([ ... ]);
```

### 2. `main.jsx`
You import the `router` from `router.jsx`, and you render `<RouterProvider>` directly inside the `createRoot` call.
```jsx
import { router } from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
```

### 3. `App.jsx`
Because `<RouterProvider>` is now the absolute root of the application, `App.jsx` is no longer the starting point! 

Instead, you use `App.jsx` as your **Root Layout**. It contains your global Navbar, your global Sidebar, and an `<Outlet />`. You pass it as the `element` to the very top `/` route in your `router.jsx` file.

This pattern provides excellent separation of concerns, keeping your routing definitions completely isolated from your UI components!
