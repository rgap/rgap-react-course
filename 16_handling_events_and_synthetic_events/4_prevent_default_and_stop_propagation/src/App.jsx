import React from "react";

function App() {
  function handleSubmit(e) {
    // Prevents the browser from refreshing the page!
    e.preventDefault();
    alert("Form submitted without refreshing the page!");
  }

  function handleOuterDivClick() {
    alert("Outer DIV clicked! The event bubbled up.");
  }

  function handleInnerButtonClick(e) {
    // Prevents the event from bubbling up to the outer div
    e.stopPropagation();
    alert("Inner BUTTON clicked! Bubbling stopped.");
  }

  return (
    <div>
      <h1>Prevent Default & Stop Propagation</h1>

      <h2>1. preventDefault()</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type something..." />
        <button type="submit">Submit Form</button>
      </form>

      <hr />

      <h2>2. stopPropagation()</h2>
      <div 
        onClick={handleOuterDivClick} 
        style={{ padding: "30px", background: "lightblue" }}
      >
        Outer Div
        <br />
        <br />
        <button onClick={handleInnerButtonClick}>
          Inner Button (Stops Bubbling)
        </button>
      </div>
    </div>
  );
}

export default App;
