export default function App() {
  const name = "React"; // This is a JavaScript expression (a simple variable assignment)

  return (
    <div>
      {/* This is a JSX expression because it mixes JavaScript and HTML-like syntax */}
      <h1>Hello, {name}!</h1> {/* JavaScript expression (name) inside JSX */}
      <p>{2 + 2}</p> {/* JavaScript expression (2 + 2) inside JSX */}
    </div>
  );
}
