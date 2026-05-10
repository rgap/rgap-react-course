import React, { createContext, useReducer, useContext } from "react";

// --- Types & Initial State ---
const initialState = {
  user: null,
  theme: "light",
  notifications: []
};

// --- Reducer ---
function appReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "ADD_NOTIFICATION":
      return { 
        ...state, 
        notifications: [...state.notifications, action.payload] 
      };
    case "CLEAR_NOTIFICATIONS":
      return { ...state, notifications: [] };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

// --- Contexts ---
const AppStateContext = createContext(undefined);
const AppDispatchContext = createContext(undefined);

// --- Provider ---
function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

// --- Custom Hooks ---
function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) throw new Error("useAppState must be used within AppProvider");
  return context;
}

function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (context === undefined) throw new Error("useAppDispatch must be used within AppProvider");
  return context;
}

export { AppProvider, useAppState, useAppDispatch };
