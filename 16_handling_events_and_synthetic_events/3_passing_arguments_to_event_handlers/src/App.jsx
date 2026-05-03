import React from "react";

function App() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  // We want to know WHICH user was deleted
  function handleDelete(id) {
    alert(`Deleting user with ID: ${id}`);
  }

  return (
    <div>
      <h1>Passing Arguments to Event Handlers</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} 
            {/* 
              To pass 'user.id' to our function without executing it immediately, 
              we wrap it inside an inline arrow function:
            */}
            <button onClick={() => handleDelete(user.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
