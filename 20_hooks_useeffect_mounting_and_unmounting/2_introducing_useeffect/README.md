# 2. Introducing `useEffect`

In the previous lesson, we learned that side effects should **not** run directly during render.

During render, React wants your component to only:

```txt
read props
read state
calculate JSX
return JSX
```

But real applications need to do more than return JSX.

Sometimes a component needs to:

* fetch data from an API
* update the browser tab title
* read or write `localStorage`
* start a timer
* subscribe to an event
* connect to a WebSocket

These actions are called **side effects**.

To run side effects safely, React gives us a Hook called `useEffect`.

---

## What is `useEffect`?

`useEffect` is a React Hook that lets a component run side effect code **after React finishes rendering**.

In simple words:

```txt
Render first.
Run the side effect later.
```

That is the key idea.

`useEffect` gives React a safe place to run code that reaches outside the component.

---

## Why Do We Need `useEffect`?

Without `useEffect`, a beginner might write this:

```jsx
function BadComponent() {
  // ❌ Bad:
  // This runs during render.
  document.title = "My New Title";

  return <h1>Hello</h1>;
}
```

The problem is that React can call the component function many times.

So this side effect may run many times too.

```txt
Component is called
  ↓
document.title changes during render ❌
  ↓
JSX is returned
  ↓
React updates the DOM
```

Instead, we move the side effect into `useEffect`.

---

## How `useEffect` Works

To use `useEffect`, we import it from React:

```jsx
import { useEffect } from "react";
```

Then we call it inside the component:

```jsx
useEffect(() => {
  // side effect code goes here
});
```

The function we pass to `useEffect` is called an **effect function**.

React runs that function after the render work is finished.

---

## Basic Example

```jsx
import { useEffect } from "react";

function GoodComponent() {
  useEffect(() => {
    // ✅ Good:
    // This runs after React has rendered the component.
    document.title = "My New Title";
  });

  return <h1>Hello</h1>;
}

export default GoodComponent;
```

Now the component render stays clean.

The component returns JSX, and the side effect runs later.

---

## The Flow

The full flow looks like this:

```txt
1. Trigger
   Something causes React to render.

2. Render
   React calls the component function.
   The component returns JSX.

3. Commit
   React updates the real DOM.

4. Paint
   The browser shows the updated UI.

5. Effect
   React runs the function inside useEffect.
```

So with `useEffect`, the flow becomes:

```txt
Component is called
  ↓
JSX is returned
  ↓
React updates the DOM
  ↓
Browser paints the UI
  ↓
useEffect runs ✅
```

---

## Why is it Called `useEffect`?

The name useEffect literally means:

> "Hey React, I need to **use** a side **effect**. Please run this code for me, but wait until the render is completely finished."

That “something” may be an API request, a timer, a browser update, or a connection to an external system.

---

## Important Beginner Note

`useEffect` does **not** run while React is calculating JSX.

It runs **after** React has finished updating the screen.

That is why this is okay:

```jsx
useEffect(() => {
  document.title = "My New Title";
});
```

But this is not recommended:

```jsx
function BadComponent() {
  document.title = "My New Title";

  return <h1>Hello</h1>;
}
```

The first one keeps render pure.

The second one mixes render logic with outside work.
