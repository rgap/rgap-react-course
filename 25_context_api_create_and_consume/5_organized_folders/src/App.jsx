import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import UserProvider from "../providers/UserProvider";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

// App is now thin: it wraps the tree with the Provider and
// reads login/logout actions from context to render the buttons.
function AppContent() {
  // login and logout come from the Provider's value — no local state needed here.
  const { login, logout } = useContext(UserContext);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Context API – Organized Folders</h1>

      <div style={{ marginBottom: "10px" }}>
        <button id="btn-login" onClick={login} style={{ marginRight: "10px" }}>
          Log In as Alice
        </button>
        <button id="btn-logout" onClick={logout}>Log Out</button>
      </div>

      <Header />
      <Dashboard />

      <div style={{ marginTop: "20px" }}>
        <h2>What changed vs. the previous example</h2>
        <ol>
          <li>
            <code>UserContext</code> lives in{" "}
            <code>contexts/UserContext.js</code> — one file, one
            responsibility.
          </li>
          <li>
            <code>UserProvider</code> lives in{" "}
            <code>providers/UserProvider.jsx</code> — it owns the state and
            exposes <code>{"{ user, login, logout }"}</code> as the value.
          </li>
          <li>
            <code>Header</code>, <code>Dashboard</code>,{" "}
            <code>UserBadge</code>, and <code>UserGreeting</code> each live in
            their own file inside <code>components/</code>.
          </li>
          <li>
            <code>App.jsx</code> only composes; all state logic is inside the
            Provider.
          </li>
        </ol>
      </div>
    </div>
  );
}

// UserProvider wraps AppContent so that AppContent can also call useContext.
function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
