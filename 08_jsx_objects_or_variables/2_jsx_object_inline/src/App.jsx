export default function App() {
  // Here, an <h1> element is nested inside a JSX expression block `{}`.
  // The expression block `{}` tells React to evaluate its contents as JavaScript.
  // Even though placing <h1> directly would work, wrapping it in `{}` is valid too.

  return <div>{<h1>Hello, World!</h1>}</div>;
}
