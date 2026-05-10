import React, { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  // This is just a plain object created during render.
  // We are NOT doing any expensive calculation here!
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#fff",
    color: darkTheme ? "#fff" : "#333",
  };

  // We have a useEffect that depends on `themeStyles`.
  // It simulates doing something whenever the theme changes.
  useEffect(() => {
    console.log("Theme changed! Running effect...");
  }, [themeStyles]);

  return (
    <div style={{ ...themeStyles, padding: "20px", minHeight: "100vh", fontFamily: "Arial" }}>
      <h1>The Referential Equality Problem</h1>
      
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
          style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
        />
        <button onClick={() => setDarkTheme((prev) => !prev)}>
          Toggle Theme
        </button>
      </div>

      <div style={{ marginTop: "20px", maxWidth: "600px", backgroundColor: "#f9f9f9", padding: "15px", color: "black" }}>
        <h2>Check the Console</h2>
        <p>
          1. Click <strong>Toggle Theme</strong>. You will see "Theme changed!" in the console. This makes sense.
        </p>
        <p>
          2. Now, type a number in the input box.
        </p>
        <p>
          <strong>Wait, why is "Theme changed!" logging again?</strong> The theme didn't change! We only changed the number!
        </p>
        <p>
          This is the <strong>referential equality problem</strong>. React thinks <code>themeStyles</code> changed, even though the colors inside it are exactly the same.
        </p>
      </div>
    </div>
  );
}

export default App;