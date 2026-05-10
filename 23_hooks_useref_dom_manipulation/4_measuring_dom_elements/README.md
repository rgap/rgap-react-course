# 4. Measuring DOM Elements

Sometimes you need to know the **size** or **position** of an element on the screen.

React does not provide this information through props or state. The only way to get it is by reading the real DOM node — using a ref.

---

## `getBoundingClientRect()`

Every DOM element has a method called `getBoundingClientRect()` that returns its size and position:

```js
const rect = element.getBoundingClientRect();
```

It returns an object:

```txt
{
  x: 100,       // left edge relative to the viewport
  y: 200,       // top edge relative to the viewport
  width: 300,   // element width
  height: 50,   // element height
  top: 200,     // same as y
  right: 400,   // x + width
  bottom: 250,  // y + height
  left: 100     // same as x
}
```

### Using it with useRef

```jsx
const boxRef = useRef(null);

useEffect(() => {
  const rect = boxRef.current.getBoundingClientRect();
  console.log("Width:", rect.width);
  console.log("Height:", rect.height);
}, []);
```

This measures the element **once** after the first render.

---

## `ResizeObserver`

`getBoundingClientRect()` only gives you the size at a single moment.

If the element can change size (for example, when the user resizes the browser window), you need to **watch** for changes.

The browser provides `ResizeObserver` for this:

```jsx
useEffect(() => {
  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      console.log("New width:", entry.contentRect.width);
      console.log("New height:", entry.contentRect.height);
    }
  });

  observer.observe(boxRef.current);

  return () => {
    observer.disconnect(); // Cleanup!
  };
}, []);
```

`ResizeObserver` is an external system, so it follows the same setup/cleanup pattern we learned in module 22.

---

## When to Measure

You should measure DOM elements inside:

- `useEffect` — after the DOM has been committed.
- Event handlers — the DOM is already available.

Never measure during render, because the DOM node may not exist yet.

```txt
✅ useEffect(() => { ref.current.getBoundingClientRect() }, []);
✅ function handleClick() { ref.current.getBoundingClientRect() }
❌ const rect = ref.current.getBoundingClientRect(); // during render
```

---

## Common Use Cases

| Use case               | API                        |
| ---------------------- | -------------------------- |
| Read size once          | `getBoundingClientRect()`  |
| Watch for size changes  | `ResizeObserver`           |
| Watch for visibility    | `IntersectionObserver`     |
| Read scroll position    | `element.scrollTop`        |

All of these require a ref to access the real DOM node.
