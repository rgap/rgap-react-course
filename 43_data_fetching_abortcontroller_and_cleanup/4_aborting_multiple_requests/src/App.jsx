import React, { useState, useEffect } from "react";

function UserDashboard({ userId }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 1. One controller to rule them all
    const controller = new AbortController();

    const fetchDashboardData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        console.log(`[START] Fetching Dashboard Data for User ${userId}`);
        
        // 2. We pass the EXACT SAME signal to BOTH requests!
        const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
          signal: controller.signal
        });
        
        const postsPromise = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
          signal: controller.signal
        });

        // Artificially delay so we have time to abort
        await new Promise(res => setTimeout(res, 2000));

        const [userRes, postsRes] = await Promise.all([userPromise, postsPromise]);
        
        const [userData, postsData] = await Promise.all([
          userRes.json(),
          postsRes.json()
        ]);

        console.log(`[FINISH] Dashboard fetched for User ${userId}`);
        setData({ user: userData, posts: postsData });

      } catch (err) {
        if (err.name === "AbortError") {
          console.warn(`[ABORTED] Dashboard fetch for User ${userId} cancelled.`);
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();

    return () => {
      // 3. This single call kills ALL fetches that share the signal!
      controller.abort();
    };
  }, [userId]);

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (loading || !data) return <p>⏳ Loading Dashboard...</p>;

  return (
    <div style={{ border: "2px solid purple", padding: "20px", marginTop: "20px" }}>
      <h2>{data.user.name}'s Dashboard</h2>
      <p>Total Posts: {data.posts.length}</p>
      <ul>
        {data.posts.slice(0, 3).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [activeUserId, setActiveUserId] = useState(1);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Aborting Multiple Requests</h1>
      
      <p>
        Click between the buttons rapidly. Even though we are fetching users and posts simultaneously using <code>Promise.all</code>, the cleanup function successfully kills <strong>both</strong> network requests instantly.
      </p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setActiveUserId(1)}>Dashboard 1</button>
        <button onClick={() => setActiveUserId(2)}>Dashboard 2</button>
        <button onClick={() => setActiveUserId(3)}>Dashboard 3</button>
      </div>

      <UserDashboard userId={activeUserId} />
    </div>
  );
}

export default App;