# 1. What is a Side Effect?

In React, the main job of a component is to **calculate and return UI**.

A React component receives:

```txt
props + state
```

and returns:

```txt
JSX
```

So, in a simple way, a component works like this:

```txt
Input
  ↓
Component function runs
  ↓
JSX is returned
```

React expects this render step to be **pure**.

---

## What is a Pure Function?

A **pure function** is a function that:

1. Always gives the same output when it receives the same input.
2. Does not change anything outside itself.

Example:

```js
function add(a, b) {
  return a + b;
}
```

This function is pure because it only calculates a result and returns it.

It does not:

* change the page
* call an API
* save data somewhere
* start a timer
* modify another system

React wants your component render logic to behave like that.

---

## Components Should Be Pure During Render

A React component should use its props and state to return JSX.

```jsx
function UserGreeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

This is okay because the component only calculates what the UI should look like.

```txt
props
  ↓
component function
  ↓
JSX
```

No outside system is touched.

---

## What is a Side Effect?

A **side effect** is any code that does something outside the normal render calculation.

In other words, a side effect happens when your component does more than just return JSX.

Examples of side effects:

| Side effect                       | Why it is a side effect                                   |
| --------------------------------- | --------------------------------------------------------- |
| Fetching data from an API         | It contacts an external server                            |
| Changing `document.title`         | It changes the browser document                           |
| Reading or writing `localStorage` | It interacts with browser storage                         |
| Starting a timer                  | It creates work outside React render                      |
| Connecting to a WebSocket         | It opens an external connection                           |
| Directly modifying the DOM        | It changes the page outside React’s normal update process |

So the important idea is:

```txt
Returning JSX = render work
Reaching outside the component = side effect
```

---

## The Rule of Render

You should **not put side effects directly in the main body of a component**.

```jsx
function BadComponent() {
  // ❌ Bad:
  // This runs while React is rendering the component.
  fetch("https://api.example.com/data");

  return <div>Hello</div>;
}
```

At first, this may look harmless.

But it creates a problem.

React can call your component function more than once. For example:

* when the component first appears
* when state changes
* when props change
* during development with Strict Mode
* when React needs to prepare or compare UI updates

So this code may run again and again:

```txt
Component is called
  ↓
fetch() runs during render ❌
  ↓
JSX is returned
  ↓
React updates the DOM
```

That means your API request is no longer predictable.

You may accidentally send multiple requests when you only expected one.

---

## Why This is a Problem

Render should be like making a plan.

React asks:

```txt
What should the UI look like?
```

The component should answer:

```txt
Here is the JSX.
```

But if the component also fetches data, changes storage, starts timers, or modifies the DOM during render, then render is no longer just a calculation.

It becomes dangerous because React may repeat it.

---

## The Correct Idea

Side effects need a safer place to run.

That place is **after React finishes rendering and updating the screen**.

The basic flow is:

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

5. Effects
   React runs side effects safely.
```

So instead of running side effects during render, we use tools like `useEffect`.

`useEffect` lets us say:

```txt
Run this side effect after React has finished updating the UI.
```

