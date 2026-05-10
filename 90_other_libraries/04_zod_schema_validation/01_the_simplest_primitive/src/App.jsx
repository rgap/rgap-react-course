import { useState } from 'react';
import { z } from 'zod';
import './App.css';

// 1. Define the simplest possible Zod schema: A single string that must be an email.
const EmailSchema = z.email("Invalid email format");

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // 2. Validate the primitive string immediately
    const result = EmailSchema.safeParse(value);

    if (!result.success) {
      // Zod stores the first error message in result.error.issues[0].message
      setError(result.error.issues[0].message);
      setSuccess(false);
    } else {
      setError(null);
      setSuccess(true);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h1>The Simplest Primitive</h1>
      <p>Validating a single string as an email.</p>
      
      <div style={{ marginTop: '2rem', textAlign: 'left' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email Address</label>
        <input 
          type="text" 
          value={email}
          onChange={handleChange}
          placeholder="name@example.com"
          style={{ 
            width: '100%', 
            padding: '0.5rem', 
            boxSizing: 'border-box',
            borderColor: error ? 'red' : success ? 'green' : '#ccc',
            borderWidth: '2px',
            borderStyle: 'solid',
            outline: 'none'
          }} 
        />
        
        {/* Display the Zod error message if it exists, otherwise a spacer */}
        <div style={{ height: '20px', marginTop: '0.25rem' }}>
          {error && <span style={{ color: 'red', fontSize: '0.875rem' }}>{error}</span>}
          {success && <span style={{ color: 'green', fontSize: '0.875rem' }}>Looks good!</span>}
        </div>
      </div>
    </div>
  );
}

export default App;
