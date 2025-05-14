import React from "react";

function App() {
  // In this example, a React element is created and
  // the conditional expression true ? ... : ... is evaluated directly inside the argument
  // Notice that only single-line expressions can be used in this way and not multi-line expressions
  // such as if-else statements
  // This is because the return statement can only return a single expression

  return React.createElement(
    React.Fragment,
    null,
    true
      ? React.createElement("div", null, "Hello, React!")
      : React.createElement("div", null, "Hello, Not React!")
  );
}

export default App;
