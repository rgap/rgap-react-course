import React, { createContext } from "react";

// Step 1: Create a context.
// createContext takes an optional default value.
// This default is only used when a component reads the context
// but there is NO Provider above it in the tree.
const ThemeContext = createContext("light");

// Let's also export it so other files can import it later.
// (In this single-file example we use it directly below.)

function App() {
  // For now, we just created the context.
  // We are NOT providing or consuming it yet.
  // That comes in the next lessons.

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>createContext</h1>

      <div style={{ marginTop: "10px" }}>
        <h2>What we did</h2>
        <p>
          We called <code>createContext("light")</code> and stored the result in{" "}
          <code>ThemeContext</code>.
        </p>

        <h2>What is ThemeContext?</h2>
        <p>
          It is an object that React uses internally. It has two important properties:
        </p>
        <ul>
          <li>
            <code>ThemeContext.Provider</code> — a component that supplies the value.
          </li>
          <li>
            <code>ThemeContext.Consumer</code> — an older way to read the value (we will use{" "}
            <code>useContext</code> instead).
          </li>
        </ul>

        <h2>The default value</h2>
        <p>
          We passed <code>"light"</code> as the default. This value is only used as
          a fallback if a component tries to read the context but there is no
          Provider above it in the component tree.
        </p>
      </div>
    </div>
  );
}

export { ThemeContext };
export default App;