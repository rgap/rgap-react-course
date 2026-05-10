# 3. Toast Notifications

Until now, we have handled errors by completely replacing the screen with a giant Error Message.

```jsx
// Destructive Error Handling
if (error) return <ErrorMessage message={error} />
```

This is appropriate when you are fetching critical data on mount (e.g., if you can't fetch the user's dashboard data, there's no reason to show the dashboard layout).

But what about "background" fetches?

---

## Non-Destructive Error Handling

Imagine a user is typing a long comment. Every 30 seconds, your app automatically fires a `fetch()` to save a draft to the server.

If the user's wifi cuts out for 5 seconds during an auto-save, the `fetch` will fail. 

If your component is written like `if(error) return <Error />`, **the entire UI will vanish, taking the user's 5-paragraph comment with it!** 

For background data fetches, or for secondary features (like "Liking" a post), we must handle errors *non-destructively*. The UI must stay exactly exactly the way it is, and we should just alert the user.

---

## Toasts

The industry standard for non-destructive alerts is a **Toast Notification**.

A Toast is a small floating box (usually appearing in the bottom right or top right corner of the screen) that displays a message and then automatically disappears after a few seconds.

By pushing the `err.message` into an array of toasts instead of a single `error` string, we allow the main UI to continue rendering completely undisturbed.

*(Note: In production apps, developers rarely build custom Toast systems. Libraries like `react-toastify` or `react-hot-toast` are widely considered the industry standard for implementing these alerts).*
