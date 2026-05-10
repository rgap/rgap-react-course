import React, { useState } from "react";
// 1. Import Navigate
import { Routes, Route, Link, Navigate } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>🏠 Home Page</h2>
      <p>Go to the old /about-us page and see what happens!</p>
      
      <div style={{ marginTop: "20px" }}>
        <Link to="/about-us">Go to /about-us (Legacy Link)</Link>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2 style={{ color: "purple" }}>ℹ️ The New About Page</h2>
      <p>This is the new home for our company information.</p>
    </div>
  );
}

// Imagine a scenario where a product doesn't exist in the database.
function ProductDetail() {
  const [productExists, setProductExists] = useState(false); // Hardcoded to false for demo

  // 2. We can return a <Navigate> component to forcefully redirect the user
  // during the render cycle, without needing useEffect!
  if (!productExists) {
    return <Navigate to="/404" replace />;
  }

  return <div>Product Details...</div>;
}

function NotFound() {
  return <h2 style={{ color: "red" }}>❌ 404 - Not Found</h2>;
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The &lt;Navigate /&gt; Component</h1>
      
      <nav style={{ marginBottom: "20px", display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About (New Link)</Link>
        <Link to="/product/123">View Product 123</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* 
            3. Declarative Route Redirects
            If the user visits /about-us, React Router matches this route, 
            renders the <Navigate /> component, and instantly redirects them to /about
          */}
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          
          <Route path="/about" element={<About />} />
          
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;