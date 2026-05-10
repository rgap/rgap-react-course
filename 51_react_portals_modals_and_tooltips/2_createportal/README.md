# 2. `createPortal`

To solve the CSS Overflow issue, we need our React Component to behave in two different ways simultaneously:

1. **Logically**, it should remain inside the `DashboardWidget`. It needs to access the `isOpen` state, which lives inside `DashboardWidget`.
2. **Physically**, its HTML needs to be rendered completely outside of the `<div class="dashboard">`, so it isn't trapped by any CSS `overflow` rules.

---

## Modifying the HTML

First, we must provide a physical destination for our teleportation.

In our `index.html` file, standard React apps have one single node:
```html
<div id="root"></div>
```

We can simply add a second one, specifically for portals! Because it is a direct child of the `<body>` tag, it is completely immune to any CSS layout rules applied to the `#root` element.

```html
<div id="root"></div>
<div id="portal-root"></div>
```

---

## Teleportation

React DOM provides a utility function called `createPortal()`.

It takes two arguments:
1. The JSX you want to render.
2. The HTML DOM node where you want it to appear.

```jsx
import { createPortal } from "react-dom";

function DashboardWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>

      {/* If isOpen is true, teleport this <div> into the portal-root! */}
      {isOpen && createPortal(
        <div className="modal">Hello!</div>,
        document.getElementById("portal-root")
      )}
    </div>
  );
}
```

If you inspect the DOM in the browser's developer tools, you will see that the `<div class="modal">` is completely missing from the Widget's DOM tree. It has been successfully teleported into `<div id="portal-root">`, allowing it to cover the entire screen perfectly!
