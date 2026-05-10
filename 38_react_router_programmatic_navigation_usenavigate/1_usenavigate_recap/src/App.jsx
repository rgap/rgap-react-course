import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>🏠 Home</h2>
      <p>This is a quick recap of the <code>useNavigate</code> hook.</p>
      
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <button onClick={() => navigate("/page2")}>
          Go to Page 2
        </button>
      </div>
    </div>
  );
}

function Page2() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>📄 Page 2</h2>
      <p>You can use the hook to manipulate browser history.</p>
      
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {/* Pass -1 to go back, like the browser back button */}
        <button onClick={() => navigate(-1)} style={{ backgroundColor: "#ccc", color: "#333" }}>
          ⬅️ Go Back
        </button>
        
        {/* Pass { replace: true } to overwrite the current history entry */}
        <button onClick={() => navigate("/page3", { replace: true })} style={{ backgroundColor: "#2196f3", color: "white" }}>
          Go to Page 3 (Replace)
        </button>
      </div>
    </div>
  );
}

function Page3() {
  return (
    <div>
      <h2 style={{ color: "green" }}>✅ Page 3</h2>
      <p>Because you used <code>replace: true</code> to get here, clicking your browser's Back Arrow will skip Page 2 entirely!</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>useNavigate Recap</h1>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px", marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;