# 4. Cleanup with AbortController

When you fetch data inside `useEffect`, you need a way to **cancel** the request if:

1. The component unmounts before the response arrives.
2. The dependencies change and a new fetch starts before the old one finishes.

JavaScript provides `AbortController` for exactly this purpose.

---

## The Problem: Race Conditions

Imagine the user clicks rapidly through a list of items:

```txt
Click "User 1" → fetch starts for User 1
Click "User 2" → fetch starts for User 2
Click "User 3" → fetch starts for User 3
```

All three requests are now in-flight at the same time.

Which one finishes first? We don't know. The network is unpredictable.

If the fetch for User 1 finishes **last**, the UI will show User 1's data even though the user asked for User 3. This is called a **race condition**.

---

## The Solution: AbortController

`AbortController` is a built-in browser API that lets you cancel a `fetch` request.

```js
const controller = new AbortController();

// Pass the signal to fetch
fetch(url, { signal: controller.signal });

// Cancel the request
controller.abort();
```

When you call `controller.abort()`, the fetch promise rejects with an `AbortError`.

---

## The Pattern in useEffect

```jsx
useEffect(() => {
  const controller = new AbortController();

  async function fetchData() {
    try {
      const response = await fetch(url, { signal: controller.signal });
      const data = await response.json();
      setData(data);
    } catch (err) {
      if (err.name === "AbortError") {
        // We cancelled it on purpose. This is fine.
        console.log("Fetch cancelled");
      } else {
        // A real error happened.
        setError(err.message);
      }
    }
  }

  fetchData();

  return () => {
    controller.abort();
  };
}, [url]);
```

---

## The Flow

```txt
userId changes to 1
  ↓
Effect runs → fetch starts for User 1

userId changes to 2
  ↓
Cleanup runs → aborts fetch for User 1
Effect runs → fetch starts for User 2

userId changes to 3
  ↓
Cleanup runs → aborts fetch for User 2
Effect runs → fetch starts for User 3

Fetch for User 3 finishes
  ↓
State updates → UI shows User 3 ✅
```

Only the **last** fetch is allowed to complete.

---

## Why Check for `AbortError`?

When you call `controller.abort()`, the `fetch` promise throws an error with `name: "AbortError"`.

This is not a real problem. We did it on purpose.

So we check for it in the `catch` block and ignore it:

```js
catch (err) {
  if (err.name === "AbortError") {
    // Intentional cancellation, do nothing
  } else {
    // Real error, show it to the user
    setError(err.message);
  }
}
```

---

## Summary

| Concept             | Purpose                                      |
| ------------------- | -------------------------------------------- |
| `AbortController`   | Creates a controller that can cancel a fetch  |
| `controller.signal`  | Passed to `fetch` to link it to the controller|
| `controller.abort()` | Cancels the fetch request                     |
| `AbortError`        | The error thrown when a fetch is cancelled     |

This is the correct way to handle data fetching cleanup in React.
