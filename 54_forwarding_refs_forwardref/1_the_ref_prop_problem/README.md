# 1. The `ref` Prop Problem

In Module 22, we learned how to use `useRef` to gain direct access to DOM elements (like an `<input>`) so we can call native APIs like `.focus()`.

```jsx
const inputRef = useRef(null);

<input ref={inputRef} />

inputRef.current.focus(); // Works perfectly!
```

This works great when you are rendering a native HTML element. But what happens if you want to focus an input that is hidden inside a *custom component*?

---

## Swallowing the Prop

If you try to pass a `ref` prop to a custom React functional component, React explicitly prevents it.

```jsx
function SearchBar(props) {
  // props.ref DOES NOT EXIST! React swallowed it.
  return <input />;
}

// In the Parent:
<SearchBar ref={searchRef} />
```

If you do this, React will log an angry warning in your console:
> **"Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?"**

### Why does React do this?

By default, React components are black boxes. A parent component shouldn't be allowed to blindly reach into a child component and start manipulating its internal HTML elements. This violates the principles of encapsulated UI.

However, sometimes you *really* need a parent to focus a child's input. To do this, the child component must explicitly "opt-in" to receiving a ref by using `React.forwardRef`.
