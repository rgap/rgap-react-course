# React Render-to-Effect Lifecycle Flow

Before we can understand side effects or `useEffect`, we must first understand **how React puts your component on the screen**.

React does not immediately change the real DOM every time something changes. Instead, React follows a process where it:

1. Receives a reason to update.
2. Calls your component function.
3. Calculates what the UI should look like.
4. Updates the real DOM.
5. Lets the browser paint the result.
6. Runs effects after the UI has been updated.

This lesson focuses on the flow that matters most before learning `useEffect`.

---

## A Note About the Word “Lifecycle”

The word **lifecycle** can mean different things in React.

In older React tutorials, “lifecycle” often refers to **class component lifecycle methods**, such as:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

Those methods describe when a class component is mounted, updated, or removed from the screen.

In modern React with function components, we usually do not write those methods directly. Instead, we often think in terms of:

1. **Render and Commit**: how React calculates UI and updates the DOM.
2. **Paint**: how the browser visually shows the updated UI.
3. **Effects**: how React synchronizes with things outside React, such as APIs, timers, browser events, subscriptions, or manually controlled DOM behavior.

So in this lesson, when we say **React Render-to-Effect Lifecycle Flow**, we are not covering every possible React lifecycle concept.

We are focusing on this beginner-friendly flow:

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

This model is useful because it answers one important question:

> When is it safe to run side effects?

The answer is:

> Not during render. Render should calculate JSX. Side effects usually belong after React has updated the screen, inside `useEffect`.

---

# 1. Trigger

The first step is **Trigger**.

A trigger is the reason React starts rendering.

React does not render randomly. Something has to happen first.

---

## What Can Trigger a Render?

Common triggers include:

* the app starts
* state changes
* props change
* a parent component renders again

For this first example, we focus only on the simplest trigger:

```txt
The app starts.
```

---

## First Render

When the app starts, React needs to show the `<App />` component on the screen.

So React starts the rendering process.

```txt
App starts
   ↓
React needs to show <App />
   ↓
React starts rendering
```

At this point, React has not updated the DOM yet.

The trigger only tells React:

```txt
Something happened.
You need to calculate the UI.
```

---

## Simple Mental Model

```txt
Trigger = the reason React starts rendering
```

In this example:

```txt
The app starts = Trigger
```

After the trigger, React moves to the next step:

```txt
Render
```

That is when React calls the component function.

