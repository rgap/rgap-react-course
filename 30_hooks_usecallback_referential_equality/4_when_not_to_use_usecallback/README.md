# 4. When NOT to use useCallback

Just like with `useMemo`, developers often over-use `useCallback`, thinking they are optimizing their application.

This is **premature optimization** and it often makes applications worse.

---

## The Myth

> "Recreating functions on every render is slow."

**Fact:** Creating functions in modern JavaScript is incredibly fast. You will never notice a performance drop from defining an `onClick` handler inside a component, even if it re-renders 60 times a second.

---

## Why Over-Using it is Bad

```jsx
// ❌ BAD
const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);

return <button onClick={handleClick}>Click</button>
```

When you do this:
1. You make the code harder to read.
2. You have to maintain the dependency array (which is easy to mess up).
3. **You are making React do more work.** React has to allocate memory for the cache, check the dependency array on every render, and manage the references.

---

## HTML Elements Don't Care

If you are passing a function to an HTML element (like `<button>` or `<input>`), `useCallback` does absolutely nothing.

HTML elements don't use `useEffect`. They don't check for referential equality. Passing a new function to `onClick` is perfectly safe and expected in React.

---

## The Rule

Only use `useCallback` in **two specific situations**:

### 1. The function is used in a dependency array

```jsx
const fetchData = useCallback(() => { ... }, []);

useEffect(() => {
  fetchData();
}, [fetchData]); // ✅ Needed here so the effect doesn't infinite loop
```

### 2. The function is passed to a `React.memo` component

If you have heavily optimized a child component using `React.memo` (which prevents it from re-rendering unless its props change), you MUST use `useCallback` for any function props. Otherwise, the new function reference will break the `React.memo` optimization.

```jsx
const handleSubmit = useCallback(() => { ... }, []);

// ✅ Needed here so HeavyChart doesn't re-render
return <HeavyChart onSubmit={handleSubmit} />
```

*(We will cover `React.memo` in a future module!)*

If your situation is not #1 or #2, **do not use `useCallback`**. Write a plain function.
