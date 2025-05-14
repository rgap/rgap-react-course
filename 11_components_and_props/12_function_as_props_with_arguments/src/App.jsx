import React from "react";

// The Button component receives a function as a prop and calls it with an argument when clicked.
function Button(props) {
  return <button onClick={() => props.handleClick("Custom Message")}>Click Me</button>;
}

function App() {
  // Define a function that takes a message as an argument.
  function showMessage(message) {
    alert(message);
  }

  return (
    <div>
      <h1>Function as Props with Arguments</h1>

      {/* Passing a function that accepts an argument */}
      <Button handleClick={showMessage} />
    </div>
  );
}

export default App;
