import React from "react";

function App() {
  /*
    1. TRIGGER:
    The first trigger happens when the app starts.
    React needs to show <App /> on the screen,
    so React starts the rendering process.

    Important:
    - The trigger itself does not update the DOM.
    - The trigger only tells React:
      "Start rendering."
  */

  /*
    After the trigger, React enters the Render Phase.
    This console.log runs because React called
    the App component function.
  */
  console.log("After the trigger: React called App.");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>

      <h2>What happened?</h2>
      <ol>
        <li>
          The app starts. That is the first trigger. 
        </li>
        <li>
          Because of that trigger, React starts rendering the App component.
        </li>
      </ol>
    </div>
  );
}

export default App;