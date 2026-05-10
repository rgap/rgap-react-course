# 3. Cleanup with Event Listeners

Another very common side effect is adding event listeners to `window`, `document`, or other DOM elements.

If you add a listener in a `useEffect`, you **must** remove it in the cleanup function.

---

## The Pattern

```jsx
useEffect(() => {
  function handleEvent(event) {
    // do something
  }

  window.addEventListener("eventname", handleEvent);

  return () => {
    window.removeEventListener("eventname", handleEvent);
  };
}, []);
```

---

## Critical Rule: Same Function Reference

`removeEventListener` only works if you pass the **exact same function** that you used with `addEventListener`.

This does NOT work:

```jsx
// ❌ BAD: Two different arrow functions
useEffect(() => {
  window.addEventListener("mousemove", (e) => {
    console.log(e.clientX);
  });

  return () => {
    // This is a DIFFERENT function! It will not remove the listener.
    window.removeEventListener("mousemove", (e) => {
      console.log(e.clientX);
    });
  };
}, []);
```

This works:

```jsx
// ✅ GOOD: Same function reference
useEffect(() => {
  function handleMouseMove(e) {
    console.log(e.clientX);
  }

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);
```

The key is to define the handler as a **named function** inside the effect, and then use that name in both `addEventListener` and `removeEventListener`.

---

## Common Event Listeners That Need Cleanup

| Event              | Use case                          |
| ------------------ | --------------------------------- |
| `mousemove`        | Track mouse position              |
| `scroll`           | Track scroll position             |
| `resize`           | Respond to window size changes    |
| `keydown` / `keyup`| Keyboard shortcuts                |
| `online` / `offline`| Detect network status            |

All of these follow the exact same setup/cleanup pattern.

---

## Why Cleanup Matters Here

Without cleanup, every time the component mounts, a **new** listener is added to `window`.

If the user navigates back and forth 10 times, there will be 10 listeners running at the same time, all doing the same work.

This wastes CPU, causes duplicate updates, and can lead to strange bugs.
