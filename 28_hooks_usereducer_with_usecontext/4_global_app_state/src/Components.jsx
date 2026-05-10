import React from "react";
import { useAppState, useAppDispatch } from "./AppContext";

function Navbar() {
  const state = useAppState();
  const dispatch = useAppDispatch();

  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      padding: "10px 20px", 
      backgroundColor: state.theme === "dark" ? "#333" : "#f0f0f0",
      color: state.theme === "dark" ? "#fff" : "#000",
      borderBottom: "1px solid #ccc"
    }}>
      <h2>My Global App</h2>
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
          {state.theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        {state.user ? (
          <>
            <span>Hi, {state.user.name}</span>
            <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
          </>
        ) : (
          <button onClick={() => dispatch({ type: "LOGIN", payload: { name: "Alice" } })}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

function MainContent() {
  const state = useAppState();
  const dispatch = useAppDispatch();

  const handleNotify = () => {
    dispatch({ 
      type: "ADD_NOTIFICATION", 
      payload: `Action performed at ${new Date().toLocaleTimeString()}` 
    });
  };

  return (
    <main style={{ 
      padding: "20px", 
      backgroundColor: state.theme === "dark" ? "#222" : "#fff",
      color: state.theme === "dark" ? "#eee" : "#111",
      minHeight: "400px"
    }}>
      {state.user ? (
        <div>
          <h3>Welcome to the Dashboard</h3>
          <p>You have {state.notifications.length} notifications.</p>
          <div style={{ display: "flex", gap: "10px" }}>
             <button onClick={handleNotify}>Trigger Notification</button>
             <button onClick={() => dispatch({ type: "CLEAR_NOTIFICATIONS" })}>Clear All</button>
          </div>
          
          <ul style={{ marginTop: "20px" }}>
            {state.notifications.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please log in using the button in the top right.</p>
      )}
    </main>
  );
}

export { Navbar, MainContent };
