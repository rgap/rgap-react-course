import React from "react";
import { Outlet, Link, useLoaderData, useRouteError } from "react-router-dom";

// 1. The Products Layout
export function Products() {
  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      <div style={{ width: "200px", borderRight: "2px solid #ccc", paddingRight: "20px" }}>
        <h3>Sidebar</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}><Link to="/products/1">Product 1</Link></li>
          <li style={{ marginBottom: "10px" }}><Link to="/products/2">Product 2</Link></li>
          <li style={{ marginBottom: "10px" }}><Link to="/products/broken" style={{ color: "red" }}>Broken Product</Link></li>
        </ul>
      </div>
      
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

// 2. The Product Detail (Child Route)
export function ProductDetail() {
  const product = useLoaderData();
  return (
    <div>
      <h2>{product.name} #{product.id}</h2>
      <p>This product loaded successfully.</p>
    </div>
  );
}

// 3. The Localized Error Boundary!
export function LocalError() {
  const error = useRouteError();
  
  // Notice this renders IN PLACE of the Outlet inside <Products />!
  // It does NOT replace the entire page!
  return (
    <div style={{ padding: "20px", backgroundColor: "#ffebee", border: "2px solid red", borderRadius: "8px" }}>
      <h3 style={{ color: "red", margin: "0 0 10px 0" }}>⚠️ Product Section Crashed</h3>
      <p style={{ margin: 0 }}>{error.message}</p>
    </div>
  );
}
