import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function SearchPage() {
  return (
    <div>
      <h2>🔍 Search Results</h2>
      <p>Imagine this page fetches and displays search results based on the URL.</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>What are Search Parameters?</h1>
      
      <nav style={{ marginBottom: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Notice the ? in these URLs! */}
        <Link to="/search?query=react">Search for "react"</Link>
        <Link to="/search?query=javascript&sort=newest">Search for "javascript" (Sort: newest)</Link>
        <Link to="/search?query=css&sort=oldest&page=2">Search for "css" (Sort: oldest, Page: 2)</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          {/* 
            CRITICAL: Notice we do NOT put the ? in the path. 
            React Router automatically ignores search parameters when matching routes! 
          */}
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>The Anatomy of a URL</h2>
        <p>Look at this URL:</p>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
          localhost:5173/search?query=react&sort=newest
        </pre>
        <ul>
          <li><strong>Pathname:</strong> <code>/search</code></li>
          <li><strong>Query String:</strong> <code>?query=react&sort=newest</code></li>
        </ul>
        <p>
          The Query String (or "Search Parameters") always starts with a <strong>?</strong>, and multiple parameters are separated by an <strong>&amp;</strong>.
        </p>
      </div>
    </div>
  );
}

export default App;