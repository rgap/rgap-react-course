# 6. Another Trigger: State Change

In the first examples, the trigger was simple:

```txt
The app starts.
```

That is the first render.

But React can render again after the app is already on the screen.

One common reason is:

```txt
State changes.
```

---

## Where We Are in the Flow

The full flow is still:

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

In this lesson, we focus again on:

```txt
Trigger
```

But now the trigger is different.

---

## First Trigger: App Starts

When the app starts, React renders for the first time.

```txt
App starts
   ↓
React renders <App />
```

This is the initial trigger.

---

## New Trigger: State Changes

After the app is already visible, the user may do something.

For example:

```txt
User clicks a button
   ↓
State changes
   ↓
React renders again
```

So a state change can also trigger React to render.

---

## Example Idea

Imagine a counter:

```txt
Count: 0
```

The user clicks a button.

The count changes from `0` to `1`.

```txt
Count changes
   ↓
React needs to update the UI
   ↓
React renders again
```

---

## Important Idea

Changing state does not mean you manually update the DOM.

Instead, you tell React:

```txt
The data changed.
Please render again.
```

React then continues the flow:

```txt
Trigger
  ↓
Render
  ↓
Commit
  ↓
Paint
```

---

## Simple Mental Model

```txt
Initial trigger = the app starts
State trigger = state changes
```

Both are triggers because both tell React:

```txt
React needs to render.
```

---

## Final Idea

A trigger is still the same idea:

```txt
Trigger = the reason React starts rendering
```

But now we know there can be more than one type of trigger:

```txt
The app starts     → first render
State changes      → another render
```
