import React from "react";

// The child component receives individual props
function UserItem({ name, role }) {
  return (
    <li>
      <strong>{name}</strong> - {role}
    </li>
  );
}

function App() {
  const users = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "Editor" },
    { id: 3, name: "Charlie", role: "Viewer" },
  ];

  return (
    <div>
      <h1>Extracted List Components</h1>
      <ul>
        {users.map((user) => (
          // IMPORTANT: The key must be on the component in the array context, 
          // NOT inside the UserItem component itself!
          // Array context means: the place where React is receiving many elements/components as an array.
          // The output of map() is an array of components like:
          // [
          //  <UserItem key={1} name="Alice" role="Admin" />,
          //  <UserItem key={2} name="Bob" role="Editor" />,
          //  <UserItem key={3} name="Charlie" role="Viewer" />
          // ]
          <UserItem 
            key={user.id} 
            name={user.name} 
            role={user.role} 
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
