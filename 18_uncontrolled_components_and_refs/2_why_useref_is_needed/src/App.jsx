import React from "react";

function App() {
  function handleClick() {
    /*
      2. When the button is clicked, we read the input value
      using a vanilla JavaScript DOM query.
        ❌ ANTI-PATTERN IN REACT
      This technically works, but it breaks React's rules.
      React relies on a Virtual DOM, and digging directly into the
      real DOM like this makes your code fragile.
    */
    const inputElement = document.getElementById("vanilla-input");
    alert(inputElement.value);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Why we need useRef()</h1>

      {/*
        1. We give the input an ID so we can find it later.
        If we render this component twice on the same page, 
        we will have duplicate IDs, which breaks HTML!
      */}
      <input
        id="vanilla-input"
        type="text"
        placeholder="Write something"
      />

      {/* 
        3. This triggers the bad practice DOM query.
      */}
      <button onClick={handleClick}>
        Show Value (Bad Way)
      </button>
    </div>
  );
}

export default App;
