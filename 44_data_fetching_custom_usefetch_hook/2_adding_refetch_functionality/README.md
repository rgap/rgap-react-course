# 2. Adding `refetch` Functionality

Our basic `useFetch` hook is great, but it has a limitation: it only fetches data when the component first mounts, or when the `url` changes.

What if the user clicks a "Refresh" button? The URL hasn't changed, so the `useEffect` won't re-run.

---

## The Trigger Trick

We can force the `useEffect` to re-run by adding a dummy state variable to its dependency array.

```javascript
// 1. Create a dummy state variable
const [trigger, setTrigger] = useState(0);

// 2. Add it to the dependency array
useEffect(() => {
  // ... fetch logic
}, [url, trigger]);

// 3. Create a function that updates the dummy state
const refetch = () => {
  setTrigger(prev => prev + 1);
};
```

Whenever `refetch()` is called, `trigger` changes from `0` to `1`. Because `trigger` is in the dependency array, React says *"Ah! A dependency changed! I must re-run the effect!"*

We then return `refetch` from our hook so the component can use it!

```javascript
return { data, isLoading, error, refetch };
```

*(Note: We wrap the `refetch` function in a `useCallback` hook before returning it, to ensure that the function reference doesn't change on every render, which could cause unnecessary re-renders in child components).*
