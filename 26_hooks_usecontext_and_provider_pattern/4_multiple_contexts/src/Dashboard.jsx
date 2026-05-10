import React from "react";
import { useTheme, useAuth } from "./Contexts";

function Dashboard() {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();

  const containerStyle = {
    padding: "20px",
    backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
    color: theme === "dark" ? "#f0f0f0" : "#000000",
    minHeight: "300px",
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={toggleTheme}>
          Toggle Theme (current: {theme})
        </button>

        {user ? (
          <button onClick={logout}>Log Out</button>
        ) : (
          <button onClick={() => login("Alice")}>Log In as Alice</button>
        )}
      </div>

      {user ? (
        <div style={{ border: "1px solid #999", padding: "10px" }}>
          <h2>Welcome, {user.name}!</h2>
          <p>Logged in at: {user.loggedInAt}</p>
          <p>Theme: {theme}</p>
        </div>
      ) : (
        <p>Please log in to see your dashboard.</p>
      )}

      <div style={{ marginTop: "20px" }}>
        <h2>What is happening</h2>
        <p>
          This component consumes <strong>two</strong> contexts at the same time:
        </p>
        <ul>
          <li><code>useTheme()</code> → reads theme and toggleTheme</li>
          <li><code>useAuth()</code> → reads user, login, and logout</li>
        </ul>
        <p>Each context is independent. Changing the theme does not affect auth, and vice versa.</p>
      </div>
    </div>
  );
}

export default Dashboard;
