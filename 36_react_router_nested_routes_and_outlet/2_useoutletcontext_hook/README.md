# 2. The `useOutletContext` Hook

To retrieve the data passed into an `<Outlet />`, React Router gives us the `useOutletContext` hook.

---

## How it works

If your layout provides context:

```jsx
function Layout() {
  const [theme, setTheme] = useState("dark");
  
  return (
    <div>
      <Sidebar />
      {/* 1. Pass data into context */}
      <Outlet context={{ theme, setTheme }} />
    </div>
  );
}
```

Any component rendered *inside* that Outlet can retrieve it:

```jsx
import { useOutletContext } from "react-router-dom";

function ChildRoute() {
  // 2. Extract data from context
  const { theme, setTheme } = useOutletContext();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("light")}>Change Theme</button>
    </div>
  );
}
```

---

## Why not just use React Context?

You might be wondering: *"Why do we need `useOutletContext`? Couldn't we just use React's built-in `createContext` and `useContext`?"*

Yes, you absolutely could!

```jsx
const ThemeContext = createContext();

function Layout() {
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Sidebar />
      <Outlet />
    </ThemeContext.Provider>
  )
}
```

However, `useOutletContext` is highly specialized for routing.
1. **Less Boilerplate:** You don't have to create a separate file to export the context object.
2. **Coupled to the Route:** The context is strictly scoped to the child routes of that specific layout.

**Rule of Thumb:**
- Use **`useOutletContext`** for state that is *only* needed by a specific section of your app (e.g., Dashboard Layout state).
- Use standard **React Context (`useContext`)** for global state that is needed everywhere across all routes (e.g., Global Auth, Global Theme).
