import { useState } from "react";
import UserContext from "../contexts/UserContext";

// Step 2: The Provider component owns the state and wraps the tree.
// Keeping it in its own file makes App.jsx cleaner and makes the
// provider reusable across different entry points (e.g. tests).
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function login() {
    setUser({ name: "Alice", email: "alice@example.com", role: "admin" });
  }

  function logout() {
    setUser(null);
  }

  return (
    // The value prop exposes both the data and the actions.
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
