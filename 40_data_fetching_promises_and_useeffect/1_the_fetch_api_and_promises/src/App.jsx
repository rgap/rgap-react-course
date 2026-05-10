import React, { useState } from "react";

function App() {
  const [joke, setJoke] = useState("Click the button to fetch a joke!");

  // The Fetch function
  const handleFetchJoke = () => {
    // 1. Call fetch() which returns a Promise
    fetch("https://official-joke-api.appspot.com/random_joke")
      
      // 2. The first .then() receives the raw Response object.
      // We must tell it to parse the body as JSON.
      .then((response) => {
        return response.json(); // This ALSO returns a Promise!
      })
      
      // 3. The second .then() receives the actual parsed data.
      .then((data) => {
        console.log("Data received:", data);
        setJoke(`${data.setup} - ${data.punchline}`);
      })
      
      // 4. .catch() handles any network errors
      .catch((error) => {
        console.error("Error fetching joke:", error);
        setJoke("Oops! Could not fetch a joke.");
      });
  };

  // The Modern Async/Await version (does the exact same thing)
  const handleFetchJokeAsync = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Oops! Could not fetch a joke.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>The Fetch API & Promises</h1>
      
      <div style={{ border: "2px solid #2196f3", padding: "20px", borderRadius: "8px", margin: "20px 0" }}>
        <p style={{ fontSize: "18px", fontStyle: "italic" }}>{joke}</p>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleFetchJoke} style={{ padding: "10px" }}>
          Fetch using .then()
        </button>
        <button onClick={handleFetchJokeAsync} style={{ padding: "10px" }}>
          Fetch using async/await
        </button>
      </div>
    </div>
  );
}

export default App;