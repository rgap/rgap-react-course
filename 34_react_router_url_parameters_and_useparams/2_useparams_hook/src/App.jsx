import React from "react";
// 1. Import useParams
import { Routes, Route, Link, useParams } from "react-router-dom";

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

function BlogPost() {
  // 2. Call useParams to get an object containing all URL variables
  const params = useParams();
  
  // The key 'postId' exactly matches the ':postId' defined in the Route path.
  const currentPostId = params.postId;

  return (
    <div style={{ backgroundColor: "#e3f2fd", padding: "20px", border: "1px solid #90caf9", borderRadius: "5px" }}>
      <h2>📝 Blog Post Viewer</h2>
      <p>
        The component successfully read the URL! You requested the post with ID:
      </p>
      
      <div style={{ backgroundColor: "white", padding: "10px", fontSize: "24px", fontWeight: "bold", textAlign: "center", color: "#1565c0" }}>
        "{currentPostId}"
      </div>
      
      <p style={{ marginTop: "20px", color: "#555" }}>
        In a real app, we would now take <code>"{currentPostId}"</code> and use it in a <code>useEffect</code> to fetch the post data from an API!
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The useParams Hook</h1>
      
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Back to Home</Link>
      </nav>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:postId" element={<BlogPost />} />
        </Routes>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>Check the Object</h2>
        <p>If you console.log <code>useParams()</code> while on the React Hooks page, you will see:</p>
        <pre style={{ backgroundColor: "#eee", padding: "10px" }}>
          {`{ postId: "react-hooks" }`}
        </pre>
      </div>
    </div>
  );
}

export default App;