# 3a. Multiple Dependencies

In the previous lesson, we learned that we can pass an array of variables to `useEffect`:

```jsx
useEffect(() => {
  // side effect code
}, [count]);
```

But what if your effect relies on more than one variable? 
You can pass **multiple dependencies** into the array by separating them with commas.

```jsx
useEffect(() => {
  console.log(`The count is ${count} and the name is ${name}`);
}, [count, name]);
```

---

## How It Works

When you provide multiple dependencies like `[count, name]`, React will run the effect if **ANY** of the variables have changed since the last render.

It behaves like an `OR` condition:
```txt
Run the effect if (count changed) OR (name changed).
```

### Example Flow

```txt
First render (count=0, name="Alice")
  ↓
Effect runs

User clicks "Increment Count" (count=1, name="Alice")
  ↓
React checks the array: did count or name change? Yes, count changed.
  ↓
Effect runs

User clicks "Set Name to Bob" (count=1, name="Bob")
  ↓
React checks the array: did count or name change? Yes, name changed.
  ↓
Effect runs

User clicks "Set Name to Bob" again (count=1, name="Bob")
  ↓
React checks the array: did count or name change? No, they are exactly the same.
  ↓
Effect is SKIPPED ✅
```

---

## Why Is This Important?

React requires you to list **all** reactive variables (props and state) that you use inside your effect function inside the dependency array. 

If your side effect uses `count`, `name`, and `isLoggedIn`, your array must look like this:
```jsx
[count, name, isLoggedIn]
```

This ensures that your side effect always stays synchronized with the latest data in your application. If you forget to include a dependency, your effect might use stale, outdated values!
