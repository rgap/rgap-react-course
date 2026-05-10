# 3. Global Pending UI

In the previous lesson, we learned that React Router waits for loaders to finish before rendering the new component.

But there is a major User Experience (UX) problem with this.

If a user clicks a "Profile" link, and the loader takes 2 seconds to fetch the data, **the screen does absolutely nothing for 2 seconds.** The URL changes instantly, but the page doesn't change. The user will think the website is broken and will likely click the link 5 more times.

We must provide visual feedback that a navigation is currently pending.

---

## `useNavigation`

React Router provides a hook called `useNavigation` (not to be confused with `useNavigate`!).

`useNavigation` returns an object containing information about the current state of the router itself.

```javascript
import { useNavigation } from "react-router-dom";

function RootLayout() {
  const navigation = useNavigation();
  // navigation.state can be "idle", "loading", or "submitting"
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {/* Global Progress Bar */}
      {isLoading && <div className="spinner">Loading...</div>}
      
      {/* Fade out the old content while the new content loads */}
      <main style={{ opacity: isLoading ? 0.5 : 1 }}>
        <Outlet />
      </main>
    </div>
  );
}
```

By placing this hook in your Root Layout (`App.jsx`), you instantly gain a global loading state that works for **every single route** in your application. You never have to manually track `isLoading` in individual components again!
