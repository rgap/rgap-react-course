import React, { useRef } from "react";

function App() {
  /*
    1. useRef creates a ref object.
    A ref is like a small container that React keeps between renders.
    At first, inputRef.current is null because the input does not exist
    in the browser yet.
  */
  const inputRef = useRef(null);

  function handleClick() {
    /*
      3. When the button is clicked, we read the input value.
      inputRef.current points to the real <input> element in the DOM.
      So this:
        inputRef.current.value
      means:
        "Go to the real input element and get the text inside it."
    */
    alert(inputRef.current.value);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple useRef Example</h1>

      {/*
        2. The ref attribute connects inputRef to this input.
        After React creates this input in the browser,
        React stores the actual DOM element inside:
          inputRef.current
        This is why we can later read:
          inputRef.current.value
      */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Write something"
      />

      {/*
        4. This button does not update React state.
        It only runs handleClick, and handleClick reads the current
        value directly from the input.
      */}
      <button onClick={handleClick}>
        Show Value
      </button>
    </div>
  );
}

export default App;
