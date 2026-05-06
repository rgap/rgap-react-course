# 6. Mounting and Unmounting

Often, mounting and unmounting are used together. If you start something when a component mounts, you usually need to stop it when the component unmounts.

## The Setup / Cleanup Pattern

This is a very common pattern in React:

```jsx
import { useEffect } from 'react';

function ChatRoom() {
  useEffect(() => {
    // 1. SETUP (Runs on Mount)
    const connection = createConnection();
    connection.connect();
    console.log('Connected to chat!');

    // 2. CLEANUP (Runs on Unmount)
    return () => {
      connection.disconnect();
      console.log('Disconnected from chat!');
    };
  }, []); // <-- Empty array means it only sets up once, and cleans up at the end
  
  return <h1>Welcome to the chat!</h1>;
}
```

## Why both?

Imagine a user entering a chat room. You want to connect them to the server (mount). 
When they leave the chat room to go to the home page, the ChatRoom component is removed from the screen (unmount).
If you don't disconnect them in the cleanup function, their computer will stay connected to the chat server forever in the background!

## Real-world examples of Setup/Cleanup:

- **Setup:** `setInterval` ➡️ **Cleanup:** `clearInterval`
- **Setup:** `window.addEventListener('scroll', ...)` ➡️ **Cleanup:** `window.removeEventListener('scroll', ...)`
- **Setup:** Connect to WebSocket ➡️ **Cleanup:** Disconnect from WebSocket
- **Setup:** Start observing an element (`IntersectionObserver`) ➡️ **Cleanup:** Stop observing
