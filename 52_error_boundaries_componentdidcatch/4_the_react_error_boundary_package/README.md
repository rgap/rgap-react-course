# 4. `react-error-boundary`

Writing custom Class Components for every error boundary is tedious. It forces developers who are only familiar with modern React Hooks to learn legacy Class syntax just to handle errors.

To solve this, the React community standardized around a wildly popular package called `react-error-boundary` (created by Brian Vaughn, a former core React team member).

---

## Why use the library?

The library provides a highly flexible `<ErrorBoundary>` component that abstracts the Class syntax away entirely.

It gives you three massive benefits:

### 1. Functional Fallback Components
Instead of writing a `render()` method in a class, you just pass a standard functional component to the `FallbackComponent` prop.

```jsx
function ErrorUI({ error }) {
  return <h1>{error.message}</h1>;
}

<ErrorBoundary FallbackComponent={ErrorUI}>
  <FragileComponent />
</ErrorBoundary>
```

### 2. Easy Analytics Logging
Instead of writing a `componentDidCatch` method, you just pass a callback function to the `onError` prop.

```jsx
<ErrorBoundary onError={(error) => logToDatadog(error)}>
```

### 3. Error Resetting (Try Again)
Sometimes components crash because of a temporary network hiccup. The library passes a `resetErrorBoundary` prop to your Fallback UI. If the user clicks a "Try Again" button, the library destroys the error state and attempts to re-render the fragile component from scratch!

```jsx
function ErrorUI({ resetErrorBoundary }) {
  return <button onClick={resetErrorBoundary}>Try Again</button>;
}
```

This package is universally considered the gold standard for Error Boundaries in standard React applications (that aren't using React Router 6.4+).
