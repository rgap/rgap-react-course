import React, { useRef } from "react";
import { VideoPlayer } from "./VideoPlayer.jsx";

function App() {
  const playerRef = useRef(null);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "50px auto", padding: "20px" }}>
      <h1><code>useImperativeHandle</code></h1>
      
      {/* 
        The parent passes a ref. 
        But playerRef.current will NOT be the native HTMLVideoElement!
        It will be our custom API object: { play(), pause(), reset() } 
      */}
      <VideoPlayer ref={playerRef} />
      
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button 
          onClick={() => playerRef.current.play()} 
          style={{ padding: "10px", backgroundColor: "#4caf50", color: "white", border: "none", cursor: "pointer", borderRadius: "4px" }}
        >
          Play
        </button>
        
        <button 
          onClick={() => playerRef.current.pause()} 
          style={{ padding: "10px", backgroundColor: "#ff9800", color: "white", border: "none", cursor: "pointer", borderRadius: "4px" }}
        >
          Pause
        </button>

        <button 
          onClick={() => playerRef.current.reset()} 
          style={{ padding: "10px", backgroundColor: "#f44336", color: "white", border: "none", cursor: "pointer", borderRadius: "4px" }}
        >
          Reset
        </button>
      </div>

    </div>
  );
}

export default App;