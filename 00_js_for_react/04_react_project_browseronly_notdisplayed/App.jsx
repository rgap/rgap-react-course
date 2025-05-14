// JSX (JavaScript XML)
// JSX stands for JavaScript XML and allows us to write HTML-like syntax in our JavaScript files.
// JSX is not required in React, but it makes creating UI elements easier and more readable.

// JSX allows you to write HTML elements in JavaScript and place them in the DOM without using createElement() or appendChild() methods.
const App = () => {
  return <h1>Hello, world!</h1>;
};

// Make sure ReactDOM renders the component in the root element
// Old version: ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
