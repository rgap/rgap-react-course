# 3. Fixing Stale Closures with Functional Updates

If you have a stale closure because you are updating state based on the previous state, the best way to fix it is using a **functional state update**.

Instead of doing this:
```jsx
setCount(count + 1); // Relies on 'count' from the closure
```

You can pass a function to your state setter:
```jsx
setCount(prevCount => prevCount + 1); // Asks React for the latest state!
```

## How to use it in useEffect

When you use the functional updater, your effect function no longer reads the `count` variable from the outer scope.

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  const timerId = setInterval(() => {
    // We don't use 'count' anymore!
    setCount(prevCount => prevCount + 1); 
  }, 1000);

  return () => clearInterval(timerId);
}, []); // <-- We can safely leave this empty!
```

### Why is this the best solution?

1. **No Stale Closure:** The interval doesn't need to capture the `count` variable anymore. When it runs `prevCount => prevCount + 1`, React guarantees that `prevCount` is the absolute most recent value of the state.
2. **Better Performance:** Because we don't rely on `count`, we don't need it in our dependency array. This means our effect only runs **once** on mount. We create the interval once, and we clear it once. We don't waste time destroying and recreating it every second.

## The Golden Rule

> If your effect needs to update state based on the previous state, always use the functional updater `setState(prev => prev + new)`. This allows you to remove the state variable from your dependency array!
