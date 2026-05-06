import React from "react";

function App() {
  /*
    1. TRIGGER:
    The trigger already happened before this function was called.
    In this example, the trigger was:
    - The app started.
    - React needed to show <App /> on the screen.
    Important:
    - We do NOT use console.log for the trigger here.
    - Any console.log inside this function runs during render.
    - So the trigger is explained with comments and UI text.
  */

  /*
    2. RENDER PHASE:
    After the trigger, React calls this component function.
    This console.log proves that React is now rendering.
  */
  console.log("RENDER PHASE: React called App.");

  /*
    - During render, React calculates what the UI should look like.
    - These values are safe because they only help create the JSX.
  */
  const title = "This is a title";
  const message = "This is a message";

  /*
    This return gives React a JSX description.
    - JSX is not the real DOM.
    - JSX only describes what the UI should look like.
    After this, React will move to the Commit Phase.
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
          <strong>Render:</strong> React called the App component function.
        </li>
      </ol>
    </div>
  );
}

export default App;