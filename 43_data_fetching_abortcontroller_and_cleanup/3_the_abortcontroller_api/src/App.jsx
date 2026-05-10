import React, { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loadingText, setLoadingText] = useState("");

  useEffect(() => {
    // 1. Create the controller instance
    const controller = new AbortController();
    
    // For demonstration, User 1 is slow (4s), User 2 is fast (1s)
    const delay = userId === 1 ? 4000 : 1000;
    setLoadingText(`Fetching User ${userId}... (Will take ${delay/1000}s)`);
    setUser(null);

    const fetchUser = async () => {
      try {
        console.log(`[START] Fetching user ${userId}`);
        
        // 2. Pass the controller's signal to the fetch options
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
          signal: controller.signal
        });
        
        await new Promise(res => setTimeout(res, delay));
        
        const data = await response.json();
        console.log(`[FINISH] User ${userId} fetched! Overwriting state.`);
        setUser(data);
      } catch (err) {
        // 4. Handle the AbortError properly!
        if (err.name === "AbortError") {
          console.warn(`[ABORTED] Fetch for User ${userId} was cancelled!`);
        } else {
          console.error("A real error occurred:", err);
        }
      }
    };

    fetchUser();
    
    // 3. Return a cleanup function that aborts the controller
    return () => {
      console.log(`[CLEANUP] Running cleanup for User ${userId}... aborting fetch!`);
      controller.abort();
    };
  }, [userId]); 

  return (
    <div style={{ border: "2px solid green", padding: "20px", marginTop: "20px" }}>
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
      <h1>The AbortController API</h1>
      
      <p>
        <strong>Instructions:</strong> Click "Load User 1". Wait 1 second, then immediately click "Load User 2". Watch the console!
      </p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setActiveUserId(1)}>Load User 1 (Slow API)</button>
        <button onClick={() => setActiveUserId(2)}>Load User 2 (Fast API)</button>
      </div>

      <UserProfile userId={activeUserId} />
      
      <div style={{ marginTop: "30px", color: "#666", fontSize: "14px" }}>
        <h3>Why didn't it glitch?</h3>
        <ol>
          <li>You requested User 1. The 4-second timer started.</li>
          <li>You requested User 2. The <code>userId</code> state changed.</li>
          <li><strong>CRITICAL STEP:</strong> React immediately ran the cleanup function for User 1!</li>
          <li>The cleanup function called <code>controller.abort()</code>, completely killing the pending User 1 fetch.</li>
          <li>User 2 finished and updated the UI. User 1 never finished, because it was murdered.</li>
        </ol>
      </div>
    </div>
  );
}

export default App;