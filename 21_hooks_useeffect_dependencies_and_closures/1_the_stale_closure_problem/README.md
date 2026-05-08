# 1. The Stale Closure Problem

In React, `useEffect` relies heavily on a JavaScript concept called **Closures**.

When a component renders, the function inside `useEffect` "remembers" the variables (state and props) exactly as they were **during that specific render**.

## The Problem

Look at this common beginner mistake:

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  const timerId = setInterval(() => {
    // count is 0 here!
    setCount(count + 1); 
  }, 1000);

  return () => clearInterval(timerId);
}, []); // <-- We told React: "Never run this effect again."
```

### What happens?

1. **First Render:** `count` is `0`. The `useEffect` runs. It creates an interval.
2. Inside that interval, the code says: `setCount(0 + 1)`.
3. **Second Render:** `count` becomes `1`. The UI updates.
4. Does the `useEffect` run again? **NO.** The dependency array is `[]`.
5. A second later, the interval runs again. What does it see? It still sees the `count` from the **first render**. It says `setCount(0 + 1)`.

The state will stay at `1` forever. 

## The Name: "Stale Closure"

The interval function "closed over" the variables from the first render. Because the effect never runs again to give it fresh variables, the variables it sees are old, or **stale**.

We call this a **stale closure**. 

To fix this, we need to stop lying to React about our dependencies!
