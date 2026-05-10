import React, { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  // This is a plain JavaScript function.
  // Like objects and arrays, functions are re-created on EVERY render.
  // It gets a brand new memory address every time App re-renders.
  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  // We pass the function into a child component (or in this case, an effect)
  useEffect(() => {
    console.log("getItems function changed! Fetching items...");
    // Imagine we actually fetch data here
  }, [getItems]); 

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#fff",
    color: darkTheme ? "#fff" : "#333",
    padding: "20px",
    minHeight: "100vh",
    fontFamily: "Arial",
  };

  return (
    <div style={themeStyles}>
      <h1>Functions and Referential Equality</h1>
      
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
          1. Type a number. You will see "getItems function changed!" log. This is expected because the number changed.
        </p>
        <p>
          2. Click <strong>Toggle Theme</strong>.
        </p>
        <p>
          <strong>Wait, why did the effect run again?</strong> We didn't change the number!
        </p>
        <p>
          Because in JavaScript, functions are objects! <code>() =&gt; &#123;&#125; === () =&gt; &#123;&#125;</code> is <strong>false</strong>.
          Every render creates a brand new function, so React thinks the dependency changed.
        </p>
      </div>
    </div>
  );
}

export default App;