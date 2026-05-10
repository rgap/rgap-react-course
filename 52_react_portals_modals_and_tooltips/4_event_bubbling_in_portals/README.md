# 4. Event Bubbling in Portals

There is one final, mind-bending concept to understand about Portals.

In the standard DOM (HTML), events "bubble" up the physical tree. If you click a `<button>`, the event bubbles up to its parent `<div>`, then the `<body>`, then the `<html>` tag.

---

## The React Tree vs The DOM Tree

React uses a "Synthetic Event" system. 

When you use `createPortal`, you are changing where the component lives in the **Physical HTML DOM Tree**.

However, you are NOT changing where it lives in the **React Component Tree**!

```jsx
<Dashboard>
  <div onClick={handleClick}>
    <Widget />
    {createPortal(<button>Click Me</button>, document.body)}
  </div>
</Dashboard>
```

### The Magic:

If you click the button rendered by the Portal, the event will bubble **up the React Tree**. 

Even though the button is physically attached to the `<body>` tag, React knows that it was *rendered* by the `<div>` inside the `Dashboard`.

Therefore, clicking the teleported button will successfully trigger the `onClick={handleClick}` function defined on its React parent container!

This allows your components to behave identically whether they are portaled or not, completely abstracting the CSS layout hacks away from your application logic.
