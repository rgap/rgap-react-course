import React, { useState } from "react";

function App() {
  // We use separate state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Multiple Inputs (Multiple States)</h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        <input 
          type="text" 
          placeholder="First Name" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
        />
        
        <input 
          type="text" 
          placeholder="Last Name" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
        />
        
        <input 
          type="number" 
          placeholder="Age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
        />
      </div>

      <div style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0" }}>
        <h3>Profile Summary</h3>
        <p><strong>Name:</strong> {firstName} {lastName}</p>
        <p><strong>Age:</strong> {age}</p>
      </div>
    </div>
  );
}

export default App;
