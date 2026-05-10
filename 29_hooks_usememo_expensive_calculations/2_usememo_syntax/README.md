# 2. `useMemo` Syntax

To prevent an expensive calculation from running on every render, we use the `useMemo` hook.

## The Syntax

`useMemo` takes two arguments:
1. A **callback function** that calculates and returns the value.
2. A **dependency array** (just like `useEffect`).

```jsx
import { useMemo } from "react";

const cachedValue = useMemo(() => {
  return doExpensiveMath(data);
}, [data]);
```

---

## How It Works

```txt
First Render
  ↓
React runs the callback function
React saves (caches) the result
React returns the result

Re-Render
  ↓
React checks the dependency array
  Did 'data' change?
    Yes → Run callback again, save new result, return new result
    No  → Skip callback, return the saved result
```

---

## `useMemo` vs `useEffect`

The syntax is identical, but their purposes are entirely different.

| Hook | Purpose | Return Value | When it runs |
|---|---|---|---|
| `useEffect` | **Doing things** (side effects) | Returns `undefined` | **After** render |
| `useMemo` | **Calculating things** (values) | Returns a value | **During** render |

You cannot use `useEffect` to calculate a value that you want to render in JSX, because `useEffect` runs after the screen has already updated.

---

## The Rule of Thumb: Don't Prematurely Optimize

You might think: *"Wow, `useMemo` is great! I should wrap every variable in it so my app is blazing fast!"*

**Do not do this.**

```jsx
// ❌ Bad: Premature optimization
const fullName = useMemo(() => {
  return firstName + " " + lastName;
}, [firstName, lastName]);
```

String concatenation takes less than 0.1 milliseconds. `useMemo` actually adds overhead because React has to check the dependency array and manage memory for the cache. By using `useMemo` here, you are making your app slightly **slower** and the code much harder to read.

### When to use `useMemo`:
1. The calculation involves iterating over large arrays (thousands of items).
2. The calculation involves complex math or parsing large strings/objects.
3. You are noticing actual lag in your application.

If you don't know if a calculation is slow, it probably isn't. Only use `useMemo` when you need it.
