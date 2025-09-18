import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  function login(username) {
    setUser({ username });
  }
  function logout() {
    setUser(null);
  }
  return { user, login, logout };
}
