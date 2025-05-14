function App() {
  // The {} syntax is used to embed JavaScript expressions inside the JSX
  // without it, it will be treated as a string and displayed as is in the browser

  // So everything you need to use JavaScript inside JSX, you need to wrap it in {}
  // What's inside {} can contain any valid JavaScript expression and also JSX expressions
  return <>
    {true ? <div>Hello, React!</div> : <div>Hello, Not React!</div>}
  </>;

}

export default App;
