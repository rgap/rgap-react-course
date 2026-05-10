import React, { useState, useEffect } from "react";

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Define the handler function separately so we can reference it
    // in both addEventListener and removeEventListener.
    function handleMouseMove(event) {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    console.log("🟢 Setup: Adding mousemove listener to window");
    window.addEventListener("mousemove", handleMouseMove);

    // ✅ Cleanup: remove the exact same function reference
    return () => {
      console.log("🔴 Cleanup: Removing mousemove listener from window");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ border: "2px solid purple", padding: "10px", marginTop: "10px" }}>
      <p>
        🖱️ Mouse position: ({position.x}, {position.y})
      </p>
    </div>
  );
}

function ScrollLogger() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
      console.log("Scroll position:", window.scrollY);
    }

    console.log("🟢 Setup: Adding scroll listener to window");
    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log("🔴 Cleanup: Removing scroll listener from window");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ border: "2px solid orange", padding: "10px", marginTop: "10px" }}>
      <p>📜 Scroll Y: {scrollY}px</p>
    </div>
  );
}

function App() {
  const [showMouse, setShowMouse] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", minHeight: "200vh" }}>
      <h1>Cleanup with Event Listeners</h1>
      <p>Open the console and toggle each component.</p>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button onClick={() => setShowMouse((prev) => !prev)}>
          {showMouse ? "Remove Mouse Tracker" : "Show Mouse Tracker"}
        </button>
        <button onClick={() => setShowScroll((prev) => !prev)}>
          {showScroll ? "Remove Scroll Logger" : "Show Scroll Logger"}
        </button>
      </div>

      {showMouse && <MouseTracker />}
      {showScroll && <ScrollLogger />}

      <div style={{ marginTop: "20px" }}>
        <h2>Important Rule</h2>
        <p>
          You must pass the <strong>exact same function reference</strong> to both{" "}
          <code>addEventListener</code> and <code>removeEventListener</code>.
        </p>
        <p>
          That is why we define <code>handleMouseMove</code> as a named function inside the effect,
          and then reference it in both places.
        </p>
      </div>
    </div>
  );
}

export default App;