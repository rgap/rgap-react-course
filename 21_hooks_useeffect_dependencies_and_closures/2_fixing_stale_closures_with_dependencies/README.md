# 2. Fixing Stale Closures with Dependencies

The most straightforward way to fix a stale closure is to **tell the truth** to React.

If you use `count` inside your effect, you must put `count` in your dependency array.

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  const timerId = setInterval(() => {
    setCount(count + 1); 
  }, 1000);

  return () => clearInterval(timerId);
}, [count]); // <-- Now React knows to re-run the effect!
```

## How this solves the problem

By putting `count` in the array, the flow becomes:

1. **First Render:** `count` is 0. Effect runs. Interval sees `count=0`.
2. A second passes. Interval does `setCount(0 + 1)`.
3. **Second Render:** `count` becomes 1. UI Updates.
4. React sees `count` changed from 0 to 1. 
5. React **cleans up** the old effect (clears the timer).
6. React **runs** the effect again. 
7. The new effect creates a brand new interval that sees `count=1`.

## The Downside

This approach works perfectly and fixes the bug!

However, look at step 5 and step 7. We are constantly calling `clearInterval` and `setInterval` every single second. 

If this was a WebSocket connection, we would be connecting and disconnecting from the server every single second! That would be terrible for performance.

Is there a way to let the interval run forever, but still update the state correctly without causing a stale closure? Yes!
