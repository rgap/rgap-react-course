import React from "react";

// Error Boundaries MUST be Class Components!
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // Initialize standard state
    this.state = { hasError: false };
  }

  // This is a special React lifecycle method!
  // If ANY child component throws an error, React calls this function BEFORE unmounting the tree.
  static getDerivedStateFromError(error) {
    // We update the state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    // If an error was caught, we render the Fallback UI
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", backgroundColor: "#ffebee", border: "2px solid red", borderRadius: "8px" }}>
          <h2 style={{ color: "red", margin: "0 0 10px 0" }}>⚠️ Something went wrong.</h2>
          <p>We apologize for the inconvenience. This widget is currently unavailable.</p>
        </div>
      );
    }

    // Otherwise, we render the children normally!
    return this.props.children;
  }
}
