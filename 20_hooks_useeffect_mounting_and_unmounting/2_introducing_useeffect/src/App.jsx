import React, { useEffect } from "react";

function App() {
  console.log("1. App is rendering (Calculating JSX)");

  // ✅ GOOD: We put our side effect inside the useEffect hook!
  // React will wait until AFTER the UI is painted on the screen
  // before running this function.
  useEffect(() => {
    console.log("3. useEffect is running! (Side Effect)");
    
    // Now it is safe to do things outside the component!
    document.title = "Safe Side Effect!";
  }); // Notice we didn't put a second argument yet

  console.log("2. App is returning JSX");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Introducing useEffect</h1>
      <p>Open your browser console to see the order of logs.</p>
      
      <h2>The Solution</h2>
      <p>
        React gives us a special tool called an <strong>Escape Hatch</strong> to 
        safely perform side effects. That tool is the <code>useEffect</code> hook.
      </p>
      <p>
        Code inside <code>useEffect</code> is "delayed" and does not block the 
        browser from showing the UI to the user.
      </p>
    </div>
  );
}

export default App;