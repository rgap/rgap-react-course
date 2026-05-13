import { createContext } from "react";

// Step 1: Create the context with a default value of null.
// This file is the single source of truth for the UserContext object.
// It is kept separate so both the Provider and any consumer can import it
// without creating circular dependencies.
const UserContext = createContext(null);

export default UserContext;
