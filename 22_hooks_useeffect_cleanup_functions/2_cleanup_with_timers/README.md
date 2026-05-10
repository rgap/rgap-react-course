# 2. Cleanup with Timers

Timers are the most common type of side effect that needs cleanup.

JavaScript has two timer functions:

```txt
setInterval → runs code repeatedly at an interval
setTimeout  → runs code once after a delay
```

Both return an ID that you use to cancel them.

---

## Cleanup Pattern: `setInterval`

```jsx
useEffect(() => {
  const intervalId = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
}, []);
```

The flow:

```txt
Component mounts
  ↓
setInterval starts (runs every 1 second)

Component unmounts
  ↓
Cleanup runs → clearInterval stops the timer
```

Without `clearInterval`, the interval would continue running in the background forever.

---

## Cleanup Pattern: `setTimeout`

```jsx
useEffect(() => {
  const timeoutId = setTimeout(() => {
    console.log("done");
  }, 3000);

  return () => {
    clearTimeout(timeoutId);
  };
}, []);
```

The flow:

```txt
Component mounts
  ↓
setTimeout starts (will run after 3 seconds)

Component unmounts before 3 seconds
  ↓
Cleanup runs → clearTimeout cancels the timeout
```

Without `clearTimeout`, the callback would still execute after 3 seconds even though the component is already gone. This can cause errors like:

```txt
Warning: Can't perform a React state update on an unmounted component.
```

---

## Why Both Need Cleanup

Even though `setTimeout` only runs once, the component might be removed **before** the timeout fires.

If you try to call `setState` inside a timeout after the component has been removed, you are updating state on a component that no longer exists.

Always clean up both `setInterval` and `setTimeout`.

---

## Summary

| Timer            | Start              | Cleanup              |
| ---------------- | ------------------ | -------------------- |
| `setInterval`    | `setInterval(fn)`  | `clearInterval(id)`  |
| `setTimeout`     | `setTimeout(fn)`   | `clearTimeout(id)`   |
