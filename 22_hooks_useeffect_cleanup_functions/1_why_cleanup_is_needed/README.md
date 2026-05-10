# 1. Why Cleanup is Needed

In the previous modules, we learned that `useEffect` runs code **after** the render.

But what happens when a component is **removed** from the screen?

If your effect started something (a timer, a listener, a connection), that something keeps going even after the component is gone.

---

## The Problem: Memory Leaks

A **memory leak** happens when your app creates resources that are never released.

Example without cleanup:

```jsx
useEffect(() => {
  const intervalId = setInterval(() => {
    console.log("Still running!");
  }, 1000);

  // No cleanup!
}, []);
```

What happens:

```txt
Component mounts
  ↓
Interval starts

Component unmounts
  ↓
Interval is STILL running ❌
```

The interval has no way to know that the component is gone. It will keep running in the background until the user refreshes the page.

If the user navigates back and forth, a **new interval** is created each time. After 10 visits, there will be 10 intervals running at the same time!

---

## What Needs Cleanup?

Any effect that **starts** something should **stop** it when done:

| What the effect starts         | What the cleanup should do       |
| ------------------------------ | -------------------------------- |
| `setInterval`                  | `clearInterval`                  |
| `setTimeout`                   | `clearTimeout`                   |
| `addEventListener`             | `removeEventListener`            |
| `fetch` with `AbortController` | `controller.abort()`             |
| WebSocket connection           | `socket.close()`                 |
| `IntersectionObserver`         | `observer.disconnect()`          |

---

## The Solution: Return a Cleanup Function

React lets you return a function from inside `useEffect`. This returned function is called the **cleanup function**.

```jsx
useEffect(() => {
  // Setup: start something
  const intervalId = setInterval(() => {
    console.log("Running");
  }, 1000);

  // Cleanup: stop it
  return () => {
    clearInterval(intervalId);
  };
}, []);
```

React will call your cleanup function:

1. **When the component unmounts** (is removed from the screen).
2. **Before re-running the effect** (when dependencies change).

---

## Simple Mental Model

Think of every effect as a pair:

```txt
Setup   → start something
Cleanup → stop it
```

If your effect starts something, always ask yourself:

> "What should happen when this component disappears?"

The answer is your cleanup function.
