const App = () => {
  return <h1>Hello, world!</h1>;
};

// Make sure ReactDOM renders the component in the root element
// Old version: ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
