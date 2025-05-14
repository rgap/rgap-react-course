import { useState } from "react";

function App() {
  // State variable for toggling between true and false
  const [isOn, setIsOn] = useState(false);

  // Function to toggle the boolean state
  const toggle = () => {
    setIsOn(prevIsOn => !prevIsOn); // Switches the state to its opposite value
  };

  return (
    <div>
      <h1>Light Switch</h1>

      {/* Display the current state */}
      <p>The light is {isOn ? "On" : "Off"}</p>

      {/* Button to toggle the state */}
      <button onClick={toggle}>{isOn ? "Turn Off" : "Turn On"}</button>
    </div>
  );
}

export default App;
