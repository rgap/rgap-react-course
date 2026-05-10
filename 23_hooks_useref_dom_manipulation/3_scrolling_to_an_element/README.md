# 3. Scrolling to an Element

Another common DOM manipulation that requires refs is **scrolling** to a specific element on the page.

There is no `scrollTo` prop in React. Scrolling is an imperative browser action, so we need a ref.

---

## The Method: `scrollIntoView`

Every DOM element has a built-in method called `scrollIntoView`:

```js
element.scrollIntoView();
```

You can pass options to control the behavior:

```js
element.scrollIntoView({
  behavior: "smooth",  // "smooth" or "instant"
  block: "start",      // "start", "center", "end", or "nearest"
});
```

---

## The Pattern

```jsx
import { useRef } from "react";

function App() {
  const sectionRef = useRef(null);

  function handleClick() {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <button onClick={handleClick}>Scroll to Section</button>
      {/* ... lots of content ... */}
      <div ref={sectionRef}>Target Section</div>
    </>
  );
}
```

---

## Multiple Refs

You can create as many refs as you need:

```jsx
const section1Ref = useRef(null);
const section2Ref = useRef(null);
const section3Ref = useRef(null);
```

Each ref independently points to its own DOM element.

This is useful for building navigation menus that scroll to different parts of a page.

---

## When to Use This

| Use case                          | Example                                |
| --------------------------------- | -------------------------------------- |
| Single-page navigation            | Scroll to sections on a landing page   |
| "Back to top" button              | Scroll to the top of the page          |
| Form validation                   | Scroll to the first field with an error|
| Chat applications                 | Scroll to the latest message           |

---

## Important Note

`scrollIntoView` is a native browser API. React does not provide its own scrolling mechanism because the browser already handles it well. Refs simply give you access to call it.
