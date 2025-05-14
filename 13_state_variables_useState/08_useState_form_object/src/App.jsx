import { useState } from "react";

function App() {
  // State variable for form data (name and email)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Function to handle input changes and update form data
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Keep the rest of the form data unchanged
      [name]: value, // Update only the input that changed
    });
  };

  return (
    <div>
      <h1>Form Input</h1>

      {/* Input field for name */}
      <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />

      {/* Input field for email */}
      <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />

      {/* Display the form data */}
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default App;
