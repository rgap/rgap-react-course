function MyComponent() {
  // In JSX, we return a group of elements enclosed in parentheses.
  // This helps with readability when the JSX spans multiple lines.
  // Without parentheses, you risk automatic semicolon insertion (ASI) issues.
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a JSX return example using parentheses.</p>
    </div>
  );
}

// The return statement here is wrapped in parentheses to avoid ASI issues
// and to keep the JSX neatly organized over multiple lines.

export default MyComponent;
