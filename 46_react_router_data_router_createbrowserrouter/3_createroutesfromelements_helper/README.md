# 3. The `createRoutesFromElements` Helper

When transitioning an existing application to the Data Router, manually rewriting hundreds of lines of `<Route>` JSX into JavaScript Objects can be extremely tedious.

Additionally, many developers simply prefer the visual readability of JSX trees over deeply nested object arrays.

---

## The Best of Both Worlds

To solve this, React Router provides a helper function called `createRoutesFromElements`.

This function allows you to write your routes using the exact same `<Route>` tags you used in previous versions, but it parses them into the Data Router format!

```jsx
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  )
);
```

Behind the scenes, this function simply iterates over the JSX tree and returns the massive Array of Objects required by `createBrowserRouter`.

You get all the powerful, decoupled benefits of the Data Router, while maintaining the familiar, readable syntax of standard React Router!

*(Note: In the professional industry, both the Object syntax and the JSX syntax are widely used. It is completely up to team preference. You should be comfortable reading both!)*
