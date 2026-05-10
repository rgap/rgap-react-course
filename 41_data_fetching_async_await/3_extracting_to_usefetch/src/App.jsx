import React, { useState } from "react";
// 1. Import our custom hook!
import { useFetch } from "./useFetch";

function UserProfile({ userId }) {
  // 2. Look how incredibly clean this is!
  // All the useEffect, AbortController, and Try/Catch logic is hidden away.
  const { data: user, isLoading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  // 3. We just handle the render logic!
  if (isLoading) return <p>⏳ Loading user {userId}...</p>;
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;

  return (
    <div style={{ padding: "15px", border: "2px solid #2196f3", borderRadius: "8px", marginTop: "20px" }}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}

function App() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Extracting to <code>useFetch</code></h1>
      
      <p>Select a user to view their profile:</p>
      
      <div style={{ display: "flex", gap: "10px" }}>
        {[1, 2, 3].map(id => (
          <button 
            key={id} 
            onClick={() => setActiveId(id)}
            style={{ fontWeight: activeId === id ? "bold" : "normal" }}
          >
            User {id}
          </button>
        ))}
      </div>

      <UserProfile userId={activeId} />
      
      <div style={{ marginTop: "30px", maxWidth: "600px", color: "#555" }}>
        <h3>Why do this?</h3>
        <p>Look at the <code>UserProfile</code> component code. It's only 15 lines long! We completely removed the boilerplate <code>useEffect</code> block.</p>
        <p>If we need to fetch a list of Posts in another component, we just call <code>useFetch('/posts')</code>. DRY (Don't Repeat Yourself) at its finest.</p>
      </div>
    </div>
  );
}

export default App;