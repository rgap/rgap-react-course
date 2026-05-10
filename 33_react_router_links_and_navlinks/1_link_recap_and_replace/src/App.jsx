import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>🏠 Home</h2>
      <p>Click "Go to Step 1" to begin a multi-step process.</p>
    </div>
  );
}

function Step1() {
  return (
    <div>
      <h2>Step 1: The Form</h2>
      <p>Imagine you fill out a form here and click "Submit".</p>
      
      {/* Normal link: Adds a new entry to the browser history */}
      <Link to="/step2">Go to Step 2 (Normal Link)</Link>
    </div>
  );
}

function Step2() {
  return (
    <div>
      <h2>Step 2: Processing</h2>
      <p>Imagine this page processes your payment, and then redirects you to the Success page.</p>
      
      {/* Replace link: Replaces the CURRENT entry in the browser history */}
      <Link to="/success" replace>Go to Success (REPLACE Link)</Link>
      
      <p style={{ marginTop: "20px", fontStyle: "italic", color: "#666" }}>
        Normally, this redirect happens automatically via code, but we use a Link here for demonstration.
      </p>
    </div>
  );
}

function Success() {
  return (
    <div>
      <h2 style={{ color: "green" }}>✅ Success!</h2>
      <p>Now, try clicking your browser's BACK arrow.</p>
      <p>
        Because Step 2 used <strong>replace</strong>, the browser history overwrote Step 2 with the Success page.
        Therefore, clicking back skips Step 2 entirely and takes you straight back to Step 1!
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Link Recap and Replace</h1>
      
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Back to Start</Link>
        <span style={{ margin: "0 10px" }}>|</span>
        <Link to="/step1">Go to Step 1</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;