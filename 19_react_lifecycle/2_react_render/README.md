# 2. Render Phase

In the previous lesson, we learned about the first step:

```txt
Trigger
```

A **trigger** is the reason React starts rendering.

Now we move to the next step:

```txt
Render
```

---

## Where We Are in the Flow

The full flow is:

```txt
Trigger
  ↓
Render
  ↓
Commit
  ↓
Paint
  ↓
Effects
```

In this lesson, we focus only on:

```txt
Render
```

---

## What is the Render Phase?

The **Render Phase** is when React calls your component function.

Example:

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

When React renders this component, React calls:

```txt
App()
```

The component function runs and returns JSX.

---

## What Happens During Render?

During render, React calculates what the UI should look like.

```txt
React calls the component
        ↓
The component runs
        ↓
The component returns JSX
```

Example:

```jsx
function App() {
  const title = "Hello React";

  return <h1>{title}</h1>;
}
```

Here, React calls `App()` and gets this JSX result:

```jsx
<h1>Hello React</h1>
```

---

## JSX is Not the Real DOM

This is important:

```txt
JSX is not the real DOM.
```

JSX is only a JavaScript description of the UI.

So when the component returns JSX, the browser has not necessarily shown anything yet.

React still needs to update the real DOM later during the **Commit Phase**.

---

## What Should Render Do?

Render should only calculate UI.

Good things to do during render:

* create variables
* read props
* read state
* return JSX
* use normal JavaScript to decide what to display

Example:

```jsx
function App() {
  const name = "Rel";

  return <h1>Hello, {name}</h1>;
}
```

This is okay because React is only calculating the UI.

---

## What Should Render Avoid?

Render should avoid side effects.

Do not do things like this directly inside the component body:

```jsx
function App() {
  fetch("/api/users");

  return <h1>Users</h1>;
}
```

This is risky because React may call the component function many times.

If `fetch` is inside render, it may also run many times.

---

## Simple Mental Model

```txt
Render = React calls the component and calculates JSX
```

Or even simpler:

```txt
Render = calculate UI
```

After render, React moves to the next step:

```txt
Commit
```

That is when React updates the real DOM.

