import React, { useRef } from "react";

function App() {
  const emailRef = useRef(null);
  const newsletterRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      subscribed: newsletterRef.current.checked
    });
    alert("Check the console for values!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>defaultValue and defaultChecked</h1>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        <label>
          Email:
          {/* Use defaultValue instead of value */}
          <input 
            type="email" 
            ref={emailRef} 
            defaultValue="guest@example.com" 
          />
        </label>
        
        <label>
          {/* Use defaultChecked instead of checked */}
          <input 
            type="checkbox" 
            ref={newsletterRef} 
            defaultChecked={true} 
          />
          Subscribe to Newsletter
        </label>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default App;
