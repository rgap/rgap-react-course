import React, { useState } from "react";
import { Modal } from "./Modal.jsx";
import "./index.css";

function DashboardWidget() {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <div className="widget">
      <h2>Sales Data</h2>
      <p>Manage your sales report below.</p>
      
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setIsReportOpen(true)} style={{ backgroundColor: "#2196f3", color: "white", padding: "8px 16px", border: "none", borderRadius: "4px" }}>
          View Report
        </button>
        <button onClick={() => setIsDeleteOpen(true)} style={{ backgroundColor: "#f44336", color: "white", padding: "8px 16px", border: "none", borderRadius: "4px" }}>
          Delete
        </button>
      </div>

      {/* Reusable Modal 1 */}
      <Modal 
        isOpen={isReportOpen} 
        onClose={() => setIsReportOpen(false)} 
        title="Q3 Sales Report"
      >
        <p>Sales were up 24% this quarter!</p>
        <p>Excellent job team.</p>
      </Modal>

      {/* Reusable Modal 2 */}
      <Modal 
        isOpen={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)} 
        title="Confirm Deletion"
      >
        <p>Are you absolutely sure you want to delete this widget? This action cannot be undone.</p>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
          <button onClick={() => setIsDeleteOpen(false)}>Cancel</button>
          <button onClick={() => setIsDeleteOpen(false)} style={{ backgroundColor: "#f44336", color: "white" }}>Yes, Delete</button>
        </div>
      </Modal>
    </div>
  );
}

function App() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul><li>Dashboard</li></ul>
      </div>

      <div className="main-content">
        <h1>Reusable Modal Component</h1>
        <DashboardWidget />
      </div>
    </div>
  );
}

export default App;