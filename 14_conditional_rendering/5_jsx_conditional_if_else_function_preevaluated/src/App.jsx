function App() {
  const isLoggedIn = false;

  const renderContent = () => {
    if (isLoggedIn) {
      return <p>Access to the member area granted</p>;
    } else {
      return <p>Access denied. Please log in.</p>;
    }
  };

  return (
    <div>
      <h1>If-Else Statement Example</h1>
      {renderContent()}
      {/* If-else allows for more complex conditions with multiple branches. */}
    </div>
  );
}

export default App;
