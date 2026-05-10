import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Notice this isn't just a string, it's an array! We can have multiple errors.
  const [toasts, setToasts] = useState([]);

  // Helper to trigger a toast
  const addToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleFetch = async () => {
    setIsLoading(true);

    try {
      // Simulate an error by fetching from a bad URL
      const response = await fetch("https://jsonplaceholder.typicode.com/invalid_endpoint");
      
      if (!response.ok) {
        throw new Error(`Failed to update data (Status ${response.status})`);
      }

      const json = await response.json();
      setData(json);
    } catch (err) {
      // Instead of replacing the entire screen with an error, we pop up a toast!
      addToast(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Toast Notifications</h1>
      
      <p>Click the button. Notice how the UI does NOT get destroyed. The error appears as a non-intrusive floating element.</p>

      <button onClick={handleFetch} disabled={isLoading} style={{ padding: "10px", marginTop: "20px" }}>
        {isLoading ? "Saving..." : "Save Changes (Simulates Error)"}
      </button>

      {/* --- Toast Container --- */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            <span>⚠️ {toast.message}</span>
            <button onClick={() => removeToast(toast.id)}>X</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;