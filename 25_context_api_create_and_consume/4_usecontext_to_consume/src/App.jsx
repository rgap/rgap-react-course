import React, { createContext, useState, useContext } from "react";

// Step 1: Create the context
const UserContext = createContext(null);

// A component that consumes the context
function UserGreeting() {
  // Step 3: useContext reads the nearest Provider's value
  const user = useContext(UserContext);

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

// Another consumer — same context, different component
function UserBadge() {
  const user = useContext(UserContext);

  if (!user) return null;

  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        backgroundColor: user.role === "admin" ? "#e53935" : "#1e88e5",
        color: "white",
        borderRadius: "12px",
        fontSize: "14px",
      }}
    >
      {user.role}
    </span>
  );
}

// Middleman — does NOT receive user as a prop
function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h2>My App</h2>
      <UserBadge />
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ padding: "10px" }}>
      <UserGreeting />
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  function login() {
    setUser({ name: "Alice", email: "alice@example.com", role: "admin" });
  }

  function logout() {
    setUser(null);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>useContext to Consume</h1>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={login} style={{ marginRight: "10px" }}>
          Log In as Alice
        </button>
        <button onClick={logout}>Log Out</button>
      </div>

      {/* Step 2: Provide the value */}
      <UserContext.Provider value={user}>
        <Header />
        <Dashboard />
      </UserContext.Provider>

      <div style={{ marginTop: "20px" }}>
        <h2>What is happening</h2>
        <ol>
          <li>
            <code>UserContext</code> is created with <code>createContext(null)</code>.
          </li>
          <li>
            <code>App</code> wraps the tree with{" "}
            <code>UserContext.Provider value=&#123;user&#125;</code>.
          </li>
          <li>
            <code>UserGreeting</code> and <code>UserBadge</code> both call{" "}
            <code>useContext(UserContext)</code> to read the value directly.
          </li>
          <li>
            <code>Header</code> and <code>Dashboard</code> are middlemen — they
            never receive or pass the <code>user</code> prop.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;