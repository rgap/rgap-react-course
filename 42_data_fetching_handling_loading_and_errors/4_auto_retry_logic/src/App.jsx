import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const MAX_RETRIES = 3;

  useEffect(() => {
    let timeoutId;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log(`Attempt ${retryCount + 1}...`);
        
        // We simulate a flakey API that only succeeds on the 3rd try!
        const forceError = retryCount < 2; 
        const url = forceError 
          ? "https://httpstat.us/500" 
          : "https://jsonplaceholder.typicode.com/users/1";

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Server returned ${response.status}`);
        }

        const json = await response.json();
        setData(json);
        
      } catch (err) {
        console.error("Fetch failed:", err.message);
        
        // If we haven't hit the max retries, try again!
        if (retryCount < MAX_RETRIES) {
          console.log(`Retrying in 2 seconds... (${MAX_RETRIES - retryCount} attempts left)`);
          
          // Wait 2 seconds, then increment the retry counter
          // Because `retryCount` is in the dependency array, changing it will re-trigger the useEffect!
          timeoutId = setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, 2000);
          
        } else {
          // If we've maxed out, finally give up and show the error.
          setError("Max retries reached. Please check your connection.");
          setIsLoading(false);
        }
      } 
      
      // We only set loading to false here if we succeeded!
      if (data) {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup the timeout if the component unmounts!
    return () => clearTimeout(timeoutId);
    
  }, [retryCount]); // Re-run whenever retryCount changes!

  // --- Render ---
  
  if (isLoading && retryCount === 0) {
    return <div style={{ padding: "20px" }}>⏳ Loading initially...</div>;
  }

  // If it's loading AND we have retried, show the user that we are retrying!
  if (isLoading && retryCount > 0) {
    return (
      <div style={{ padding: "20px", color: "orange" }}>
        ⚠️ Connection unstable. Retrying... (Attempt {retryCount + 1})
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "20px", color: "red" }}>
        <h2>❌ {error}</h2>
        <button onClick={() => setRetryCount(0)}>Manual Retry</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Auto-Retry Logic</h1>
      <p style={{ color: "green", fontWeight: "bold" }}>✅ Data successfully loaded!</p>
      
      <div style={{ border: "2px solid #ccc", padding: "15px", borderRadius: "5px", marginTop: "20px" }}>
        <h2>{data?.name}</h2>
        <p>{data?.email}</p>
      </div>
      
      <p style={{ marginTop: "30px", fontSize: "14px", color: "#666" }}>
        Check your browser console to see the retry attempts in action!
      </p>
    </div>
  );
}

export default App;