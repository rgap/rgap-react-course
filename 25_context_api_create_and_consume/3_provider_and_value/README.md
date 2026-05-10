# 3. Provider and value

After creating a context with `createContext`, the next step is to **provide** a value to the component tree.

---

## The Provider Component

Every context object has a `.Provider` component:

```jsx
<ThemeContext.Provider value="dark">
  {/* All children can access "dark" */}
</ThemeContext.Provider>
```

The `value` prop is the data you want to share. Any component inside the Provider can read this value, no matter how deeply nested it is.

---

## How It Solves Prop Drilling

Before (with props):

```txt
App (owns theme)
  ↓ theme prop
Page (passes theme)
  ↓ theme prop
Toolbar (passes theme)
  ↓ theme prop
Button (uses theme)
```

After (with Context):

```txt
App
  ↓ ThemeContext.Provider value={theme}
Page (no prop)
  Toolbar (no prop)
    Button → useContext(ThemeContext) ✅
```

Page and Toolbar are no longer middlemen. They don't need to know about `theme` at all.

---

## The Provider Wraps the Tree

You wrap your component tree with the Provider:

```jsx
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Page />
    </ThemeContext.Provider>
  );
}
```

Every component inside `<ThemeContext.Provider>` can now access `theme`.

---

## Dynamic Values

The `value` prop can be anything: a string, number, object, or even state.

When the value changes (e.g., state updates), React automatically re-renders all components that consume this context.

```jsx
// The value is state, so it can change
<ThemeContext.Provider value={theme}>
```

When `theme` changes from `"light"` to `"dark"`, every consumer re-renders with the new value.

---

## Nested Providers

You can nest providers. The closest Provider above a consumer wins:

```jsx
<ThemeContext.Provider value="light">
  <Toolbar />  {/* reads "light" */}
  
  <ThemeContext.Provider value="dark">
    <Sidebar />  {/* reads "dark" */}
  </ThemeContext.Provider>
</ThemeContext.Provider>
```

---

## Summary

| Concept        | Description                                           |
| -------------- | ----------------------------------------------------- |
| `Provider`     | A component that supplies a value to its children      |
| `value` prop   | The data shared through the context                    |
| Scope          | All components inside the Provider can access the value|
| Dynamic        | When value changes, consumers re-render automatically  |
