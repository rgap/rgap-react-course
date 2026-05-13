import { useContext } from "react";
import UserContext from "../contexts/UserContext";

// Step 3: useContext reads the nearest Provider's value.
// UserGreeting is a pure consumer — it receives nothing via props.
function UserGreeting() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>No user is logged in.</p>;
  }

  return (
    <div style={{ border: "2px solid green", padding: "10px", marginTop: "10px" }}>
      <h3>Welcome, {user.name}!</h3>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default UserGreeting;
