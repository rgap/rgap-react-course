import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // 1. We want to fetch data EXACTLY ONCE when the component mounts.
  // We use an empty dependency array [] to achieve this.
  useEffect(() => {
    
    // 2. We define the async function INSIDE the useEffect
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        // 3. Update the state with the fetched data
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    // 4. Call the function we just defined
    fetchUsers();

  }, []); // <-- Empty array means "only run on mount"

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Fetching Data on Mount</h1>
      
      <p>This list is automatically fetched from an API as soon as the page loads!</p>

      <ul style={{ padding: "0", listStyle: "none" }}>
        {users.map((user) => (
          <li 
            key={user.id} 
            style={{ 
              border: "1px solid #ccc", 
              padding: "15px", 
              margin: "10px 0",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;