import React from "react";
import { ThemeProvider, AuthProvider } from "./Contexts";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ padding: "20px 20px 0" }}>Multiple Contexts</h1>

      {/* Nest multiple Providers. Order does not matter. */}
      <ThemeProvider>
        <AuthProvider>
          <Dashboard />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;