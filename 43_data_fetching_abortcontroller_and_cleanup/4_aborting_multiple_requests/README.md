# 4. Aborting Multiple Requests

In the previous module, we learned how to use `Promise.all` to fetch multiple datasets in parallel.

How do we implement cancellation for multiple requests? Do we need multiple `AbortControllers`?

**No!**

---

## One Signal, Many Requests

An `AbortController` exposes a `signal` property. You can pass that exact same `signal` to as many `fetch()` calls as you want.

When you call `controller.abort()`, every single `fetch` that is listening to that signal is instantly killed simultaneously!

```jsx
useEffect(() => {
  const controller = new AbortController();

  const loadDashboard = async () => {
    try {
      // Pass the SAME signal to both requests
      const req1 = fetch("/api/users", { signal: controller.signal });
      const req2 = fetch("/api/posts", { signal: controller.signal });

      const [res1, res2] = await Promise.all([req1, req2]);
      // ...
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Both requests were successfully aborted!");
      }
    }
  };

  loadDashboard();

  return () => {
    // This instantly kills both req1 and req2
    controller.abort(); 
  };
}, [userId]);
```

This is incredibly powerful because it means no matter how complex your data fetching logic gets, the cleanup function remains exactly one line of code: `controller.abort()`.
