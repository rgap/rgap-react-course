import React from "react";
import { useFetch } from "./useFetch";

function App() {
  // We pull out the refetch function from our custom hook
  const { data, isLoading, error, refetch } = useFetch("https://api.github.com/users/github");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "600px" }}>
      <h1>Adding <code>refetch()</code></h1>
      
      <p>Sometimes you need to manually reload the data without changing the URL. Click the button below to trigger a refetch!</p>
      
      <button 
        onClick={refetch} 
        disabled={isLoading}
        style={{ padding: "10px 20px", backgroundColor: "#2196f3", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        {isLoading ? "Refreshing..." : "Refresh Data"}
      </button>

      {error && <p style={{ color: "red", marginTop: "20px" }}>❌ {error}</p>}
      
      {data && (
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", marginTop: "20px", opacity: isLoading ? 0.5 : 1 }}>
          <img src={data.avatar_url} alt="avatar" style={{ width: "100px", borderRadius: "50%" }} />
          <h2>{data.name}</h2>
          <p>Public Repos: {data.public_repos}</p>
          <p>Followers: {data.followers}</p>
        </div>
      )}
    </div>
  );
}

export default App;