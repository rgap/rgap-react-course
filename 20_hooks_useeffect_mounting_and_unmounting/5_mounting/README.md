# 4. Mounting

When a component is created and added to the screen for the first time, it is called **mounting**.

## How to detect mounting

To run code only when a component mounts, you use `useEffect` with an **empty dependency array**:

```jsx
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Component mounted!');
  }, []); // <--- Empty dependency array

  return <div>Hello</div>;
}
```

## Why do we need this?

Mounting is the perfect place to run setup code that should only happen once:
- Fetching initial data from an API.
- Connecting to a chat room or WebSocket.
- Setting up a timer (like `setInterval`).
- Reading data from `localStorage`.

## The Rule

- `useEffect(() => { ... })` (No array) = Runs after EVERY render.
- `useEffect(() => { ... }, [])` (Empty array) = Runs ONLY after the FIRST render (mount).
