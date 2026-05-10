import React from "react";
import { useFetch } from "./useFetch";

function App() {
  // We are passing an options object to our custom hook!
  // E.g., simulating sending a custom authentication header.
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users", 
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer my_super_secret_token"
      }
    }
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Handling Request Options</h1>
      
      <p>Our <code>useFetch</code> hook can now accept custom headers, methods (POST/PUT), and bodies!</p>

      {isLoading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}

      {data && (
        <ul style={{ padding: 0, listStyle: "none" }}>
          {data.slice(0, 5).map(user => (
            <li key={user.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "4px" }}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;