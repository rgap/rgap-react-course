# 2. Focus an Input

The most common use case for `useRef` with DOM manipulation is **focusing an input**.

Focusing is an **imperative** action. There is no `focused` prop you can pass to an `<input>`. You must call `element.focus()` directly on the DOM node.

This is exactly what refs are designed for.

---

## Auto-Focus on Mount

A very common pattern is to focus an input when a component first appears:

```jsx
import { useRef, useEffect } from "react";

function SearchBar() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Search..." />;
}
```

The flow:

```txt
Component renders
  ↓
React commits JSX to the DOM
  ↓
inputRef.current = the real <input> node
  ↓
useEffect runs → inputRef.current.focus()
  ↓
The cursor appears inside the input ✅
```

---

## Focus on Button Click

You can also focus an input when the user performs an action:

```jsx
function LoginForm() {
  const emailRef = useRef(null);

  function handleFocusClick() {
    emailRef.current.focus();
  }

  return (
    <>
      <input ref={emailRef} type="email" />
      <button onClick={handleFocusClick}>Focus Email</button>
    </>
  );
}
```

This is safe because event handlers run **after** the DOM has been committed, so `ref.current` is always available inside them.

---

## Useful DOM Methods for Inputs

| Method               | What it does                        |
| -------------------- | ----------------------------------- |
| `ref.current.focus()` | Moves the cursor into the element  |
| `ref.current.blur()`  | Removes focus from the element     |
| `ref.current.select()`| Selects all text inside the input  |

---

## Why Can't We Use State for This?

Focusing is not about **what** to render. It is about **how** the browser should behave.

React state controls the UI output (JSX). But focus, scroll, and animation are browser behaviors that exist outside of React's rendering model.

That is why React calls refs an **escape hatch** — they let you escape from React's declarative world into the imperative browser DOM when necessary.
