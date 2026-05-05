import React, { useState } from "react";

function App() {
  // 1. Create state to store the input value.
  // At the beginning, the input is empty.
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple Controlled Input</h1>

      <input
        type="text"

        // 2. The input value comes from React state.
        // This makes React the "source of truth".
        value={name}

        // 3. Every time the user types, this event runs.
        // event.target.value is the current text inside the input.
        // Then setName updates the React state.
        onChange={(event) => setName(event.target.value)}

        placeholder="Enter your name"
      />

      {/* 4. Because the text is stored in state, we can show it anywhere. */}
      <p>Hello, {name}</p>
    </div>
  );
}

export default App;
