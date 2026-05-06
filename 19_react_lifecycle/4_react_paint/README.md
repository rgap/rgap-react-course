# 4. Paint Phase

In the previous lessons, we learned:

```txt
Trigger
  ↓
Render
  ↓
Commit
```

Now we move to the next step:

```txt
Paint
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
Paint
```

---

## What Happens Before Paint?

Before paint happens:

```txt
1. Trigger
   Something caused React to render.

2. Render
   React called the component function.
   The component returned JSX.

3. Commit
   React updated the real DOM.
```

After React updates the real DOM, the browser still needs to visually show the result.

That visual step is called **paint**.

---

## What is Paint?

**Paint** is when the browser draws the updated UI on the screen.

Simple idea:

```txt
Paint = the browser shows the UI visually
```

React updates the DOM, but the browser paints what the user actually sees.

---

## React Does Not Paint Directly

This is important:

```txt
Paint is done by the browser, not directly by React.
```

React handles the UI calculation and DOM update.

The browser handles the visual drawing.

---

## Simple Difference

| Step   | Who does it? | Meaning                |
| ------ | ------------ | ---------------------- |
| Render | React        | Calculates JSX         |
| Commit | React        | Updates the real DOM   |
| Paint  | Browser      | Shows the UI on screen |

---

## Simple Mental Model

```txt
Render = React calculates the UI.
Commit = React updates the DOM.
Paint = The browser shows the UI visually.
```

---

## Final Idea

```txt
Trigger starts the process.
Render calculates JSX.
Commit updates the real DOM.
Paint shows the result on the screen.
```

After paint, React can run the next step:

```txt
Effects
```

That is where side effects usually happen.
