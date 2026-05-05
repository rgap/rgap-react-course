import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // 1. ALWAYS prevent the default browser refresh behavior first
    e.preventDefault();

    // 2. Perform validation (optional but recommended)
    if (!email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    // 3. Process the form data (e.g., send it to an API)
    console.log("Submitting to API:", { email, password });
    alert(`Welcome, ${email}! Your data was submitted.`);

    // 4. Optionally clear the form after successful submission
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Form Submission</h1>
      
      {/* We attach the submit handler to the <form> tag, NOT the button! */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />

        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        {/* Clicking this button triggers the form's onSubmit event automatically */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
