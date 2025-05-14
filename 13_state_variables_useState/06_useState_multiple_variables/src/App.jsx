import { useState } from "react";

function App() {
  // Two state variables: one for first name and one for last name
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <h1>Enter Your Name</h1>
      <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
      <p>
        Your full name is: {firstName} {lastName}
      </p>
    </div>
  );
}

export default App;
