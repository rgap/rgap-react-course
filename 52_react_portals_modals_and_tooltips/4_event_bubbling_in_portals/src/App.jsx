import React, { useState } from "react";
import { createPortal } from "react-dom";

function App() {
  const [clicks, setClicks] = useState(0);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  // This handler is attached to the parent container!
  const handleContainerClick = () => {
    setClicks(prev => prev + 1);
  };

  return (
    <div 
      onClick={handleContainerClick} 
      style={{ padding: "50px", border: "5px dashed #4caf50", backgroundColor: "#e8f5e9", fontFamily: "Arial" }}
    >
      <h1>Event Bubbling Magic ✨</h1>
      <p>Clicks detected on this container (or its children): <strong>{clicks}</strong></p>
      
      <button onClick={() => setIsPortalOpen(true)}>Open Portal</button>

      {/* The Portal Component */}
      {isPortalOpen && createPortal(
        <div style={{ position: "fixed", top: "20px", right: "20px", padding: "20px", backgroundColor: "#333", color: "white", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.5)" }}>
          <h3>I am a Portal!</h3>
          <p>I physically live inside <code>&lt;div id="portal-root"&gt;</code>.</p>
          <p>I am completely outside of the green dashed border.</p>
          
          <button style={{ padding: "10px", backgroundColor: "#ffeb3b", border: "none", cursor: "pointer", fontWeight: "bold" }}>
            Click Me!
          </button>
          
          <button onClick={() => setIsPortalOpen(false)} style={{ display: "block", marginTop: "15px", background: "none", color: "#ccc", border: "none", cursor: "pointer" }}>
            Close Portal
          </button>
        </div>,
        document.getElementById("portal-root")
      )}
      
      <p style={{ marginTop: "30px", fontSize: "14px", color: "#666" }}>
        <strong>Task:</strong> Open the portal and click the yellow button. Watch the click counter go up!
      </p>
    </div>
  );
}

export default App;