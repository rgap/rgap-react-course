import React from "react";

function App() {
  // Typical data structure from an API
  const users = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "Editor" },
    { id: 3, name: "Charlie", role: "Viewer" },
  ];

  return (
    <div>
      <h1>System Users</h1>
      <ul>
        {users.map((user) => (
          // We use the unique 'id' from our data object as the key
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
