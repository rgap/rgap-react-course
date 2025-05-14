## Virtual DOM

The Virtual DOM (VDOM) is a core concept in React that enables efficient updates to the Real DOM by **minimizing the number of direct manipulations**.

The Virtual DOM is an in-memory representation of the Real DOM. Instead of directly updating the Real DOM every time there’s a change in the UI, React updates the Virtual DOM first, compares it to the previous state (**diffing**), and only applies the necessary updates to the Real DOM.

- When the state or props of a React component change, **React generates a new Virtual DOM tree**.
- The process makes the updates more efficient by ensuring that only the elements that have changed are re-rendered in the Real DOM.

**File: index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Basic React App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- Root element where React will mount the app -->
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

**File: src/main.js**

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**File: src/App.js**

```js
import React from "react";
import Counter from "./Counter";

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}
```

**File: src/Counter.js**

```js
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
      <div>
        <h1>Count: {count}</h1>
        {/* Initial count */}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        {/* Button to increment count */}
      </div>
      <div>
        <p>This is a simple counter.</p>
        <p style="display: none;">This paragraph is hidden.</p>
        {/* Additional content */}
      </div>
  );
}
```

## How it works

1. **Mounting the App:**

When the application starts, React **mounts the app inside the #root div** in index.html by rendering the App component.

2. **App Component (App.js):**

The Counter component is rendered inside the App component.

3. **Counter component (Counter.js):**

- The counter is initialized with **useState(0)**, and the button increments the count each time it’s clicked.
- The count is dynamically displayed in the **h1** tag, and clicking the button will update the displayed count.

## 1. Reconciliation

**Reconciliation** corresponds to the entire process React undertakes when the user clicks the Increment button to update the count, including:

- Triggering the state update.
- Diffing the new and old Virtual DOM trees.
- Updating (or "patching") the necessary parts of the Real DOM.

## 1.1. Diffing Process: Comparing the Old and New Virtual DOM Trees

React doesn’t update the Real DOM immediately when state changes. Instead, it:

- **Diffs the Virtual DOM:** Compares the old and new Virtual DOM trees to determine the minimal set of changes.
- **Uses the Fiber Tree for Scheduling:** The Fiber Tree ensures that rendering tasks are optimized and **prioritized**.

The diffing algorithm compares the two trees: **Old Virtual DOM Tree** and the **New Virtual DOM Tree**.

### Old Virtual DOM Tree (Before Click):

```
Document
  ├── html
  │     ├── head
  │     └── body
  │           └── div#root
  │                 ├── div
  │                 │     ├── h1 (text: "Count: 0")
  │                 │     └── button (text: "Increment")
  │                 └── div
  │                       ├── p (text: "This is a simple counter.")
  │                       └── p (text: "This paragraph is hidden.", style: display: none)
```

### New Virtual DOM Tree (After Click):

```
Document
  ├── html
  │     ├── head
  │     └── body
  │           └── div#root
  │                 ├── div
  │                 │     ├── h1 (text: "Count: 1")
  │                 │     └── button (text: "Increment")
  │                 └── div
  │                       ├── p (text: "This is a simple counter.")
  │                       └── p (text: "This paragraph is hidden.", style: display: none)
```

**What gets compared:**

- React compares the old and new Virtual DOM trees.
- The only **difference** is in the h1 element:
  - The old tree has h1 (text: "Count: 0").
  - The new tree has h1 (text: "Count: 1").
- All other elements (the button and paragraphs) remain unchanged, so React does not need to update them in the Real DOM.

## 1.2. Fiber Tree: Scheduling

The **Fiber Tree** manages how and when the updates happen. When React detects a change, the Fiber Tree helps:

- **Schedule Updates:** React breaks down the updates into smaller units (tasks) for each fiber (e.g., h1, button) and processes them incrementally, so the main thread isn’t overwhelmed by large updates.
- **Prioritize Work:** Tasks related to **user interaction** (like updating the count) are given high priority, while less important tasks (like re-rendering static content) are delayed or skipped if no changes are needed.

The Fiber tree helps React break the rendering process into manageable units of work. Each fiber represents a unit of work corresponding to a component or an element in the React component tree.

A Fiber Tree is created for the whole React application.

### Fiber Tree (Before Click):

```
FiberRoot
└── HostRoot
     └── App (Component Fiber)
          └── Counter (Component Fiber - count: 0)
               ├── div (Host Fiber)
               │     ├── h1 (Host Fiber - text: "Count: 0")
               │     └── button (Host Fiber - text: "Increment")
               └── div (Host Fiber)
                     ├── p (Host Fiber - text: "This is a simple counter.")
                     └── p (Host Fiber - text: "This paragraph is hidden.", style: display: none)
```

- **FiberRoot** and **HostRoot** represent the root of the React application, linking it to the Real DOM where the application is mounted.
- **Component Fibers** (like App and Counter) are fibers corresponding to React components. They track the state, props, and references to their children, siblings, and parents in the Fiber Tree.
- **Host Fibers** represent actual DOM elements (like div, h1, button, and p tags). These fibers are responsible for tracking the DOM structure and properties in the Real DOM.

### Fiber Tree (After Click):

```
FiberRoot
└── HostRoot
     └── App (Component Fiber)
          └── Counter (Component Fiber - count: 1)
               ├── div (Host Fiber)
               │     ├── h1 (Host Fiber - updated text: "Count: 1")
               │     └── button (Host Fiber - text: "Increment")
               └── div (Host Fiber)
                     ├── p (Host Fiber - text: "This is a simple counter.")
                     └── p (Host Fiber - text: "This paragraph is hidden.", style: display: none)
```

**Scheduling with the Fiber Tree:**

React's Fiber architecture prioritizes tasks based on urgency and importance, not strictly based on the position of the fibers in the tree.

- **High-priority tasks (like user interactions)** are scheduled to happen sooner, no matter where they are in the tree. If an update affects a deeply nested component but it's related to something high-priority (e.g., a button click), React will handle that first.

- **Depth-First Traversal:** React walks through the tree from the root to the leaves. While traversing, it schedules updates for each component or DOM node as it reaches them. This means parent fibers are processed first, but their actual updates may happen later depending on priority.

- **Task Scheduling:** React schedules the work using the Fiber Tree, where different units of work (fiber nodes) are assigned different priorities. It may choose to skip or delay low-priority updates to avoid blocking the main thread.

**React’s Update Flow Based on Fiber Priority:**

- **Task 1: Update Counter Fiber** ----> [done]

  - The `Counter` component’s state is updated from `count = 0` to `count = 1`.
  - React identifies that this change impacts the UI and triggers the `render` process for the affected parts of the component.

- **Task 2: Update h1 Fiber** ----> [done]

  - The `h1` Fiber, which represents the DOM node displaying the count, is updated from `"Count: 0"` to `"Count: 1"`.
  - React schedules this as a high-priority update since it's directly visible to the user.

- **Task 3: Skip button Fiber** ----> [no change]

  - The **button Fiber** is analyzed, but React determines that there is no change in the button element (its text and behavior remain the same), so it skips re-rendering the button.

- **Task 4: Skip div and p Fibers** ----> [no change]
  - The parent `div` and child `p` elements are part of the component structure but are unaffected by the state change. React skips updating these elements as there are no visual or structural changes.
  - React optimizes the rendering process by deferring or skipping unnecessary tasks.

## 1.3. Patching the Real DOM

Patching refers to the process of applying those changes to the Real DOM. This is where React efficiently updates the UI by making minimal changes, avoiding a complete re-render of the entire DOM.

- After comparing the old and new Virtual DOM trees, React identifies the minimal set of changes.
- React **patches** the Real DOM by updating only the h1 element to display "Count: 1".

```html
<h1>Count: 1</h1>
```

- No unnecessary updates are made to other elements like the button or paragraphs, ensuring an efficient update process.

## 2. Reflow and Paint (Efficient Updates)

Once the Real DOM is patched, the browser performs reflow and repaint operations:

- **Reflow:** The browser recalculates the layout for the updated **h1** element. This involves determining the position, size, and layout of the updated element. The other elements remain unaffected, so no additional reflow is required for them.

- **Repaint:** The **h1** element is repainted with the new text "Count: 1". Since no other parts of the DOM were affected, no additional repaints are necessary.

## Key Advantages of React's Virtual DOM and Fiber Tree:

1. **Batching of Updates:**

- Multiple state updates are batched before being applied to the Real DOM, reducing the number of reflows and paints required.

2. **Efficient Diffing:**

- The Virtual DOM comparison detects the smallest changes between the old and new DOM trees, ensuring that only the necessary parts of the Real DOM are updated.

3. **Fiber Architecture:**

- The Fiber tree optimizes the scheduling of updates, ensuring that rendering work is broken into manageable tasks that can be paused or prioritized for better performance.

4. **Minimal Reflow/Paint:**

- Only the elements that actually change (in this case, the h1 element) are reflowed and repainted, minimizing the performance cost and speeding up rendering.
