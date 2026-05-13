import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* RouterProvider becomes the absolute root of our application */}
    {/* RouterProvider is a wrapper component that allows us to use the router */}
    {/* The router is a configuration object that tells React Router what to do when the user navigates to a different route */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
