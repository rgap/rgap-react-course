import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>🏠 Blog Home</h2>
      <ul style={{ lineHeight: "1.8" }}>
        <li><Link to="/posts/react-hooks">Read: React Hooks</Link></li>
        <li><Link to="/posts/css-grid">Read: CSS Grid</Link></li>
        <li><Link to="/posts/typescript">Read: TypeScript</Link></li>
      </ul>
    </div>
  );
}

// A single component that will render for ALL the links above
function BlogPost() {
  return (
    <div style={{ backgroundColor: "#f9f9f9", padding: "20px", border: "1px solid #ddd" }}>
      <h2>📝 Blog Post Viewer</h2>
      <p>This is the generic blog post component.</p>
      <p style={{ color: "red", fontWeight: "bold" }}>
        Problem: How does this component know which post it's supposed to show?
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Dynamic Segments</h1>
      
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Back to Home</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* 
            The colon ':' creates a DYNAMIC SEGMENT.
            This route will match /posts/ANYTHING 
            (e.g. /posts/react-hooks, /posts/123, /posts/apple)
          */}
          <Route path="/posts/:postId" element={<BlogPost />} />
          
        </Routes>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>The Syntax</h2>
        <p>
          We defined the route as <code>path="/posts/:postId"</code>.
        </p>
        <p>
          The colon <code>:</code> tells React Router that <code>postId</code> is a variable, not a literal string. 
          If you go to <code>/posts/hello</code>, React Router matches the route and assigns the value "hello" to the variable "postId".
        </p>
      </div>
    </div>
  );
}

export default App;