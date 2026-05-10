# 2. Storing a Timer ID

The most practical example of using `useRef` for a mutable value is **storing a timer ID**.

---

## The Problem

When you call `setInterval` or `setTimeout`, JavaScript returns an ID:

```js
const id = setInterval(() => { ... }, 1000);
```

You need this ID later to stop the timer:

```js
clearInterval(id);
```

But where do you store this ID between renders?

---

## Why Not State?

```jsx
// ❌ BAD: Storing timer ID in state
const [timerId, setTimerId] = useState(null);

function start() {
  const id = setInterval(() => { ... }, 1000);
  setTimerId(id); // This causes a re-render!
}
```

When you call `setTimerId(id)`, React re-renders the component. But the timer ID is not something that needs to appear on the screen. The re-render is wasted work.

---

## Why a Ref?

```jsx
// ✅ GOOD: Storing timer ID in a ref
const timerRef = useRef(null);

function start() {
  timerRef.current = setInterval(() => { ... }, 1000);
  // No re-render! The value is silently stored.
}

function stop() {
  clearInterval(timerRef.current);
  timerRef.current = null;
}
```

The ref stores the ID silently without triggering any re-renders.

---

## The Complete Pattern

```jsx
const intervalRef = useRef(null);

function start() {
  intervalRef.current = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);
}

function stop() {
  clearInterval(intervalRef.current);
  intervalRef.current = null;
}

// Always clean up on unmount
useEffect(() => {
  return () => clearInterval(intervalRef.current);
}, []);
```

---

## Rule of Thumb

If you need a value to:
- Survive across renders ✅
- Be writable from event handlers ✅
- NOT trigger a re-render when changed ✅
- NOT appear in JSX ✅

Then use a **ref**.
