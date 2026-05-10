import React, { useState, useEffect } from "react";

// --- Child Component (The one making the fetch) ---
function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Component Mounted. Starting 5-second fetch...");
    
    const fetchUser = async () => {
      try {
        // We artificially delay the API response by 5 seconds
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        await new Promise(res => setTimeout(res, 5000));
        
        const data = await response.json();
        
        console.log("Fetch finished! Attempting to set state...");
        // DANGER: If the component was unmounted during those 5 seconds, 
        // calling setUser will cause a memory leak warning in React!
        setUser(data);
        console.log("State set successfully.");
      } catch (err) {
        console.error("Fetch failed", err);
      }
    };

    fetchUser();

    // Notice we have NO cleanup function here!
  }, []);

  return (
    <div style={{ border: "2px solid blue", padding: "20px", marginTop: "20px" }}>
      {user ? <h3>{user.name}</h3> : <p>Loading user profile (takes 5s)...</p>}
    </div>
  );
}

// --- Parent Component (Controls mounting/unmounting) ---
function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The Memory Leak Warning</h1>
      
      <p>
        <strong>Instructions:</strong> Open your browser console. Click the button to mount the component. 
        Then, BEFORE 5 seconds pass, click the button again to unmount it!
      </p>

      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile (Unmount)" : "Show Profile (Mount)"}
      </button>

      {showProfile && <UserProfile />}
      
      <div style={{ marginTop: "30px", color: "#666", fontSize: "14px" }}>
        <p>If you unmount the component while the fetch is still running, the fetch <strong>does not stop</strong>.</p>
        <p>When the fetch eventually finishes, it tries to call <code>setUser(data)</code> on a component that no longer exists!</p>
      </div>
    </div>
  );
}

export default App;