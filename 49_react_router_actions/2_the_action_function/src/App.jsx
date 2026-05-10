import React from "react";
import { Form, useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();
  // We can use navigation.state to disable the button while the action runs!
  const isSubmitting = navigation.state === "submitting";

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>The Action Function</h1>
      
      <div style={{ border: "2px solid #4caf50", padding: "20px", borderRadius: "8px" }}>
        <h2>Contact Us</h2>
        
        {/* The method MUST be "post" (or "put", "delete") to trigger an action! */}
        {/* Because we don't define an "action" path, it defaults to the current route ("/") */}
        <Form method="post" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* The 'name' attribute is critically important! */}
            <label htmlFor="email">Email Address:</label>
            <input type="email" name="email" id="email" required style={{ padding: "8px" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" required style={{ padding: "8px", minHeight: "100px" }}></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{ padding: "10px", backgroundColor: isSubmitting ? "#ccc" : "#4caf50", color: "white", border: "none", cursor: isSubmitting ? "not-allowed" : "pointer" }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </Form>
      </div>

    </div>
  );
}

export default App;