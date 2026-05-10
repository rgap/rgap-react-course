import React from "react";
import { useFetch } from "./useFetch";

// Component 1 needs the user data
function Navbar() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users/1");
  return (
    <div style={{ backgroundColor: "#333", color: "white", padding: "10px", display: "flex", justifyContent: "space-between" }}>
      <span>My App</span>
      <span>{data ? `Logged in as: ${data.username}` : "Loading..."}</span>
    </div>
  );
}

// Component 2 ALSO needs the user data
function ProfileSettings() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users/1");
  return (
    <div style={{ border: "2px solid #2196f3", padding: "20px", marginTop: "20px", borderRadius: "8px" }}>
      <h2>⚙️ Profile Settings</h2>
      {data ? (
        <ul>
          <li>Email: {data.email}</li>
          <li>Phone: {data.phone}</li>
        </ul>
      ) : (
        <p>Loading settings...</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      
      <div style={{ padding: "20px" }}>
        <h1>The Limits of Custom Hooks</h1>
        <p>Open your browser console! Look how many network requests were made.</p>
        
        <ProfileSettings />

        <div style={{ marginTop: "30px", backgroundColor: "#ffebee", padding: "15px", borderRadius: "5px" }}>
          <h3 style={{ color: "red", margin: "0 0 10px 0" }}>⚠️ The Problem</h3>
          <p style={{ margin: 0 }}>
            Because React Hooks run independently in every component they are called in, 
            calling <code>useFetch</code> twice means executing <code>fetch()</code> twice. 
            We are downloading the exact same data from the server multiple times!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;