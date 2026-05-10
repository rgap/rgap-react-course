import React, { useRef } from "react";

// A custom component
function SearchBar({ placeholder }) {
  // We want the parent to be able to focus this specific <input>!
  return (
    <div style={{ border: "2px solid #ccc", padding: "10px", borderRadius: "8px", display: "inline-block" }}>
      <span style={{ marginRight: "10px" }}>🔍</span>
      <input type="text" placeholder={placeholder} style={{ border: "none", outline: "none" }} />
    </div>
  );
}

function App() {
  const searchRef = useRef(null);

  const handleFocus = () => {
    // This will crash if we try to call .focus() on it!
    console.log(searchRef.current); 
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>The <code>ref</code> Prop Problem</h1>
      <p>Clicking the button below attempts to focus the SearchBar.</p>
      
      {/* 
        WARNING: We are passing a `ref` prop to a custom functional component. 
        React will swallow this prop! It does NOT get passed down.
      */}
      <SearchBar ref={searchRef} placeholder="Search products..." />
      
      <br /><br />
      
      <button 
        onClick={handleFocus}
        style={{ padding: "10px", backgroundColor: "#2196f3", color: "white", border: "none", cursor: "pointer" }}
      >
        Focus Search Bar
      </button>

      <p style={{ color: "red", fontSize: "14px", marginTop: "20px" }}>
        Open your browser console. Notice the React Warning: <br/>
        <strong>"Function components cannot be given refs. Attempts to access this ref will fail."</strong>
      </p>
    </div>
  );
}

export default App;