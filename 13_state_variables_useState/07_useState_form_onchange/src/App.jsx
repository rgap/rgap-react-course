import { useState } from "react";

function App() {
  // State for name input only
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Simple Form</h1>

      {/* Input field for name */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)} // Update name state on change
      />

      {/* Display the name */}
      <p>Your name is: {name}</p>
    </div>
  );
}

export default App;
