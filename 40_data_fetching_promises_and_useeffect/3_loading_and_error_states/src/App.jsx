import React, { useState, useEffect } from "react";

function App() {
  // The standard 3 state variables for data fetching
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Start as true!
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Step 1: Ensure we are in a loading state (in case this effect runs again later)
      setIsLoading(true);
      setError(null);

      try {
        // We use a slow API for demonstration purposes (delays by 2 seconds)
        const response = await fetch("https://reqres.in/api/users?delay=2");
        
        // Check if the response was successful (status 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        
        // Step 2: Set the data!
        // (Reqres nests the array inside a 'data' property)
        setData(json.data); 
        
      } catch (err) {
        // Step 3: Catch any network or parsing errors
        console.error("Fetch failed:", err);
        setError(err.message);
      } finally {
        // Step 4: Stop loading regardless of success or failure
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- Rendering Logic ---

  if (isLoading) {
    return (
      <div style={{ padding: "40px", textAlign: "center", fontSize: "24px", color: "#666" }}>
        ⏳ Loading users...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "red" }}>
        <h2>❌ Something went wrong!</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Loading & Error States</h1>
      
      <p>Data fetched successfully! We are now displaying the UI.</p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {data.map((user) => (
          <div key={user.id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "200px", textAlign: "center" }}>
            <img 
              src={user.avatar} 
              alt={`${user.first_name}`} 
              style={{ borderRadius: "50%", width: "100px" }}
            />
            <h3>{user.first_name} {user.last_name}</h3>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;