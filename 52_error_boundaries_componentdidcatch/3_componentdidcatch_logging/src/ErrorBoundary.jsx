import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // We can also store the actual error in state to display it!
    return { hasError: true, error: error };
  }

  // --- NEW LIFECYCLE METHOD ---
  // This method is called during the "commit" phase, which is safe for side-effects!
  componentDidCatch(error, errorInfo) {
    // 1. You can log the error to an external service (like Sentry, LogRocket, or Datadog)
    console.error("🚨 REPORTING TO SENTRY:", error);
    
    // 2. The errorInfo object contains the "componentStack", which shows EXACTLY
    // which component crashed, tracing it all the way down the React tree!
    console.error("🚨 COMPONENT STACK TRACE:", errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", backgroundColor: "#ffebee", border: "2px solid red" }}>
          <h2>UI Render Failed</h2>
          <p style={{ color: "red", fontFamily: "monospace", padding: "10px", backgroundColor: "white" }}>
            {this.state.error.toString()}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
