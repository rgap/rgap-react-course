import UserGreeting from "./UserGreeting";

// Middleman — does NOT receive user as a prop.
// UserGreeting pulls its own data from context.
function Dashboard() {
  return (
    <div style={{ padding: "10px" }}>
      <UserGreeting />
    </div>
  );
}

export default Dashboard;
