import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

// This component imports the context from ThemeContext.jsx
// and reads the value with useContext.
function Button() {
  const theme = useContext(ThemeContext);

  const style = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: theme === "dark" ? "#333" : "#eee",
    color: theme === "dark" ? "#fff" : "#000",
    border: "1px solid #999",
  };

  return <button style={style}>Theme is: {theme}</button>;
}

export default Button;
