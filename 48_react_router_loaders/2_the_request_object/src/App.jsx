import React, { useState } from "react";
import { Outlet, useNavigation, useNavigate } from "react-router-dom";

function App() {
  const [query, setQuery] = useState("");
  const { state } = useNavigation();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    
    // We navigate to /search?q=myQuery
    navigate(`/search?q=${query}`);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <header style={{ backgroundColor: "#2196f3", color: "white", padding: "20px", borderRadius: "8px" }}>
        <h2 style={{ margin: "0 0 15px 0" }}>Search Posts</h2>
        <form onSubmit={handleSearch} style={{ display: "flex", gap: "10px" }}>
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search e.g. 'eos'..."
            style={{ flex: 1, padding: "10px", borderRadius: "4px", border: "none" }}
          />
          <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>Search</button>
        </form>
        {state === "loading" && <p style={{ margin: "10px 0 0 0", fontStyle: "italic" }}>Searching database...</p>}
      </header>
      
      <main style={{ padding: "20px", opacity: state === "loading" ? 0.5 : 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;