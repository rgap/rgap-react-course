# 4. The Fallback Element

We used `useNavigation` to show a global loading state during transitions between pages.

But what happens when the user types `www.myapp.com` into their browser and presses Enter for the very first time?

---

## The Initial Load Problem

If your **Root Layout** (`/`) has a `loader` attached to it (for example, to verify if the user has a valid session cookie before rendering the app), React Router must execute that loader *before* rendering the Root Layout.

This means your `App.jsx` component is completely blocked from rendering! 

Because `App.jsx` hasn't rendered, your `<header>` and your `useNavigation` spinner haven't rendered either. The user will see a completely blank white screen until the root loader finishes.

---

## `fallbackElement`

To solve this, the `<RouterProvider>` component accepts a prop called `fallbackElement`.

This element is rendered by React Router specifically during the **Initial Hydration** phase (when the app is first booting up and root loaders are running). 

```jsx
// src/main.jsx
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function AppLoader() {
  return <div className="fullscreen-spinner">Starting App...</div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider 
    router={router} 
    fallbackElement={<AppLoader />} // <--- Rendered during initial boot!
  />
);
```

Once the root loader finishes, the `fallbackElement` is permanently destroyed, and your `App.jsx` mounts and takes over using `useNavigation` for all subsequent route changes.

*(Note: Test this out by refreshing the page. You will see the Initializing Screen for 3 seconds before the app boots!)*
