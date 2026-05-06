# 5. Unmounting

When a component is removed from the screen, it is called **unmounting**.

## How to detect unmounting

To run code right before a component is removed, you return a **function** from inside your `useEffect`. This returned function is called the **cleanup function**.

```jsx
import { useEffect } from 'react';

function ChildComponent() {
  useEffect(() => {
    console.log('Mounted!'); // Runs when added

    // Return a function for cleanup
    return () => {
      console.log('Unmounted!'); // Runs when removed
    };
  }, []); 

  return <div>I will disappear!</div>;
}
```

## Why do we need this?

Unmounting is the perfect place to clean up things that the component started when it mounted. If you don't clean them up, you will cause **memory leaks** or unexpected bugs.

Examples of things you must clean up:
- Disconnecting from a chat room or WebSocket.
- Clearing a timer (`clearInterval` or `clearTimeout`).
- Removing event listeners (`window.removeEventListener`).

## The Rule

- The main function inside `useEffect` is for **setup**.
- The function you `return` from `useEffect` is for **cleanup**.
- React runs the cleanup function just before the component unmounts.
