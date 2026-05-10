import React, { forwardRef } from "react";

// A robust, reusable Input component!
// Notice how we spread the rest of the props (...rest) onto the native input tag!
export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
      {label && <label style={{ marginBottom: "5px", fontWeight: "bold" }}>{label}</label>}
      
      <input 
        ref={ref}
        {...rest}
        style={{
          padding: "10px",
          borderRadius: "4px",
          border: error ? "2px solid red" : "1px solid #ccc",
          outlineColor: error ? "red" : "#2196f3"
        }}
      />
      
      {error && <span style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>{error}</span>}
    </div>
  );
});
