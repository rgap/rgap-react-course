import React, { useState } from "react";

// This component manages a form with multiple related state variables.
// As the number of state transitions grows, it becomes hard to follow.

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    // Multiple setState calls for one logical action
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    // Simulate API call
    setTimeout(() => {
      if (!name || !email) {
        // Error: more setState calls
        setIsSubmitting(false);
        setError("Name and email are required.");
        setIsSuccess(false);
      } else {
        // Success: even more setState calls
        setIsSubmitting(false);
        setError(null);
        setIsSuccess(true);
      }
    }, 1000);
  }

  function handleReset() {
    // Reset: 6 setState calls for one action!
    setName("");
    setAge("");
    setEmail("");
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>When useState Gets Complex</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: "8px", marginRight: "10px" }} />
          <input placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} style={{ padding: "8px", marginRight: "10px" }} />
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: "8px" }} />
        </div>
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
        <button type="button" onClick={handleReset} style={{ marginLeft: "10px" }}>Reset</button>
      </form>

      {error && <p style={{ color: "red", marginTop: "10px" }}>❌ {error}</p>}
      {isSuccess && <p style={{ color: "green", marginTop: "10px" }}>✅ Submitted!</p>}

      <div style={{ marginTop: "20px" }}>
        <h2>The Problem</h2>
        <p>This form has <strong>6 separate useState calls</strong>.</p>
        <p>
          The <code>handleSubmit</code> function must call <strong>3 setters</strong> for
          a single logical action. <code>handleReset</code> calls <strong>6 setters</strong>.
        </p>
        <p>
          As the form grows, it becomes very easy to forget a setter, leave state
          inconsistent, or introduce bugs.
        </p>
        <p>
          What if we could describe each action as a single object, and let one
          function handle all the state transitions?
        </p>
      </div>
    </div>
  );
}

export default App;