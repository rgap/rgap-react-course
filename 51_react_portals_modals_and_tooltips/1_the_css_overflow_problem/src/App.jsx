import React, { useState } from "react";
import "./index.css";

function DashboardWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="widget">
      <h2>Sales Data</h2>
      <p>Click below to view the detailed report.</p>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {/* The Modal is rendered INSIDE the widget */}
      {isOpen && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h3>Detailed Report</h3>
            <p>This is the modal! It is supposed to cover the entire screen and block interaction with the background.</p>
            <p>But because the parent container has `overflow: hidden`, our `position: fixed` modal is trapped!</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
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
        <p>Notice how the main content area is designed to prevent scrolling (overflow: hidden).</p>
        
        <DashboardWidget />
      </div>
    </div>
  );
}

export default App;