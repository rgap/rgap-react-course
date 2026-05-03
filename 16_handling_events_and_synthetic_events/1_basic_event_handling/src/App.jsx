import React from "react";

function App() {
  function handleClick() {
    alert("Button was clicked!");
  }

  return (
    <div>
      <h1>Basic Event Handling</h1>
      {/* 
        Notice that we pass the function reference `handleClick` 
        instead of invoking it like `handleClick()`.
        If we invoked it, it would fire immediately when the component renders!
      */}
      <button onClick={handleClick}>Click Me!</button>

      {/* 
        Inline functions are also very common for simple logic:
      */}
      <button onClick={() => alert("Inline button clicked!")}>
        Inline Click
      </button>
    </div>
  );
}

export default App;
