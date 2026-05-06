import React from "react";

function App() {
  /*
    1. TRIGGER:
    The trigger already happened before this function was called.
    In this example:
    - The app started.
    - React needed to show <App />.
  */

  /*
    2. RENDER PHASE:
    React is now calling the App component function.
    Everything inside this function runs during render:
    - this console.log
    - the constants below
    - the return statement
  */
  console.log("RENDER PHASE: React called App.");

  /*
    - These constants also run during render.
    - They are NOT commit work.
    - They are only normal JavaScript values used to calculate JSX.
  */
  const title = "This is a title";
  const message = "This is a message";

  /*
    3. COMMIT PHASE
    Commit does NOT happen inside this function.
    This function only returns JSX.
    After this function returns, React updates the real DOM.
  */
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{title}</h1>
      <p>{message}</p>

      <h2>What happened?</h2>
      <ol>
        <li>
          <strong>Trigger:</strong> The app started.
        </li>
        <li>
          <strong>Render:</strong> React called this component function.
        </li>
        <li>
          <strong>Commit:</strong> React updated the real DOM after this function returned JSX.
        </li>
      </ol>
    </div>
  );
}

export default App;