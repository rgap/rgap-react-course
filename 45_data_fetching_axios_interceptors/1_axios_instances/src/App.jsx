import React, { useState, useEffect } from "react";
// Import our custom pre-configured Axios instance
import { api } from "./api";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Notice we don't need the full URL here! 
        // Axios automatically prepends the baseURL ("https://jsonplaceholder.typicode.com")
        // Axios also automatically calls .json() on the response!
        // We just pull the `data` property off the Axios response object.
        const response = await api.get("/users/1");
        
        setData(response.data);
      } catch (err) {
        // Axios automatically rejects the Promise on 404s and 500s!
        // We don't need to manually check `response.ok` anymore.
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Axios Instances</h1>
      
      <p>By using a custom Axios instance, our component code becomes incredibly clean. We don't need to write out the full URL, and we don't need to manually parse the JSON.</p>

      {isLoading && <p>Loading user...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      
      {data && (
        <div style={{ border: "2px solid #4caf50", padding: "20px", marginTop: "20px", borderRadius: "8px" }}>
          <h2>{data.name}</h2>
          <p>Email: {data.email}</p>
          <p>Website: {data.website}</p>
        </div>
      )}
    </div>
  );
}

export default App;