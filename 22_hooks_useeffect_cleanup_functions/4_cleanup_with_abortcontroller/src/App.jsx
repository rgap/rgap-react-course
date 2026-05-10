import React, { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create an AbortController for this specific effect run.
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchUser() {
      setLoading(true);
      setError(null);

      try {
        console.log(`🟢 Fetching user ${userId}...`);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal } // Pass the signal to fetch
        );
        const data = await response.json();
        console.log(`✅ Got user ${userId}:`, data.name);
        setUser(data);
      } catch (err) {
        // AbortError means WE cancelled it on purpose. That is fine.
        if (err.name === "AbortError") {
          console.log(`🟡 Fetch for user ${userId} was cancelled.`);
        } else {
          console.error("Fetch error:", err);
          setError(err.message);
        }
      } finally {
        // Only set loading to false if the fetch was NOT aborted
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchUser();

    // ✅ Cleanup: abort the fetch if the component unmounts or userId changes
    return () => {
      console.log(`🔴 Cleanup: Aborting fetch for user ${userId}`);
      controller.abort();
    };
  }, [userId]);

  if (loading) return <p>Loading user {userId}...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ border: "2px solid teal", padding: "10px", marginTop: "10px" }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

function App() {
  const [userId, setUserId] = useState(1);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Cleanup with AbortController</h1>
      <p>Open the console and quickly click different users to see cancellations.</p>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px", flexWrap: "wrap" }}>
        {[1, 2, 3, 4, 5].map((id) => (
          <button
            key={id}
            onClick={() => setUserId(id)}
            style={{ fontWeight: userId === id ? "bold" : "normal" }}
          >
            User {id}
          </button>
        ))}
        <button onClick={() => setShowProfile((prev) => !prev)}>
          {showProfile ? "Remove Profile" : "Show Profile"}
        </button>
      </div>

      {showProfile && <UserProfile userId={userId} />}

      <div style={{ marginTop: "20px" }}>
        <h2>Why AbortController?</h2>
        <p>
          If the user clicks "User 1", then immediately clicks "User 2", the fetch for User 1 is
          still in progress. Without cleanup, both responses would arrive, and the UI
          might briefly show User 1 before switching to User 2 (a <strong>race condition</strong>).
        </p>
        <p>
          By aborting the old fetch in the cleanup function, we guarantee that only the
          <strong> latest</strong> request will update the state.
        </p>
      </div>
    </div>
  );
}

export default App;