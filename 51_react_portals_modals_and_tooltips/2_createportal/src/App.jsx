import React, { useState } from "react";
// 1. Import createPortal from react-dom
import { createPortal } from "react-dom";
import "./index.css";

function DashboardWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // 2. We define the JSX we want to render
  const modalUI = (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3>Detailed Report</h3>
        <p>This modal is rendered through a Portal! Notice how it successfully breaks out of the `.main-content` bounds and covers the whole screen.</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </div>
  );

  return (
    <div className="widget">
      <h2>Sales Data</h2>
      <p>Click below to view the detailed report.</p>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {/* 3. Instead of rendering modalUI directly, we wrap it in createPortal! */}
      {/* We pass the JSX, and we pass the DOM node we want to teleport it to. */}
      {isOpen && createPortal(modalUI, document.getElementById("portal-root"))}
    </div>
  );
}

function App() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li>Dashboard</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>

      <div className="main-content">
        <h1>Welcome Back</h1>
        <p>The main content area still has `overflow: hidden`.</p>
        
        <DashboardWidget />
      </div>
    </div>
  );
}

export default App;