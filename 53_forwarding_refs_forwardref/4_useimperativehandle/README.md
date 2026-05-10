# 4. `useImperativeHandle`

When you use `forwardRef`, you are handing the Parent component complete, unrestricted access to a native DOM node inside your Child component.

The Parent could call `.focus()`, but it could also maliciously call `.remove()` and delete the element entirely!

If you want to **restrict** what the Parent can do, or if you want to expose a custom API (instead of a raw HTML DOM node), you use the highly advanced `useImperativeHandle` Hook.

---

## The Syntax

`useImperativeHandle` intercepts the forwarded `ref`. Instead of attaching the `ref` directly to a DOM node, you define a custom Javascript Object. The Parent's `ref.current` will point to this object instead.

```jsx
import { useRef, useImperativeHandle, forwardRef } from "react";

const FancyVideoPlayer = forwardRef((props, ref) => {
  // We keep a private ref for the actual DOM element
  const internalVideoRef = useRef(null);

  // We customize what the Parent's `ref` receives
  useImperativeHandle(ref, () => {
    return {
      // We expose a custom "play" function
      play: () => internalVideoRef.current.play(),
      // We do NOT expose the raw DOM node!
    };
  });

  return <video ref={internalVideoRef} />;
});
```

### The Result

In the Parent component:

```jsx
const playerRef = useRef(null);

<FancyVideoPlayer ref={playerRef} />

// The Parent can do this:
playerRef.current.play();

// The Parent CANNOT do this! (It will throw an error)
playerRef.current.remove();
```

This is an extremely powerful pattern for building Complex Components (like Video Players, Image Croppers, or Data Grids) where you want to expose specific imperative actions to the parent without leaking the underlying DOM structure.
