# 2. Installing React Router DOM

Unlike Angular or Vue, React does not have an official, built-in router. React is "just a UI library".

Because of this, the community built **React Router**, which has become the absolute industry standard for React applications.

---

## Installation

To install React Router for a web project, you must run:

```bash
npm install react-router-dom
```

### Why `-dom`?

React Router is split into multiple packages:
- `react-router`: The core routing engine (never install this directly).
- `react-router-dom`: The web bindings (uses the browser's History API).
- `react-router-native`: The mobile bindings (for React Native apps).

When you install `react-router-dom`, it automatically installs the core `react-router` package under the hood.

---

## React Router v6

React Router underwent a massive rewrite in version 6 (released late 2021). 

If you look up tutorials online, **make sure they are for React Router v6**. Code written for React Router v5 will completely crash in v6, as almost all the API names and patterns were changed.

In this curriculum, we are using the modern React Router v6 API.
