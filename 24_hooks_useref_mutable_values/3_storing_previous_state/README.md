# 3. Storing Previous State

A very common pattern is to remember the **previous value** of a piece of state.

React does not provide a built-in way to do this. But we can build it ourselves with `useRef` and `useEffect`.

---

## The Pattern

```jsx
const [count, setCount] = useState(0);
const prevCountRef = useRef(undefined);

useEffect(() => {
  prevCountRef.current = count;
}); // Runs after every render
```

---

## How It Works Step by Step

```txt
First render (count = 0)
  ↓
During render: prevCountRef.current is undefined
  ↓
JSX returned: "Current: 0, Previous: (none)"
  ↓
After render: useEffect runs → prevCountRef.current = 0

User clicks +1 (count = 1)
  ↓
During render: prevCountRef.current is still 0 (from last effect)
  ↓
JSX returned: "Current: 1, Previous: 0"
  ↓
After render: useEffect runs → prevCountRef.current = 1

User clicks +1 (count = 2)
  ↓
During render: prevCountRef.current is still 1
  ↓
JSX returned: "Current: 2, Previous: 1"
  ↓
After render: useEffect runs → prevCountRef.current = 2
```

The trick is that `useEffect` runs **after** render. So during render, the ref still holds the value from the **last** render. Then after this render completes, we update the ref to the current value.

---

## Why a Ref and Not State?

If we stored the previous value in state:

```jsx
useEffect(() => {
  setPrevCount(count); // ❌ This triggers ANOTHER re-render!
});
```

This would cause an infinite loop of re-renders. Every render would trigger a state update, which would trigger another render.

A ref avoids this because writing to `ref.current` does **not** trigger a re-render.

---

## The Custom Hook Version

This pattern is so common that people often extract it into a custom hook:

```jsx
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

// Usage:
const prevCount = usePrevious(count);
```
