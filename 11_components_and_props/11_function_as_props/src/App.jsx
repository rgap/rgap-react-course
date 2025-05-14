import React from "react";

// The Message component accepts a function as a prop and calls it when clicked.
function Message(props) {
  return <button onClick={props.showMessage}>Show Message</button>;
}

function App() {
  // A simple function that logs a message to the console.
  function logMessage() {
    console.log("Hello from Message component!");
  }

  return (
    <div>
      <h1>Log Message Example</h1>

      {/* Passing the logMessage function as a prop to the Message component */}
      <Message showMessage={logMessage} />
    </div>
  );
}

export default App;
