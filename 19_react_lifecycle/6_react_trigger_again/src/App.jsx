import React, { useEffect, useState } from "react";

function App() {
  /*
    1. FIRST TRIGGER:
    The first trigger already happened before this function was called.
  */

  /*
    2. RENDER PHASE:
    React calls this component function during render.
  */
  console.log("RENDER PHASE: React called App.");

  /*
    This state value belongs to React.
    When count changes, React renders this component again.
  */
  const [count, setCount] = useState(0);

  /*
    These constants also run during render.
  */
  const title = "This is a title";
  const message = "This is a message";

  function handleClick() {
    /*
      ANOTHER TRIGGER: STATE CHANGE:
      - This function runs when the user clicks the button.
      - When we call setCount, the state changes.
      - That state change tells React: "Render this component again."

      Important:
      - setCount does NOT immediately change the real DOM by itself.
      - It schedules a new render.
    */
    console.log("TRIGGER: State will change because the user clicked.");

    setCount(count + 1);
  }

  /*
    5. EFFECT PHASE:
    React runs this effect after: trigger -> render -> commit -> paint
  */
  useEffect(() => {
    console.log("EFFECT PHASE: React ran the effect after the UI update.");
  }, []);
  
  /*
    3. COMMIT PHASE:
    - After this function returns JSX, React updates the real DOM.

    4. PAINT:
    - After React updates the real DOM, the browser paints the result on the screen.
  */
 
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{title}</h1>
      <p>{message}</p>
      
      <h2>Counter: {count}</h2>

      <button onClick={handleClick}>
        Increase Count
      </button>

      <h2>What happens when you click?</h2>
      <ol>
        <li>
          <strong>User clicks:</strong> The button event runs.
        </li>
        <li>
          <strong>State changes:</strong> <code>setCount</code> updates the count.
        </li>
        <li>
          <strong>Trigger:</strong> React needs to render again.
        </li>
        <li>
          <strong>Render:</strong> React calls App again.
        </li>
        <li>
          <strong>Commit:</strong> React updates the real DOM.
        </li>
        <li>
          <strong>Paint:</strong> The browser shows the new count.
        </li>
      </ol>
    </div>
  );
}

export default App;