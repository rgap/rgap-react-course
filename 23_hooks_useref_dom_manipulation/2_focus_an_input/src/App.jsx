import React, { useRef, useEffect } from "react";

function AutoFocusInput() {
  const inputRef = useRef(null);

  // Focus the input automatically when the component mounts
  useEffect(() => {
    inputRef.current.focus();
    console.log("Input focused on mount!");
  }, []);

  return (
    <div style={{ border: "2px solid blue", padding: "10px", marginTop: "10px" }}>
      <h3>Auto-Focus on Mount</h3>
      <input
        ref={inputRef}
        type="text"
        placeholder="I am focused automatically!"
        style={{ padding: "8px", fontSize: "16px", width: "300px" }}
      />
    </div>
  );
}

function FocusOnClick() {
  const inputRef = useRef(null);

  function handleClick() {
    // Programmatically focus the input when the button is clicked
    inputRef.current.focus();

    // We can also select all the text inside the input
    inputRef.current.select();
  }

  return (
    <div style={{ border: "2px solid green", padding: "10px", marginTop: "10px" }}>
      <h3>Focus on Button Click</h3>
      <input
        ref={inputRef}
        type="text"
        defaultValue="Click the button to focus me"
        style={{ padding: "8px", fontSize: "16px", width: "300px" }}
      />
      <br />
      <button onClick={handleClick} style={{ marginTop: "8px" }}>
        Focus and Select Text
      </button>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Focus an Input with useRef</h1>
      <p>
        The most common DOM manipulation in React is focusing an input.
        This cannot be done with props or state — it requires direct DOM access.
      </p>

      <AutoFocusInput />
      <FocusOnClick />

      <div style={{ marginTop: "20px" }}>
        <h2>Key Methods</h2>
        <ul>
          <li><code>ref.current.focus()</code> — moves the cursor into the input.</li>
          <li><code>ref.current.blur()</code> — removes focus from the input.</li>
          <li><code>ref.current.select()</code> — selects all text inside the input.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;