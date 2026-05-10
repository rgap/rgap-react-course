import React from "react";
import { Form, useActionData } from "react-router-dom";

function App() {
  const actionData = useActionData();

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "400px" }}>
      <h1>Action Errors</h1>
      <p style={{ color: "#666" }}>
        Type "crash" to throw a JS Error. Type "500" to throw an HTTP Error. 
        Anything else will succeed.
      </p>

      {actionData?.success && (
        <div style={{ padding: "10px", backgroundColor: "#e8f5e9", color: "green", marginBottom: "20px" }}>
          {actionData.success}
        </div>
      )}

      <Form method="post" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input 
          type="text" 
          name="password" 
          placeholder="Enter magic word..." 
          style={{ padding: "10px", fontSize: "16px" }} 
        />
        <button type="submit" style={{ padding: "10px", cursor: "pointer", backgroundColor: "#2196f3", color: "white", border: "none" }}>
          Submit
        </button>
      </Form>
    </div>
  );
}

export default App;