# 2. `useCallback` Syntax

We fix the function referential equality problem by wrapping the function definition in `useCallback`.

## The Syntax

`useCallback` takes two arguments:
1. The **function** you want to cache.
2. A **dependency array**.

```jsx
import { useCallback } from "react";

const sayHello = useCallback(() => {
  console.log("Hello, " + name);
}, [name]); 
```

---

## How It Works

```txt
First Render
  ↓
React creates the function.
React saves (caches) the function in memory.
React returns the function.

Re-Render
  ↓
React checks the dependency array.
  Did 'name' change?
    Yes → Create a new function, save it, return it.
    No  → Skip creation, return the EXACT SAME function from cache.
```

Because the function reference stays the same, any `useEffect` that depends on it will not run unnecessarily!

---

## The Complete Pattern

```jsx
function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");

  // Only recreate this function if 'count' changes
  const fetchData = useCallback(() => {
    return api.get(`/data?count=${count}`);
  }, [count]);

  // Now this effect only runs when 'fetchData' actually changes
  // (which only happens when 'count' changes)
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <button onClick={() => setTheme("light")}>Toggle Theme</button>;
}
```

Now, toggling the theme will NOT trigger the API call!

---

## Alternative Solution: Move it Outside

Just like with objects, if a function does not use any state or props from inside the component, you don't need `useCallback`. **Just move it outside the component!**

```jsx
// ✅ Created once when the file loads. Same reference forever.
const sayHello = () => {
  console.log("Hello!");
};

function App() {
  useEffect(() => {
    sayHello();
  }, [sayHello]);
}
```

You only need `useCallback` if the function relies on variables *inside* the component.
