import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    const fetchParallelData = async () => {
      try {
        setIsLoading(true);
        const startTime = Date.now();

        // 1. Fire BOTH requests at the exact same time!
        // We do NOT use the 'await' keyword here. We just create the Promises.
        console.log("Firing both requests simultaneously...");
        const usersPromise = fetch("https://jsonplaceholder.typicode.com/users");
        const todosPromise = fetch("https://jsonplaceholder.typicode.com/todos");

        // 2. Wait for ALL of them to finish using Promise.all()
        const [usersRes, todosRes] = await Promise.all([usersPromise, todosPromise]);

        if (!usersRes.ok || !todosRes.ok) throw new Error("One or more fetches failed");

        // 3. Parse the JSON in parallel too!
        const [usersJson, todosJson] = await Promise.all([
          usersRes.json(),
          todosRes.json()
        ]);

        // 4. Update state
        setUsers(usersJson);
        setTodos(todosJson);
        
        const endTime = Date.now();
        setTimeTaken(endTime - startTime);

      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchParallelData();
  }, []);

  if (isLoading) return <div style={{ padding: "20px" }}>⏳ Fetching data in parallel...</div>;
  if (error) return <div style={{ padding: "20px", color: "red" }}>❌ {error}</div>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Parallel Data Fetching</h1>
      
      <div style={{ backgroundColor: "#e8f5e9", padding: "10px", borderRadius: "5px", marginBottom: "20px" }}>
        <strong>⏱️ Loaded both datasets in:</strong> {timeTaken} ms
        <br />
        <small>(If done sequentially, this would take twice as long!)</small>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1, border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
          <h2>👥 Users ({users.length})</h2>
          <ul>
            {users.slice(0, 5).map(u => <li key={u.id}>{u.name}</li>)}
          </ul>
        </div>

        <div style={{ flex: 1, border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
          <h2>✅ Todos ({todos.length})</h2>
          <ul>
            {todos.slice(0, 5).map(t => <li key={t.id}>{t.title}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;