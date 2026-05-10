# 2. The Race Condition Glitch

In the previous lesson, we saw what happens when a component unmounts while a fetch is running. 

But what if the component **doesn't** unmount? What if its dependency array just changes?

---

## Multiple Pending Fetches

Look at this `useEffect` signature:
```jsx
useEffect(() => {
  fetchData(userId);
}, [userId]);
```

If the user clicks on Profile 1, React runs the effect. A fetch request starts.
If the user clicks on Profile 2 one second later, React runs the effect *again*. A second fetch request starts.

**At this moment, there are TWO network requests happening simultaneously in the background.**

## The Race

When you have multiple simultaneous requests, they are in a "Race". 

Because networks are unpredictable, there is absolutely no guarantee that the requests will finish in the order they were started.

If Request 1 is very slow, and Request 2 is very fast:
1. Request 2 finishes and updates the UI.
2. Request 1 finally finishes and updates the UI.

This creates a massive UI glitch. The user's screen says "Profile 2", but the data displayed is actually from Request 1! 

This is one of the most common and difficult-to-debug errors in frontend development. In the next lesson, we will solve it definitively using the `AbortController`.
