import UserBadge from "./UserBadge";

// Middleman — does NOT receive user as a prop.
// It simply composes UI; UserBadge pulls its own data from context.
function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h2>My App</h2>
      <UserBadge />
    </div>
  );
}

export default Header;
