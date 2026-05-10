# 3. BrowserRouter and Routes

Setting up React Router involves two main parts:
1. Providing the routing context (`BrowserRouter`).
2. Defining the route mappings (`Routes` and `Route`).

---

## 1. `BrowserRouter`

The `<BrowserRouter>` component connects your React app to the web browser's URL.

Under the hood, it uses the **Context API**. It creates a Provider that holds the current URL and gives all child components access to the routing history.

You only render `<BrowserRouter>` **once**, at the very top of your application tree, usually in `main.jsx` (or `index.js`).

```jsx
// main.jsx
import { BrowserRouter } from "react-router-dom";
import App from "./App";

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

## 2. `Routes` and `Route`

Once the `BrowserRouter` is set up, you define which components should render for which URLs.

You do this using the `<Routes>` and `<Route>` components, usually inside `App.jsx`.

```jsx
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
```

### `<Routes>`
This acts like a `switch` statement in JavaScript. It looks at the current URL and looks through its children to find the **best match**.

### `<Route>`
This defines a mapping.
- `path` is the URL string (e.g., `"/about"`).
- `element` is the JSX you want to render (e.g., `<About />`).

---

## The Catch-All (404 Page)

What happens if the user types a URL that doesn't exist, like `/asdfasdf`?

You can create a "catch-all" route using the wildcard `*` path. Place this at the bottom of your `<Routes>` list.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  
  {/* If nothing above matched, render this: */}
  <Route path="*" element={<NotFound />} />
</Routes>
```
