function App() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Logical AND (&&) Example</h1>
      {/* Logical AND (&&) renders the second expression if the first one is true */}
      {isLoggedIn && <p>Welcome to the dashboard!</p>}
      {/* If `isLoggedIn` is true, renders "Welcome to the dashboard!". Otherwise, nothing is rendered. */}
    </div>
  );
}

export default App;
