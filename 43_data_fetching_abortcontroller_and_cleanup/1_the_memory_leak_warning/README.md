# 1. The Memory Leak Warning

When writing data fetching code in React, it is very easy to forget that the network and the UI operate on completely different timelines.

---

## The Unmounted State Update

Imagine this scenario:
1. A user clicks "View Profile".
2. The `<Profile />` component mounts to the screen.
3. The `useEffect` fires, and a `fetch()` request is sent to the server.
4. The server is very slow today. It is taking 5 seconds to respond.
5. After 2 seconds, the user gets bored and clicks the "Back" button.
6. The `<Profile />` component unmounts (is destroyed and removed from the screen).
7. Three seconds later, the `fetch()` finally receives the data.
8. Your code calls `setData(json)`.

**What happens?**

React will attempt to update the state of a component that literally does not exist anymore. 

Older versions of React would throw a giant red error in the console: 
> *Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.*

Newer versions of React silently swallow this error to avoid annoying developers, but the fundamental problem remains: **Your app is wasting network bandwidth and memory processing data that the user threw away.**

---

## Why does this happen?

JavaScript Closures! 

When the `fetchUser` async function was created inside the `useEffect`, it captured a reference to the `setUser` function for that specific instance of the component. Even after React destroys the component's UI, the pending Promise keeps the `fetchUser` function alive in memory, which keeps the `setUser` reference alive.

In the next lessons, we will learn how to properly terminate these pending requests.
