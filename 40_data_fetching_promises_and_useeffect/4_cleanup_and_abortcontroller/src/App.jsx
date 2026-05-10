import React, { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Create an AbortController instance
    const controller = new AbortController();

    const fetchUser = async () => {
      try {
        setUser(null);
        setError(null);
        
        // We use a slow API (3 second delay) to easily see the race condition
        // 2. Pass the controller's signal to the fetch request!
        const response = await fetch(`https://reqres.in/api/users/${userId}?delay=3`, {
          signal: controller.signal 
        });

        if (!response.ok) throw new Error("Fetch failed");
        
        const json = await response.json();
        setUser(json.data);
      } catch (err) {
        // 3. Ignore the error if the request was intentionally aborted!
        if (err.name === "AbortError") {
          console.log(`Fetch for user ${userId} was aborted!`);
        } else {
          setError(err.message);
        }
      }
    };

    fetchUser();

    // 4. Cleanup function!
    // If the component unmounts OR the `userId` prop changes, React runs this cleanup function.
    // It cancels the pending fetch request immediately.
    return () => {
      controller.abort();
    };
  }, [userId]); // Dependency array: Re-run if userId changes

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!user) return <p>Loading user {userId} data...</p>;

  return (
    <div style={{ padding: "20px", border: "2px solid #4caf50", marginTop: "20px" }}>
      <img src={user.avatar} alt="avatar" />
      <h2>{user.first_name} {user.last_name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

function App() {
  const [activeUserId, setActiveUserId] = useState(1);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Cleanup & AbortController</h1>
      
      <p>Click these buttons really fast! Notice how the UI does NOT glitch and show the wrong user.</p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setActiveUserId(1)}>Load User 1</button>
        <button onClick={() => setActiveUserId(2)}>Load User 2</button>
        <button onClick={() => setActiveUserId(3)}>Load User 3</button>
      </div>

      <UserProfile userId={activeUserId} />
      
      <div style={{ marginTop: "30px", maxWidth: "600px", color: "#666" }}>
        <h3>What is happening?</h3>
        <p>If you click User 1, then immediately click User 2, the fetch for User 1 is still running in the background.</p>
        <p>Because `userId` changed, React runs the cleanup function for User 1. This triggers `controller.abort()`, which instantly kills the fetch request for User 1.</p>
        <p>This prevents "Race Conditions" where the slow fetch for User 1 might finish AFTER the fast fetch for User 2, overwriting the screen with the wrong data!</p>
      </div>
    </div>
  );
}

export default App;