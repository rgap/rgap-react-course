# 4. Cleanup & `AbortController`

Fetching data isn't just about loading it; it's about handling what happens when the user changes their mind.

---

## The Race Condition Problem

Imagine you have a Profile component that fetches data based on a `userId` prop.

1. The user clicks "View Profile 1". The app starts fetching `api.com/users/1`. This is a very slow request (takes 3 seconds).
2. After 1 second, the user gets bored and clicks "View Profile 2". 
3. The app starts fetching `api.com/users/2`. This is a very fast request (takes 1 second).
4. `users/2` finishes. The screen displays Profile 2.
5. One second later, `users/1` FINALLY finishes. The screen suddenly flashes and displays Profile 1!

The user clicked Profile 2, but the screen is showing Profile 1. **This is a Race Condition.** The older, slower request overwrote the newer, faster request.

---

## The Solution: Canceling Fetches

If the user clicks "View Profile 2", we should completely cancel and destroy the pending network request for Profile 1.

We do this using the browser's built-in `AbortController` API, combined with the `useEffect` cleanup function.

### Step 1: Create the Controller
Inside the effect, create a new `AbortController`.

```jsx
useEffect(() => {
  const controller = new AbortController();
  // ...
```

### Step 2: Attach the Signal
Pass the controller's `signal` to the `fetch` options object.

```jsx
  const res = await fetch(`api/users/${userId}`, {
    signal: controller.signal
  });
```

### Step 3: Call Abort on Cleanup
Return a cleanup function from your effect that calls `controller.abort()`. 

If the component unmounts, or if the `userId` dependency changes, React will run the cleanup function and instantly kill the old network request!

```jsx
  return () => {
    controller.abort();
  };
}, [userId]);
```

### Step 4: Handle the Abort Error
When you abort a fetch, the Promise rejects and throws a specific error called an `AbortError`. You should check for this in your `catch` block so you don't accidentally display a red error message to the user just because they clicked a button really fast!

```jsx
catch (err) {
  if (err.name === "AbortError") {
    // Do nothing! This was an intentional cancellation.
    console.log("Fetch aborted");
  } else {
    // This was a real network error
    setError(err.message);
  }
}
```

This pattern is a hallmark of professional, production-grade React code.
