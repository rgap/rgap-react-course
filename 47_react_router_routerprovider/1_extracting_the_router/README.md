# 1. Extracting the Router

In the previous module, we placed `createBrowserRouter` and `<RouterProvider>` directly inside `App.jsx`.

That works for simple demonstrations, but it is not how larger React applications are usually structured. A real application can have dozens or even hundreds of routes. If all those routes stay inside `App.jsx`, the file quickly becomes too large, hard to read, and difficult to maintain.

So instead of keeping the router inside `App.jsx`, we usually extract it into its own file.

Before looking at the structure, it helps to understand the relationship between the `router` object and `RouterProvider`.

---

## Provider and Consumer

In computer science, a **provider** is something that supplies a resource, service, configuration, or behavior to other parts of a system.

A **consumer** is something that uses what the provider supplies.

In simple terms:

```text
Provider = gives access to something
Consumer = uses what was provided
````

In this React Router example, the provider is:

```jsx
<RouterProvider router={router} />
```

`RouterProvider` receives the `router` object and provides routing behavior to the rest of the application.

The `router` object contains the route configuration:

```jsx
export const router = createBrowserRouter([
  // routes here
]);
```

So the relationship is:

```text
router object
→ contains the route configuration

RouterProvider
→ provides that routing system to React

Route components
→ consume the routing system
```

The consumers are the components that use React Router features, such as:

```jsx
<Link />
<NavLink />
<Outlet />
useNavigate()
useParams()
useLoaderData()
useActionData()
```

For example, `App.jsx` becomes a consumer because it uses:

```jsx
<Outlet />
```

`Outlet` consumes the routing context provided by `RouterProvider` and renders the matching child route.

So the architecture becomes:

```text
main.jsx
  RouterProvider provides the router

router.jsx
  Defines what routes exist

App.jsx
  Consumes the router context through Outlet

Page components
  Consume the router context through links, params, loaders, navigation, etc.
```

The important idea is this:

`RouterProvider` is not just a visual wrapper. It is the component that gives the whole application access to the routing system.

---

## The Standard Architecture

A common architecture for React Router Data Router applications is to separate the routing setup into three main files:

```text
main.jsx
router.jsx
App.jsx
```

Each file has a specific responsibility.

---

### 1. `router.jsx` or `router.js`

This file is responsible for defining the routing tree.

It imports the page components, creates the router, and exports it.

```jsx
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  // routes here
]);
```

This keeps the route configuration in one dedicated place.

Instead of mixing routing logic with the main application component, the routing structure lives in its own file.

---

### 2. `main.jsx`

This file is responsible for starting the React application.

It imports the `router` from `router.jsx` and passes it to `<RouterProvider>`.

```jsx
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

Now `RouterProvider` becomes the root of the application.

That means the entire React app has access to the routing system.

---

### 3. `App.jsx`

Because `<RouterProvider>` is now the root of the application, `App.jsx` is no longer the file that directly starts the app.

Instead, `App.jsx` becomes the **Root Layout**.

A root layout is a component that contains UI shared by multiple pages, such as:

```text
Navbar
Sidebar
Footer
Main layout structure
Outlet
```

For example:

```jsx
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}
```

The `<Outlet />` is important because it marks where the matching child route should be rendered.

So instead of rendering `App.jsx` directly in `main.jsx`, we use it inside the router configuration as the top-level layout route.

```jsx
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // child routes here
    ],
  },
]);
```

In this structure, `App.jsx` is no longer responsible for creating or providing the router. Its job is to define the shared layout of the application.

---

## Final Mental Model

The final structure looks like this:

```text
main.jsx
  Starts React
  Renders RouterProvider
  Provides the router to the whole app

router.jsx
  Defines the route configuration
  Decides which components belong to which paths

App.jsx
  Acts as the Root Layout
  Renders shared UI
  Uses Outlet to display child routes

Page components
  Represent individual screens
  Use router features when needed
```

This separation makes the application easier to scale.

Instead of having one giant `App.jsx` file that does everything, each file has a clear responsibility:

```text
main.jsx     → starts the app
router.jsx   → defines the routes
App.jsx      → defines the layout
pages        → define the screens
```

This is the main reason we extract the router.

It keeps routing definitions separate from UI components, makes the project easier to navigate, and prepares the application for more advanced React Router features such as loaders, actions, error elements, nested routes, and layouts.
