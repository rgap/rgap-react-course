# 1. The Auth Context

Before we can build a secure application with protected routes, we need a solid foundation for managing authentication state.

A `ProtectedRoute` component needs to answer a simple question: *"Is the user logged in?"*

---

## Global State

Authentication state is **Global State**. 
- The Navbar needs to know it (to show "Log Out" instead of "Log In").
- The Settings page needs to know it (to show the user's email).
- The Router needs to know it (to allow or deny access).

Because it is needed everywhere, we manage it using the **React Context API** (which we learned in Module 25).

---

## Setting up the AuthProvider

We create a file called `AuthContext.jsx`. 

Inside, we create a context and an `AuthProvider` component. The provider stores the `user` object in a `useState` hook. It also exposes helper functions like `login()` and `logout()`.

Finally, we export a custom hook called `useAuth()` so components can easily grab the auth state without importing `useContext` over and over.

```jsx
// src/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
```

---

## Wrapping the Application

In `main.jsx`, we wrap the entire `<App />` in the `<AuthProvider>`.

**Important Detail:** If your `login()` or `logout()` functions inside the AuthProvider ever need to use the `useNavigate()` hook to automatically redirect the user, the `<AuthProvider>` **MUST** be placed *inside* the `<BrowserRouter>`.

```jsx
// ✅ CORRECT
<BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
</BrowserRouter>

// ❌ WRONG (AuthProvider cannot use navigate here!)
<AuthProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</AuthProvider>
```
