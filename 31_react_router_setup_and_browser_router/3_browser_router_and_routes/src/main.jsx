import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// Step 1: Wrap the entire application inside <BrowserRouter>
// This is typically done in the root entry file (main.jsx or index.js)
// It gives the entire app access to the routing context.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
