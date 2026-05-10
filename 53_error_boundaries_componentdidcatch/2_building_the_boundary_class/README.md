# 2. Building the Boundary Class

To catch errors in React, we must build an **Error Boundary**.

An Error Boundary is simply a React component that implements a specific lifecycle method called `getDerivedStateFromError`.

**CRITICAL NOTE:** React has never released a Hook equivalent for Error Boundaries. Therefore, Error Boundaries **must** be written as older-style Class Components. You cannot write an Error Boundary using a functional component!

---

## `getDerivedStateFromError`

When a child component crashes, React pauses before unmounting the application. It looks up the React tree to see if any parent component is an Error Boundary.

If it finds one, it calls the `static getDerivedStateFromError(error)` method on that class.

This method expects you to return a state update object (e.g., `{ hasError: true }`). React then immediately re-renders the Error Boundary with the new state, allowing it to render a fallback UI instead of the crashed child!

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}
```

By wrapping `<FragileWidget>` inside `<ErrorBoundary>`, we successfully isolate the crash. The Widget is replaced by the error message, but the rest of the application remains perfectly functional!
