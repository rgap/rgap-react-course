# 3. NavLink Custom Styling

By default, `<NavLink>` automatically adds the string `"active"` to the `className` of the anchor tag. 

But what if you are using a CSS framework like **Tailwind CSS**, where you don't write custom CSS files? Or what if you want to apply inline styles directly in JavaScript?

React Router v6 provides a powerful way to handle this.

---

## Function Props

Instead of passing a string to `className` or an object to `style`, you can pass a **function**.

React Router will call this function every time the URL changes. It passes a special object into the function containing an `isActive` boolean.

### 1. Custom `className` Function

This is perfect for Tailwind or modular CSS.

```jsx
<NavLink
  to="/about"
  className={({ isActive }) => {
    return isActive ? "text-blue-500 font-bold" : "text-gray-500";
  }}
>
  About
</NavLink>
```

When active, the rendered HTML is `<a class="text-blue-500 font-bold" href="/about">`.
When inactive, the rendered HTML is `<a class="text-gray-500" href="/about">`.

### 2. Custom `style` Function

If you prefer inline styling in React, you can do the exact same thing with the `style` prop.

```jsx
<NavLink
  to="/about"
  style={({ isActive }) => {
    return {
      color: isActive ? "blue" : "black",
      fontWeight: isActive ? "bold" : "normal"
    };
  }}
>
  About
</NavLink>
```

---

## The Child Function

You can even pass a function as the `children` of the `<NavLink>`! This is rare, but useful if you need to render entirely different HTML elements depending on whether the link is active.

```jsx
<NavLink to="/profile">
  {({ isActive }) => (
    <>
      <span>Profile</span>
      {isActive && <span> (You are here!)</span>}
    </>
  )}
</NavLink>
```
