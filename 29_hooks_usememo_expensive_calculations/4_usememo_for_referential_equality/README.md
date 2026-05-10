# 4. `useMemo` for Referential Equality

We fix the referential equality problem by wrapping the object creation in `useMemo`.

## The Fix

```jsx
const config = useMemo(() => {
  return { mode: "dark" };
}, []); // Empty dependency array = never recreate this object
```

Now, during the first render, React runs the function and caches the object in memory.

On the second render, React checks the dependency array. Since it is empty (or its values haven't changed), React skips the function and **returns the exact same object reference** from the cache.

Now, `oldConfig === newConfig` is `true`!

---

## The Complete Pattern

```jsx
function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");

  // Only recreate this object if 'theme' changes
  const config = useMemo(() => {
    return { mode: theme };
  }, [theme]);

  // Now this effect only runs when 'theme' actually changes
  useEffect(() => {
    console.log("Config changed!");
  }, [config]);

  return <button onClick={() => setCount(c => c + 1)}>Click</button>;
}
```

---

## Does this apply to arrays?

Yes! Arrays are objects in JavaScript.

```jsx
// ❌ Recreates array every render, triggers effect every render
const colors = ["red", "green", "blue"];

// ✅ Same array reference every render, effect works correctly
const colors = useMemo(() => ["red", "green", "blue"], []);
```

---

## An Alternative Solution: Move it Outside

If an object or array **never changes**, you don't even need `useMemo`. Just move it outside the component!

```jsx
// ✅ Created once when the file loads. Same reference forever.
const config = { mode: "dark" };

function App() {
  useEffect(() => {
    // ...
  }, [config]);
}
```

You only need `useMemo` if the object depends on variables *inside* the component (like state or props).

---

## Summary of `useMemo`

`useMemo` has exactly two use cases:

1. **Performance:** Caching the result of a slow, expensive calculation.
2. **Referential Equality:** Keeping object/array references stable so they don't trigger unnecessary `useEffect` runs or child component re-renders.

Do not use it for anything else.
