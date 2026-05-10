import React, { useRef, useState } from "react";
import { Input } from "./Input.jsx";

function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // We can read values natively using refs!
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    
    // Custom Validation Logic
    if (username.length < 3) {
      setErrors({ username: "Username is too short!" });
      // If validation fails, aggressively force the user's focus back to the input!
      usernameRef.current.focus();
      return;
    }

    if (password.length < 6) {
      setErrors({ password: "Password is too weak!" });
      passwordRef.current.focus();
      return;
    }

    setErrors({});
    alert(`Success! Logging in ${username}...`);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #eee", borderRadius: "8px" }}>
      <h2>Login System</h2>
      
      <form onSubmit={handleSubmit}>
        <Input 
          ref={usernameRef}
          label="Username"
          type="text"
          placeholder="Enter username"
          error={errors.username}
        />

        <Input 
          ref={passwordRef}
          label="Password"
          type="password"
          placeholder="Enter password"
          error={errors.password}
        />

        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#2196f3", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default App;