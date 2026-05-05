import React, { useState } from "react";

function App() {
  const [description, setDescription] = useState("Default text inside textarea");
  const [flavor, setFlavor] = useState("chocolate");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Textarea and Select</h1>

      <div style={{ marginBottom: "20px" }}>
        <h3>Textarea</h3>
        {/* In HTML, textarea uses children: <textarea>text</textarea>. In React, it uses the value prop! */}
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          rows={4}
          cols={40}
        />
        <p>Length: {description.length} characters</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Select Dropdown</h3>
        {/* In HTML, you'd use 'selected' on the option. In React, you use the value prop on the select root! */}
        <select value={flavor} onChange={(e) => setFlavor(e.target.value)}>
          <option value="vanilla">Vanilla</option>
          <option value="chocolate">Chocolate</option>
          <option value="strawberry">Strawberry</option>
        </select>
        <p>Your favorite flavor is: {flavor}</p>
      </div>

    </div>
  );
}

export default App;
