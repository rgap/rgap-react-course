# 3. `useCallback` vs `useMemo`

People often confuse `useCallback` and `useMemo` because their syntax is identical and they both solve referential equality problems.

What is the difference?

---

## The Core Difference

- **`useMemo`** caches the **result** of a function.
- **`useCallback`** caches the **function itself**.

```jsx
// Returns an array: [1, 2, 3]
const memoizedValue = useMemo(() => {
  return [1, 2, 3];
}, []);

// Returns a function: () => [1, 2, 3]
const memoizedFunction = useCallback(() => {
  return [1, 2, 3];
}, []);
```

---

## They Are Under the Hood the Same

In fact, `useCallback` is just a shortcut for `useMemo` returning a function!

These two are exactly equivalent:

```jsx
// Option A: useMemo returning a function
const sayHello = useMemo(() => {
  return () => console.log("Hello");
}, []);

// Option B: useCallback (cleaner syntax)
const sayHello = useCallback(() => {
  console.log("Hello");
}, []);
```

Because returning a function from inside another function looks messy (Option A), React team gave us `useCallback` (Option B) to make the code cleaner.

---

## Summary Cheat Sheet

| Hook | What does it cache? | What does it return? | Primary Use Case |
|---|---|---|---|
| `useMemo` | The return value | A value (array, object, number) | 1. Expensive calculations <br> 2. Object/Array referential equality |
| `useCallback` | The function definition | A function | 1. Function referential equality |
