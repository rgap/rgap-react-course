import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Fetch 5 posts for the current page
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
        if (!res.ok) throw new Error("Failed to fetch posts");
        
        const newPosts = await res.json();
        
        // CRITICAL: We don't overwrite the array. We MERGE the new posts with the old ones!
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPage();
  }, [page]); // Re-run whenever `page` changes!

  const handleLoadMore = () => {
    // Incrementing the page triggers the useEffect!
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Infinite Scroll (Load More)</h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {posts.map(post => (
          <div key={post.id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
            <h3 style={{ margin: "0 0 10px 0" }}>{post.id}. {post.title}</h3>
            <p style={{ margin: "0", color: "#555" }}>{post.body}</p>
          </div>
        ))}
      </div>

      {error && <p style={{ color: "red", textAlign: "center" }}>❌ {error}</p>}
      
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {isLoading ? (
          <p>⏳ Loading more posts...</p>
        ) : (
          <button 
            onClick={handleLoadMore}
            style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#2196f3", color: "white", border: "none", borderRadius: "5px" }}
          >
            Load Page {page + 1}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;