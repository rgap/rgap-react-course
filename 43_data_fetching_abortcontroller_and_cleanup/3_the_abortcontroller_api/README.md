# 3. The `AbortController` API

To fix both Memory Leaks and Race Conditions, we must have a way to **cancel** a pending `fetch()` request.

JavaScript provides a built-in API for this called the `AbortController`.

---

## The Four Steps of Cancellation

Implementing the AbortController pattern in a React `useEffect` involves 4 strict steps:

### 1. Instantiate the Controller
At the very top of your `useEffect`, create a new instance.
```javascript
const controller = new AbortController();
```

### 2. Pass the Signal
The controller contains a property called `signal`. You must pass this into the options object of your `fetch` call. This connects the fetch to the controller.
```javascript
const res = await fetch("api/data", { signal: controller.signal });
```

### 3. Cleanup Function
Return a cleanup function from your `useEffect`. Inside it, call the `abort()` method.
```javascript
return () => {
  controller.abort();
}
```
*Why? If the component unmounts, or if the dependency array changes, React will run this cleanup function. `controller.abort()` instantly kills the fetch request.*

### 4. Catch the `AbortError`
When a fetch is aborted, the Promise throws an Error. This is a good thing! But we must handle it in our `catch` block so it doesn't trigger our UI error state.

```javascript
catch (err) {
  if (err.name === "AbortError") {
    // Intentionally cancelled. Do nothing!
    return; 
  }
  // Otherwise, it's a real error (like 500 Server Error)
  setError(err.message);
}
```

This pattern guarantees that your component will never try to update state with stale, out-of-order data.
