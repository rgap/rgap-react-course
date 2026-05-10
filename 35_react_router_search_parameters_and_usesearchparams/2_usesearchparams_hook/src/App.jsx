import React from "react";
// 1. Import useSearchParams
import { Routes, Route, Link, useSearchParams } from "react-router-dom";

function SearchPage() {
  // 2. Call the hook! It returns an array, exactly like useState!
  // The first element is the search parameters object.
  // The second element is a setter function (we'll learn that in the next lesson).
  const [searchParams] = useSearchParams();

  // 3. To read a value, you MUST use the .get() method!
  const query = searchParams.get("query");
  const sort = searchParams.get("sort");
  const page = searchParams.get("page");

  return (
    <div style={{ backgroundColor: "#e3f2fd", padding: "20px", borderRadius: "5px" }}>
      <h2>🔍 Search Results</h2>
      
      <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
        <p><strong>Query:</strong> {query ? `"${query}"` : <em>(none)</em>}</p>
        <p><strong>Sort:</strong> {sort ? sort : <em>(none)</em>}</p>
        <p><strong>Page:</strong> {page ? page : <em>(none)</em>}</p>
      </div>

      {query ? (
        <p>Pretending to fetch results for "{query}"...</p>
      ) : (
        <p style={{ color: "orange" }}>Please enter a search query!</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The useSearchParams Hook</h1>
      
      <nav style={{ marginBottom: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link to="/search">No parameters</Link>
        <Link to="/search?query=react">Search: react</Link>
        <Link to="/search?query=javascript&sort=newest">Search: javascript, newest</Link>
        <Link to="/search?query=css&sort=oldest&page=2">Search: css, oldest, page 2</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;