# 4. Counting Renders

A simple but powerful debugging technique is counting how many times a component renders.

This cannot be done with state, because updating state during render would cause another render, creating an infinite loop.

---

## The Pattern

```jsx
const renderCount = useRef(0);
renderCount.current = renderCount.current + 1;
```

We increment the ref directly in the component body (during render). This is safe because writing to a ref does not trigger a re-render.

---

## Why Not State?

```jsx
// ❌ INFINITE LOOP
const [renderCount, setRenderCount] = useState(0);
setRenderCount(renderCount + 1); // Triggers re-render → runs again → triggers re-render → ...
```

State updates during render cause React to re-render the component. That re-render would increment the counter again, which would cause another re-render, forever.

A ref avoids this entirely because React ignores changes to `ref.current`.

---

## Is It Safe to Mutate a Ref During Render?

Technically, React docs recommend keeping render pure and only mutating refs in effects or event handlers. However, incrementing a render counter is a harmless mutation that does not affect the JSX calculation. It is widely used for debugging.

In production code, you would remove render counters. They are a development tool.

---

## Summary of useRef for Mutable Values

| Use case               | Why ref instead of state?                    |
| ---------------------- | -------------------------------------------- |
| Timer IDs              | Saving an ID should not re-render            |
| Previous state         | Updating previous should not re-render       |
| Render counter         | Incrementing during render would loop        |
| "Has mounted" flag     | A boolean flag should not re-render          |
| Accumulated values     | Internal tracking that never shows on screen |

The golden rule remains:

```txt
If it affects the UI → useState
If it does not affect the UI → useRef
```
