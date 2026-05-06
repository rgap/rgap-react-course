import React, { useEffect } from "react";

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
    - the useEffect setup line below
    - the return statement
    - the JSX description below

    JSX is NOT the real DOM yet.
  */
  console.log("2. RENDER PHASE: React called App.");

  /*
    - These constants also run during render.
    - They are NOT effect work.
    - They do NOT run after the UI appears.
    - They are only normal JavaScript values used to calculate JSX.
    - React will use this JSX result later during commit.
  */
  const title = "This is a title";
  const message = "This is a message";

  /*
    5. EFFECT PHASE:
    This code registers an effect during render.
    But the function inside useEffect does NOT run during render.
    React runs this effect after:
    - render
    - commit
    - paint
  */
  useEffect(() => {
    console.log("EFFECT PHASE: React ran the effect after the UI update.");
  }, []);

  /*
    3. COMMIT PHASE:
    - Commit does NOT happen inside this function.
    - After this function returns JSX, React updates the real DOM.

    4. PAINT:
    - Paint also does NOT happen inside this function.
    - After React updates the real DOM, the browser paints the result on the screen.
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
        <li>
          <strong>Commit:</strong> React updated the real DOM.
        </li>
        <li>
          <strong>Paint:</strong> The browser showed the UI on the screen.
        </li>
        <li>
          <strong>Effect:</strong> React ran the effect after the UI update.
        </li>
      </ol>
    </div>
  );
}

export default App;