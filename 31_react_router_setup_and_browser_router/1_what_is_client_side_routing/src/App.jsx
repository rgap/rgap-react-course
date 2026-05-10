import React, { useState } from "react";

// In a traditional React app without a router, we simulate pages using state.
// This is NOT true routing.

function Home() {
  return <h2>🏠 Home Page</h2>;
}

function About() {
  return <h2>ℹ️ About Us</h2>;
}

function Contact() {
  return <h2>📞 Contact Page</h2>;
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Simulated Routing (No Router)</h1>
      
      <nav style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("about")}>About</button>
        <button onClick={() => setCurrentPage("contact")}>Contact</button>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        {currentPage === "home" && <Home />}
        {currentPage === "about" && <About />}
        {currentPage === "contact" && <Contact />}
      </div>

      <div style={{ marginTop: "20px", maxWidth: "600px" }}>
        <h2>The Problem</h2>
        <p>This works, but it has massive flaws:</p>
        <ol>
          <li><strong>The URL doesn't change:</strong> It always says <code>localhost:5173/</code>.</li>
          <li><strong>No Bookmarks:</strong> You cannot bookmark the "About" page. If you refresh, you go back to Home.</li>
          <li><strong>No Back Button:</strong> Clicking the browser's "Back" arrow will leave the app entirely, rather than going to the previous page.</li>
        </ol>
        <p>To fix this, we need a <strong>Client-Side Router</strong>.</p>
      </div>
    </div>
  );
}

export default App;