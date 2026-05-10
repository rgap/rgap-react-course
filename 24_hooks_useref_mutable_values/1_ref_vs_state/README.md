# 1. Ref vs State

In module 23, we used `useRef` to access DOM elements. But `useRef` has a second, equally important use case: **storing mutable values that persist across renders without causing re-renders**.

---

## The Key Difference

| Feature              | `useState`                     | `useRef`                           |
| -------------------- | ------------------------------ | ---------------------------------- |
| Persists across renders | ✅ Yes                       | ✅ Yes                             |
| Triggers re-render   | ✅ Yes                         | ❌ No                              |
| When to read it      | During render (it's in JSX)    | In effects or event handlers       |
| Purpose              | Data that affects the UI       | Data that does NOT affect the UI   |

---

## How `useRef` Works as a Mutable Container

`useRef` returns an object with a single property:

```js
{ current: initialValue }
```

You can read and write `ref.current` freely. React will **never** react to changes on it.

```jsx
const myRef = useRef(0);

myRef.current = 42;       // No re-render
myRef.current = "hello";  // No re-render
myRef.current = [1, 2];   // No re-render
```

Think of it as a "box" that lives outside of React's rendering system.

---

## When to Use a Ref Instead of State

Use a ref when you need to remember something between renders, but that value **should not appear in the JSX output**.

Common examples:
- Timer IDs (`setInterval` / `setTimeout`)
- Previous values of state or props
- Render counters (for debugging)
- Whether a component has mounted before
- Accumulated values that don't need to show on screen

---

## The Rule

```txt
If changing the value should update the screen → use state.
If changing the value should NOT update the screen → use a ref.
```
