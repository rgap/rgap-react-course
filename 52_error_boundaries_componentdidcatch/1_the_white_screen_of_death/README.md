# 1. The White Screen of Death

In Javascript, if you wrap code in a `try...catch` block, you can prevent errors from crashing your script.

```javascript
try {
  const user = null;
  console.log(user.name); // This throws an error
} catch (error) {
  console.log("Caught the error! Continuing execution...");
}
```

However, you **cannot** wrap React components in a `try...catch` block.

```jsx
// THIS DOES NOT WORK!
function App() {
  try {
    return <FragileWidget />;
  } catch (error) {
    return <p>Widget crashed!</p>;
  }
}
```

Because of how React's virtual DOM reconciliation algorithm works, `try...catch` inside a functional component will completely fail to catch rendering errors in child components.

---

## Unmounting the World

If a component throws an error during rendering, React is designed to "fail fast". 

Instead of leaving corrupted, broken UI on the screen, React completely unmounts the entire component tree. This results in the user seeing a completely blank white screen.

This is a terrible User Experience. If a tiny footer widget crashes, the user shouldn't lose access to the main navigation bar.

To solve this natively in React (without using React Router's Data architecture), we must build an **Error Boundary**.
