# 4. Auto Retry Logic

Mobile networks are flaky. Sometimes a user drives through a tunnel, and for exactly 2 seconds, they lose internet access.

If they happen to open your app during those 2 seconds, the `fetch` will fail. It is a terrible User Experience to instantly show them a massive red "CRITICAL ERROR" screen just because of a momentary blip.

Professional applications implement **Automatic Retries**.

---

## How to build an Auto-Retry

The easiest way to build a retry mechanism in React is to use the `useEffect` dependency array.

1. Create a `retryCount` state variable.
2. Add `retryCount` to the `useEffect` dependencies.
3. In your `catch` block, check if `retryCount < MAX_RETRIES`.
4. If it is, use `setTimeout` to wait a few seconds, then update `retryCount`.
5. Because `retryCount` changed, React automatically re-runs the `useEffect`, attempting the fetch again!

```jsx
const MAX_RETRIES = 3;
const [retryCount, setRetryCount] = useState(0);

useEffect(() => {
  const loadData = async () => {
    try {
      const res = await fetch("...");
      if (!res.ok) throw new Error("Failed");
      // ... success!
    } catch (err) {
      if (retryCount < MAX_RETRIES) {
        // Wait 2 seconds, then retry!
        setTimeout(() => setRetryCount(prev => prev + 1), 2000);
      } else {
        // Give up and show the error to the user
        setError(err.message);
      }
    }
  };
  
  loadData();
}, [retryCount]); // <- Re-runs when retryCount increments!
```

---

## Retries in Production

While building this yourself is great practice, in production, you should almost always use a library like **React Query** (`@tanstack/react-query`).

React Query has auto-retries built into it by default, utilizing an advanced algorithm called "Exponential Backoff" (e.g., it waits 1 second for the first retry, 2 seconds for the second, 4 seconds for the third, to avoid overloading the server).
