# 1. The Prop Drilling Problem

Before learning Context, we need to understand the problem it solves.

---

## What is Prop Drilling?

**Prop drilling** is when you pass a prop through multiple layers of components, even though only the deepest component actually needs it.

```txt
App (owns the data)
  ↓ passes prop
Page (doesn't use it)
  ↓ passes prop
Toolbar (doesn't use it)
  ↓ passes prop
Button (finally uses it) ✅
```

Page and Toolbar are just "middlemen." They receive the prop and pass it along without ever using it.

---

## Why Is This a Problem?

1. **Readability:** Every middleman component has an extra prop it doesn't care about.
2. **Maintenance:** If you rename the prop or change its type, you have to update every single component in the chain.
3. **Scalability:** As the tree grows deeper (5, 10, 15 levels), drilling becomes unmanageable.
4. **Refactoring:** Moving a component to a different place in the tree might break the prop chain.

---

## A Simple Example

```jsx
function App() {
  const [theme, setTheme] = useState("light");
  return <Page theme={theme} />;
}

function Page({ theme }) {
  // I don't use 'theme'. I just pass it down.
  return <Toolbar theme={theme} />;
}

function Toolbar({ theme }) {
  // I don't use 'theme' either. I just pass it down.
  return <Button theme={theme} />;
}

function Button({ theme }) {
  // I finally use it!
  return <button className={theme}>Click me</button>;
}
```

---

## The Ideal Solution

What if Button could access `theme` directly, without it being passed through Page and Toolbar?

```txt
App (owns the data)
  ↓ provides data to the tree
Page
  Toolbar
    Button (reads data directly) ✅
```

This is exactly what the **Context API** does. We will learn it in the next lessons.
