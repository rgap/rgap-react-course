import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>🏬 Store Front</h2>
      <ul style={{ lineHeight: "1.8" }}>
        <li><Link to="/store/electronics/iphone-15">View: Electronics - iPhone 15</Link></li>
        <li><Link to="/store/clothing/t-shirt">View: Clothing - T-Shirt</Link></li>
        <li><Link to="/store/groceries/apples">View: Groceries - Apples</Link></li>
      </ul>
    </div>
  );
}

function ProductDetail() {
  // We can destructure MULTIPLE parameters from the hook!
  const { category, productId } = useParams();

  return (
    <div style={{ backgroundColor: "#e8f5e9", padding: "20px", border: "1px solid #81c784", borderRadius: "5px" }}>
      <h2>📦 Product Details</h2>
      
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ flex: 1, backgroundColor: "white", padding: "10px", textAlign: "center" }}>
          <p style={{ margin: 0, color: "#666" }}>Category</p>
          <h3 style={{ margin: "5px 0", color: "#2e7d32" }}>{category}</h3>
        </div>
        
        <div style={{ flex: 1, backgroundColor: "white", padding: "10px", textAlign: "center" }}>
          <p style={{ margin: 0, color: "#666" }}>Product ID</p>
          <h3 style={{ margin: "5px 0", color: "#2e7d32" }}>{productId}</h3>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Multiple URL Parameters</h1>
      
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Back to Home</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* 
            Notice we have TWO colons here!
            This creates two separate variables we can pull out later.
          */}
          <Route path="/store/:category/:productId" element={<ProductDetail />} />
          
        </Routes>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>How it works</h2>
        <p>
          If you go to <code>/store/electronics/iphone-15</code>, React Router matches the path structure:
        </p>
        <ul>
          <li><strong>/store/</strong> matches the static string</li>
          <li><strong>:category</strong> becomes "electronics"</li>
          <li><strong>:productId</strong> becomes "iphone-15"</li>
        </ul>
        <p>
          <code>useParams()</code> will return: <code>{`{ category: "electronics", productId: "iphone-15" }`}</code>
        </p>
      </div>
    </div>
  );
}

export default App;