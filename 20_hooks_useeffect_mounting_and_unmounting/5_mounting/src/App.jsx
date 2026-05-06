import React, { useState, useEffect } from "react";

function App() {
  console.log("1. App rendered");

  useEffect(() => {
    // This function runs only ONCE after the first render (mount)
    // because the dependency array [] is empty.
    console.log("2. App mounted (Effect ran)");
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Mounting with useEffect</h1>
      <p>Open the console to see the mounting log.</p>
      
      <h2>What is Mounting?</h2>
      <p>
        Mounting is the phase when a component is created and inserted into the
        DOM for the first time.
      </p>
      
      <h2>How do we detect it?</h2>
      <p>
        We pass an empty dependency array <code>[]</code> to <code>useEffect</code>.
        This tells React to only run the effect ONCE, right after the initial render.
      </p>
    </div>
  );
}

export default App;