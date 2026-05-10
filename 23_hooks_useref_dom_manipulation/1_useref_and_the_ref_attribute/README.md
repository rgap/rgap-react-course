# 1. `useRef` and the `ref` Attribute

In module 18, we saw that `document.getElementById` is an anti-pattern in React because it bypasses React's Virtual DOM.

React provides a safe, built-in way to access real DOM elements: the `useRef` Hook combined with the `ref` attribute.

---

## What is `useRef`?

`useRef` is a React Hook that returns a **mutable ref object**:

```jsx
const myRef = useRef(initialValue);
```

The returned object has a single property:

```js
{ current: initialValue }
```

This object **persists across renders**. React never recreates it. It is the same object every time the component renders.

---

## Connecting a Ref to a DOM Element

To access a real DOM node, you:

1. Create a ref with `useRef(null)`.
2. Pass it to a JSX element's `ref` attribute.
3. After render, `myRef.current` is the DOM node.

```jsx
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function handleClick() {
    // inputRef.current is the real <input> DOM element
    console.log(inputRef.current);
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Log the input</button>
    </>
  );
}
```

---

## When is `ref.current` Available?

The ref is `null` during the first render because the DOM node does not exist yet.

After React commits the JSX to the real DOM, it sets `ref.current` to the DOM node.

```txt
Render phase
  ↓
ref.current is null

Commit phase
  ↓
React sets ref.current = DOM node

Effect phase
  ↓
ref.current is the real DOM element ✅
```

That is why you should access `ref.current` inside:
- Event handlers (like `onClick`)
- `useEffect` callbacks

Never try to read `ref.current` during render.

---

## Why Not `document.getElementById`?

| `document.getElementById`          | `useRef` + `ref`                      |
| ---------------------------------- | ------------------------------------- |
| Searches the entire DOM            | Points directly to the node           |
| Breaks if multiple instances exist | Each component gets its own ref       |
| Bypasses React's Virtual DOM       | Works with React's rendering model    |
| Requires manual ID management      | No IDs needed                         |

---

## Important Note

Changing `ref.current` does **not** trigger a re-render. React does not watch it. This is by design — refs are for values you need to persist but that do not affect the UI output.
