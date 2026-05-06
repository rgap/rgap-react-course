# 3. Commit Phase

In the previous lessons, we learned:

```txt
Trigger
  ↓
Render
```

Now we move to the next step:

```txt
Commit
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

In this lesson, we focus on:

```txt
Commit
```

---

## What Happens Before Commit?

Before commit happens, React has already done two things:

```txt
1. Trigger
   Something caused React to render.

2. Render
   React called the component function.
   The component returned JSX.
```

Example:

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

During render, React receives this JSX:

```jsx
<h1>Hello React</h1>
```

But JSX is **not** the real DOM yet.

---

## What is the Commit Phase?

The **Commit Phase** is when React updates the real DOM.

Simple idea:

```txt
Commit = React updates the real DOM
```

React takes the JSX result from render and applies the needed changes to the browser document.

So this JSX:

```jsx
<h1>Hello React</h1>
```

becomes a real DOM element in the page.

---

## Commit Does Not Happen Inside the Component

This is important:

```txt
Commit does not happen inside your component function.
```

Your component function only returns JSX.

After that, React handles the DOM update.

```txt
React calls App()
        ↓
App returns JSX
        ↓
React updates the real DOM
```

---

## Simple Mental Model

```txt
Render = React calculates the UI
Commit = React updates the real DOM
```

Render answers:

```txt
What should the UI look like?
```

Commit answers:

```txt
What should React change in the real DOM?
```

---

## Important Detail

During commit, the UI is now in the real DOM.

But the browser still needs to visually show it on the screen.

That next step is called:

```txt
Paint
```

---

## Final Idea

```txt
Trigger starts the process.
Render calculates JSX.
Commit updates the real DOM.
```

After commit, the browser moves to the next step:

```txt
Paint
```