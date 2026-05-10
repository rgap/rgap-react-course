import { createContext } from "react";

// Create the context in its own file.
// This file is the single source of truth for ThemeContext.
// Any file that needs to provide or consume it will import from here.
const ThemeContext = createContext("light");

export default ThemeContext;
