import React, { createContext, useContext, useState } from "react";

// 1. Create the Context
const AuthContext = createContext();

// 2. Create the Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Simulate a login API call
  const login = (username) => {
    setUser({ username, role: "user" }); // Hardcoded role for now
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Create a custom hook for easy access
export function useAuth() {
  return useContext(AuthContext);
}
