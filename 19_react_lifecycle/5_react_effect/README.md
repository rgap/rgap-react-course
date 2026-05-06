# 5. Effect Phase

In the previous lessons, we learned:

```txt
Trigger
  ↓
Render
  ↓
Commit
  ↓
Paint
```

Now we move to the next step:

```txt
Effects
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
Effects
```

---

## What Happens Before Effects?

Before effects happen:

```txt
1. Trigger
   Something caused React to render.

2. Render
   React called the component function.
   The component returned JSX.

3. Commit
   React updated the real DOM.

4. Paint
   The browser showed the UI on the screen.
```

After the UI has been updated, React can run effects.

---

## What is an Effect?

An **effect** is code that React runs after the UI has been updated.

Simple idea:

```txt
Effect = code that runs after React updates the UI
```

Effects are usually written with `useEffect`.

---

## Simple Mental Model

```txt
Render = React calculates JSX.
Commit = React updates the real DOM.
Paint = The browser shows the UI.
Effect = React runs code after the UI update.
```

---

## Final Idea

The important idea for now is not what every effect can do.

The important idea is **when** effects run:

```txt
Effects run after render, commit, and paint.
```
