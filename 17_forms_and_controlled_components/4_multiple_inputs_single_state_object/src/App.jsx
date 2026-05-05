import React, { useState } from "react";

function App() {
  // Manage all form fields in a single state object
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // A single change handler that works for ALL inputs
  const handleChange = (e) => {
    // We extract the 'name' and 'value' attributes from the input that triggered the event
    const { name, value } = e.target;
    
    setFormData((prevData) => {
      return {
        ...prevData,      // Copy all existing fields
        [name]: value     // Update only the field that changed (using Computed Property Names)
      };
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Multiple Inputs (Single State Object)</h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        {/* Notice every input MUST have a 'name' attribute matching the state property */}
        <input 
          name="firstName"
          type="text" 
          placeholder="First Name" 
          value={formData.firstName} 
          onChange={handleChange} 
        />
        <input 
          name="lastName"
          type="text" 
          placeholder="Last Name" 
          value={formData.lastName} 
          onChange={handleChange} 
        />
        <input 
          name="email"
          type="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <input 
          name="password"
          type="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
        />
      </div>

      <div style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0" }}>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
