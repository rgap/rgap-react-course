import React, { useState } from "react";
import { Routes, Route, Link, useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Create a local state just for the input field
  const [inputValue, setInputValue] = useState(searchParams.get("query") || "");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    // 1. Update the URL!
    // We pass an object to setSearchParams.
    // React Router will automatically serialize this into ?query=whatever
    setSearchParams({ query: inputValue });
  };

  const handleClear = () => {
    setInputValue("");
    // 2. Clear the URL parameters by passing an empty object
    setSearchParams({});
  };

  const currentQuery = searchParams.get("query");

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>🔍 Search Database</h2>
      
      <form onSubmit={handleSearchSubmit} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Search..."
          style={{ padding: "8px", fontSize: "16px", flex: 1 }}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>

      {currentQuery ? (
        <div style={{ backgroundColor: "#e8f5e9", padding: "15px", borderRadius: "5px" }}>
          Showing results for: <strong>{currentQuery}</strong>
        </div>
      ) : (
        <p style={{ color: "#666" }}>Enter a search term above.</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Updating Search Parameters</h1>
      
      <nav style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <Link to="/search">Go to Search Page</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>Watch the URL!</h2>
        <p>
          Type something into the input box and click "Search".
        </p>
        <p>
          Notice that the URL in your browser changes instantly. Because the URL changes, React Router triggers a re-render of the component.
        </p>
      </div>
    </div>
  );
}

export default App;