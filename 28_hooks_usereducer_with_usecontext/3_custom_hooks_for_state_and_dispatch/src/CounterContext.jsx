import React, { createContext, useReducer, useContext } from "react";

// --- 1. Reducer ---
const initialState = { count: 0 };
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": return { count: state.count + 1 };
    case "DECREMENT": return { count: state.count - 1 };
    default: return state;
  }
}

// --- 2. Contexts ---
// We create TWO separate contexts: one for state, one for dispatch
const StateContext = createContext(undefined);
const DispatchContext = createContext(undefined);

// --- 3. Custom Provider ---
function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // Nest the providers.
  // By separating them, components that only need dispatch won't re-render
  // when the state changes!
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

// --- 4. Custom Hooks ---
function useCounterState() {
  const context = useContext(StateContext);
  if (context === undefined) throw new Error("useCounterState must be used within a CounterProvider");
  return context;
}

function useCounterDispatch() {
  const context = useContext(DispatchContext);
  if (context === undefined) throw new Error("useCounterDispatch must be used within a CounterProvider");
  return context;
}

export { CounterProvider, useCounterState, useCounterDispatch };
