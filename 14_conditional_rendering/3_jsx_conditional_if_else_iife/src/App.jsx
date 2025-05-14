function App() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>If-Else Statement Inside Return</h1>
      {(() => {
        if (isLoggedIn) {
          return <p>Access to member area granted</p>;
        } else {
          return <p>Access denied. Please log in.</p>;
        }
      })()}
      {/* This is an IIFE (Immediately Invoked Function Expression) that allows using if-else directly in JSX */}
    </div>
  );
}

export default App;
