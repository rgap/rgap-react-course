import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  // The event handler automatically receives the event object "e"
  function handleInputChange(e) {
    // e is a React SyntheticEvent!
    console.log(e);
    // e.target refers to the DOM element that triggered the event
    setText(e.target.value);
  }

  function handleMouseEnter(e) {
    console.log("Mouse entered at coordinates: X=", e.clientX, " Y=", e.clientY);
  }

  return (
    <div>
      <h1>Synthetic Events</h1>
      
      <p>Type something to see the event in action:</p>
      <input 
        type="text" 
        value={text} 
        onChange={handleInputChange} 
        placeholder="Type here..."
      />
      <p>You typed: <strong>{text}</strong></p>

      <div 
        onMouseEnter={handleMouseEnter}
        style={{ padding: "20px", background: "#eee", marginTop: "20px" }}
      >
        Hover over me and check the console!
      </div>
    </div>
  );
}

export default App;
