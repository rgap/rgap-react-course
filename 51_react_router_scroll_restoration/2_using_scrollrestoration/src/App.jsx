import React, { useState } from "react";
import { useFetch } from "./useFetch";

function PostDetails({ postId }) {
  // Consuming our custom hook!
  const { data: post, isLoading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  if (isLoading) return <div style={{ padding: "20px" }}>⏳ Loading Post {postId}...</div>;
  if (error) return <div style={{ padding: "20px", color: "red" }}>❌ {error}</div>;
  if (!post) return null;

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", marginTop: "20px" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

function App() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "600px" }}>
      <h1>The Basic <code>useFetch</code> Hook</h1>
      <p>We've extracted all the boilerplate into a custom hook. Look how clean the <code>PostDetails</code> component is!</p>
      
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {[1, 2, 3].map(id => (
          <button 
            key={id} 
            onClick={() => setActiveId(id)}
            style={{ fontWeight: activeId === id ? "bold" : "normal" }}
          >
            Load Post {id}
          </button>
        ))}
      </div>

      <PostDetails postId={activeId} />
    </div>
  );
}

export default App;