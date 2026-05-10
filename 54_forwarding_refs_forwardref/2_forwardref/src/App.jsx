import React, { useRef, forwardRef } from "react";

// 1. Wrap the entire functional component in `forwardRef`
const SearchBar = forwardRef((props, ref) => {
  // 2. The function now receives a SECOND argument: `ref`!
  // We take this `ref` and attach it directly to the inner native <input> element.
  return (
    <div style={{ border: "2px solid #ccc", padding: "10px", borderRadius: "8px", display: "inline-block" }}>
      <span style={{ marginRight: "10px" }}>🔍</span>
      <input 
        type="text" 
        placeholder={props.placeholder} 
        ref={ref} // <--- Forwarding the ref!
        style={{ border: "none", outline: "none" }} 
      />
    </div>
  );
});

function App() {
  const searchRef = useRef(null);

  const handleFocus = () => {
    // 3. This now works perfectly! The parent has direct access to the child's <input>.
    searchRef.current.focus();
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1><code>React.forwardRef()</code></h1>
      <p>By wrapping the child component, we successfully opt-in to receiving the ref.</p>
      
      <SearchBar ref={searchRef} placeholder="Search products..." />
      
      <br /><br />
      
      <button 
        onClick={handleFocus}
        style={{ padding: "10px", backgroundColor: "#4caf50", color: "white", border: "none", cursor: "pointer", fontWeight: "bold" }}
      >
        Focus Search Bar
      </button>
    </div>
  );
}

export default App;