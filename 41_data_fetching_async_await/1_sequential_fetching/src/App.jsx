import React, { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSequentialData = async () => {
      try {
        setIsLoading(true);

        // 1. Fetch the user FIRST
        console.log("Fetching user...");
        const userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!userRes.ok) throw new Error("User fetch failed");
        const userJson = await userRes.json();
        setUserData(userJson);

        // 2. We CANNOT fetch the posts until we know the user's ID!
        // This is sequential by necessity.
        console.log(`User fetched! Now fetching posts for user ${userJson.id}...`);
        const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userJson.id}`);
        if (!postsRes.ok) throw new Error("Posts fetch failed");
        const postsJson = await postsRes.json();
        setPosts(postsJson);

        console.log("All data fetched!");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSequentialData();
  }, []);

  if (isLoading) return <div style={{ padding: "20px" }}>⏳ Fetching data sequentially...</div>;
  if (error) return <div style={{ padding: "20px", color: "red" }}>❌ {error}</div>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Sequential Data Fetching</h1>
      
      <div style={{ backgroundColor: "#e3f2fd", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
        <h2>👤 User Profile</h2>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
      </div>

      <h2>📝 Recent Posts ({posts.length})</h2>
      <ul style={{ paddingLeft: "20px" }}>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;