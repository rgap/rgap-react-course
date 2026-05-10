import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract the filter from the URL
  // If it's missing, default to "all"
  const filter = searchParams.get("filter") || "all";

  // Simulate a database of products
  const products = [
    { id: 1, name: "Air Force 1", type: "shoes" },
    { id: 2, name: "Graphic Tee", type: "shirts" },
    { id: 3, name: "Running Shoes", type: "shoes" },
    { id: 4, name: "Polo", type: "shirts" },
  ];

  // We derive the visible products directly from the URL 'filter' variable!
  const visibleProducts = filter === "all" 
    ? products 
    : products.filter(p => p.type === filter);

  return (
    <div style={{ padding: "20px" }}>
      <h2>👕 Product List</h2>
      
      {/* 
        Notice what happens when you click these buttons.
        We do NOT call useState(setFilter). 
        We call setSearchParams!
      */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button 
          onClick={() => setSearchParams({ filter: "all" })}
          style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
        >
          All
        </button>
        <button 
          onClick={() => setSearchParams({ filter: "shoes" })}
          style={{ fontWeight: filter === "shoes" ? "bold" : "normal" }}
        >
          Shoes Only
        </button>
        <button 
          onClick={() => setSearchParams({ filter: "shirts" })}
          style={{ fontWeight: filter === "shirts" ? "bold" : "normal" }}
        >
          Shirts Only
        </button>
      </div>

      <ul style={{ padding: "0", listStyle: "none" }}>
        {visibleProducts.map(p => (
          <li key={p.id} style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
            {p.name} <span style={{ color: "gray", fontSize: "12px" }}>({p.type})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>useSearchParams AS State</h1>
      
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/products">Go to Products Page</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>The State is in the URL!</h2>
        <p>
          There is no <code>useState</code> hook inside the Products component!
        </p>
        <p>
          Instead of storing the active filter in React's memory, we stored it directly in the URL.
        </p>
        <ol>
          <li>Click "Shoes Only". Notice the URL changes.</li>
          <li>Copy the URL from your browser's address bar.</li>
          <li>Open a new browser tab and paste the URL.</li>
          <li>It instantly loads with the "Shoes Only" filter active!</li>
        </ol>
      </div>
    </div>
  );
}

export default App;