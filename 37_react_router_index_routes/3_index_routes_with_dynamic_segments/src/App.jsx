import React from "react";
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>🏠 Blog Home</h2>
      <ul style={{ lineHeight: "1.8" }}>
        <li><Link to="/posts/react-hooks">Post: React Hooks</Link></li>
        <li><Link to="/posts/css-grid">Post: CSS Grid</Link></li>
      </ul>
    </div>
  );
}

// -------------------------------------------------------------------
// The Parent Layout (Uses Dynamic Segments)
// -------------------------------------------------------------------
function BlogPostLayout() {
  // The layout can access the dynamic segment
  const { postId } = useParams();

  return (
    <div style={{ display: "flex", gap: "20px", border: "2px solid #2196f3", padding: "10px" }}>
      
      {/* Blog Post Navigation */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px", width: "200px", backgroundColor: "#e3f2fd", padding: "10px" }}>
        <h3>Navigation for: {postId}</h3>
        {/* Notice the relative links! */}
        <Link to=".">Read the Article (Index)</Link>
        <Link to="comments">View Comments</Link>
        <Link to="author">About the Author</Link>
      </nav>

      <div style={{ flex: 1, backgroundColor: "#fff", padding: "20px", border: "1px solid #ccc" }}>
        <Outlet />
      </div>

    </div>
  );
}

// -------------------------------------------------------------------
// The Child Components
// -------------------------------------------------------------------
function BlogPostContent() {
  // The Index route can ALSO access the dynamic segment from the parent!
  const { postId } = useParams();

  return (
    <div>
      <h3 style={{ color: "#2e7d32" }}>Article: {postId}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
  );
}

function BlogPostComments() {
  return <div><h3>Comments</h3><p>User comments go here.</p></div>;
}

function BlogPostAuthor() {
  return <div><h3>Author</h3><p>Written by Jane Doe.</p></div>;
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Index Routes & Dynamic Segments</h1>
      
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Back to Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* 
          1. The Parent Route has a dynamic segment (:postId)
        */}
        <Route path="/posts/:postId" element={<BlogPostLayout />}>
          
          {/* 
            2. The Index Route
               If the URL is "/posts/react-hooks", this renders.
               It acts as the default content for that specific blog post!
          */}
          <Route index element={<BlogPostContent />} />
          
          {/* Sibling routes relative to the dynamic segment */}
          {/* URL: /posts/react-hooks/comments */}
          <Route path="comments" element={<BlogPostComments />} />
          
          {/* URL: /posts/react-hooks/author */}
          <Route path="author" element={<BlogPostAuthor />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;