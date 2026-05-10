import React, { useState } from "react";
// 1. Import the Form component from react-router-dom!
import { Form } from "react-router-dom";

function App() {
  const [traditionalSubmitted, setTraditionalSubmitted] = useState(false);

  // Traditional React Form Submission
  const handleTraditionalSubmit = (e) => {
    e.preventDefault();
    setTraditionalSubmitted(true);
    console.log("Traditional form submitted!");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>The <code>&lt;Form&gt;</code> Component</h1>
      
      <div style={{ border: "1px solid #ccc", padding: "20px", marginBottom: "30px", borderRadius: "8px" }}>
        <h2>1. Traditional React Form</h2>
        {/* The standard HTML <form> requires an onSubmit handler to prevent the page from refreshing */}
        <form onSubmit={handleTraditionalSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Name: </label>
            <input type="text" name="name" />
          </div>
          <button type="submit">Submit (React Way)</button>
        </form>
        {traditionalSubmitted && <p style={{ color: "blue" }}>Form prevented default and executed JavaScript!</p>}
      </div>

      <div style={{ border: "2px solid #e91e63", padding: "20px", borderRadius: "8px" }}>
        <h2>2. React Router <code>&lt;Form&gt;</code></h2>
        <p>Notice how there is NO <code>onSubmit</code> handler on this form!</p>
        
        {/* 2. Replace <form> with <Form method="post"> */}
        <Form method="post" action="/submit-action">
          <div style={{ marginBottom: "10px" }}>
            <label>Name: </label>
            <input type="text" name="name" />
          </div>
          <button type="submit">Submit (Router Way)</button>
        </Form>
        <p style={{ fontSize: "12px", color: "#666", marginTop: "15px" }}>
          * Clicking submit right now will result in a 405 error because we haven't defined the action yet. We will do this in the next lesson!
        </p>
      </div>

    </div>
  );
}

export default App;