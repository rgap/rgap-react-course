import { useState } from "react";

function App() {
  // State for name input
  const [name, setName] = useState("");

  // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault(); // Prevents page refresh on form submission
    alert(`Form submitted with name: ${name}`);
  };

  return (
    <div>
      <h1>Simple Form with preventDefault</h1>

      {/* Simple form that prevents default submission */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)} // Update name state
          required
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display the name */}
      <p>Your name is: {name}</p>
    </div>
  );
}

export default App;
