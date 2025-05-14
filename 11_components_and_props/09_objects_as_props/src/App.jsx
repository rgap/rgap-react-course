// Define a functional component that accepts an object as props and displays its properties
function UserProfile(props) {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>Age: {props.user.age}</p>
      <p>Location: {props.user.location}</p>
    </div>
  );
}

function App() {
  const user1 = { name: "Alice", age: 25, location: "New York" };
  const user2 = { name: "Bob", age: 30, location: "San Francisco" };

  return (
    <div>
      {/* Passing an object prop 'user' to the UserProfile component */}
      <UserProfile user={user1} />
      <UserProfile user={user2} />
    </div>
  );
}

export default App;
