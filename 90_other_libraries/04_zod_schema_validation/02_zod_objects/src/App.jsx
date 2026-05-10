import { useState } from 'react';
import { z } from 'zod';
import './App.css';

// 1. Define a Zod Schema
const UserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email format"),
  age: z.number().min(18, "Must be at least 18 years old").max(100),
});

function App() {
  const [result, setResult] = useState(null);

  const validData = {
    name: "Alice",
    email: "alice@example.com",
    age: 25
  };

  const invalidData = {
    name: "A", // Too short
    email: "not-an-email", // Invalid email
    age: 15 // Too young
  };

  const handleValidate = (data) => {
    // 2. Validate data using safeParse (doesn't throw an error, returns an object)
    const validationResult = UserSchema.safeParse(data);
    
    if (validationResult.success) {
      setResult({ type: 'success', data: validationResult.data });
    } else {
      // Zod errors are deeply nested, .format() flattens them nicely
      setResult({ type: 'error', errors: validationResult.error.format() });
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Zod Objects</h1>
      <p style={{ textAlign: 'center' }}>Click the buttons below to see how Zod validates objects.</p>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '2rem 0' }}>
        <button onClick={() => handleValidate(validData)}>
          Test Valid Data
        </button>
        <button onClick={() => handleValidate(invalidData)}>
          Test Invalid Data
        </button>
        <button onClick={() => setResult(null)}>
          Clear
        </button>
      </div>

      {result && (
        <div style={{
          padding: '1rem',
          borderRadius: '8px',
          backgroundColor: result.type === 'success' ? '#e6ffe6' : '#ffe6e6',
          color: 'black'
        }}>
          <h3>{result.type === 'success' ? '✅ Validation Passed' : '❌ Validation Failed'}</h3>
          <pre style={{ whiteSpace: 'pre-wrap', textAlign: 'left', margin: 0 }}>
            {JSON.stringify(result.type === 'success' ? result.data : result.errors, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
