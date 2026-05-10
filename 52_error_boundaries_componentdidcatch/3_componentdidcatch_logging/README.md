# 3. `componentDidCatch`

In the previous lesson, we used `getDerivedStateFromError` to catch the error and update the state to render a fallback UI.

However, `getDerivedStateFromError` is called during the "Render" phase. In React, the Render phase must be pure. You are not allowed to perform side effects (like network requests) inside of it.

If a component crashes in production, we need to log that error to an external monitoring service (like Sentry or Datadog) so our engineers can fix it!

---

## `componentDidCatch`

React provides a second Error Boundary lifecycle method specifically designed for side effects: `componentDidCatch`.

This method receives two arguments:
1. `error`: The actual error that was thrown.
2. `errorInfo`: An object containing a `componentStack` property, which provides a detailed trace of exactly which components were rendering when the crash happened!

```jsx
class ErrorBoundary extends React.Component {
  // ... getDerivedStateFromError code ...

  componentDidCatch(error, errorInfo) {
    // You can safely perform side effects here!
    
    // 1. Send error to analytics
    logErrorToMyService(error, errorInfo.componentStack);
    
    // 2. Log to console
    console.error("Component Stack Trace:", errorInfo.componentStack);
  }
}
```

By combining `getDerivedStateFromError` (for the UI) and `componentDidCatch` (for the analytics), you have built a complete, production-grade Error Boundary.
