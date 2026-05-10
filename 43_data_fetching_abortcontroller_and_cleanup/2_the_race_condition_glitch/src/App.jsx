import React, { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loadingText, setLoadingText] = useState("");

  useEffect(() => {
    // We want to simulate a race condition.
    // User 1's API is very slow (takes 4 seconds)
    // User 2's API is very fast (takes 1 second)
    const delay = userId === 1 ? 4000 : 1000;
    
    setLoadingText(`Fetching User ${userId}... (Will take ${delay/1000}s)`);
    setUser(null);

    const fetchUser = async () => {
      try {
        console.log(`[START] Fetching user ${userId}`);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        // Artificially delay the response based on the logic above
        await new Promise(res => setTimeout(res, delay));
        
        const data = await response.json();
        console.log(`[FINISH] User ${userId} fetched! Overwriting state.`);
        
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
    
    // Notice there is NO cleanup function here!
  }, [userId]); // Re-run whenever userId changes

  return (
    <div style={{ border: "2px solid red", padding: "20px", marginTop: "20px" }}>
      <h2>Profile for User {userId}</h2>
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ) : (
        <p style={{ color: "orange" }}>⏳ {loadingText}</p>
      )}
    </div>
  );
}

function App() {
  const [activeUserId, setActiveUserId] = useState(1);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The Race Condition Glitch</h1>
      
      <p>
        <strong>Instructions:</strong> Click "Load User 1". Wait 1 second, then immediately click "Load User 2". Watch what happens to the UI.
      </p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setActiveUserId(1)}>Load User 1 (Slow API)</button>
        <button onClick={() => setActiveUserId(2)}>Load User 2 (Fast API)</button>
      </div>

      <UserProfile userId={activeUserId} />
      
      <div style={{ marginTop: "30px", color: "#666", fontSize: "14px" }}>
        <h3>What just happened?</h3>
        <ol>
          <li>You requested User 1. The 4-second timer started.</li>
          <li>You requested User 2. The 1-second timer started.</li>
          <li>User 2 finished! The screen displayed User 2's data.</li>
          <li>Three seconds later, User 1 FINALLY finished. It overwrote User 2's data!</li>
        </ol>
        <p><strong>Result:</strong> The UI says "Profile for User 2", but the data displayed belongs to User 1!</p>
      </div>
    </div>
  );
}

export default App;