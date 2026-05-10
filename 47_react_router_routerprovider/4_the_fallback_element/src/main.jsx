import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'

// This component will be shown while the ROOT loader is running!
function InitializingScreen() {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Arial, sans-serif", backgroundColor: "#f0f0f0" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "40px", margin: "0 0 10px 0" }}>🚀</h1>
        <h2>Initializing Application...</h2>
        <p style={{ color: "#666" }}>Please wait while we fetch the initial user session.</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* We pass the fallbackElement prop to the RouterProvider! */}
    <RouterProvider 
      router={router} 
      fallbackElement={<InitializingScreen />} 
    />
  </React.StrictMode>,
)
