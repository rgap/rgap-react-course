import React from "react";
import { Form, useActionData } from "react-router-dom";

function App() {
  // We use this hook to receive whatever the action returned!
  // If the action hasn't run yet, this will be undefined.
  const actionData = useActionData();

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "400px", margin: "50px auto", padding: "20px" }}>
      <h2>Secure Login</h2>
      
      {/* If the action returned a global error, display it here */}
      {actionData?.error && (
        <div style={{ backgroundColor: "#ffebee", color: "red", padding: "10px", marginBottom: "20px", borderRadius: "4px" }}>
          {actionData.error}
        </div>
      )}

      {actionData?.success && (
        <div style={{ backgroundColor: "#e8f5e9", color: "green", padding: "10px", marginBottom: "20px", borderRadius: "4px" }}>
          Login successful! Welcome back.
        </div>
      )}

      <Form method="post" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        <div>
          <label>Username (must be > 3 chars):</label>
          <input type="text" name="username" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
          {/* Display specific field errors right below the input! */}
          {actionData?.errors?.username && (
            <p style={{ color: "red", fontSize: "12px", margin: "5px 0 0 0" }}>{actionData.errors.username}</p>
          )}
        </div>

        <div>
          <label>Password (must be > 6 chars):</label>
          <input type="password" name="password" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
          {actionData?.errors?.password && (
            <p style={{ color: "red", fontSize: "12px", margin: "5px 0 0 0" }}>{actionData.errors.password}</p>
          )}
        </div>

        <button type="submit" style={{ padding: "10px", backgroundColor: "#3f51b5", color: "white", border: "none", cursor: "pointer" }}>
          Log In
        </button>
      </Form>
    </div>
  );
}

export default App;