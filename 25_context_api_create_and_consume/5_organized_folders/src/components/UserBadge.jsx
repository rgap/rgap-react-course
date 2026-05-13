import { useContext } from "react";
import UserContext from "../contexts/UserContext";

// Another consumer of the same context — no props needed.
function UserBadge() {
  const { user } = useContext(UserContext);

  if (!user) return null;

  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        backgroundColor: user.role === "admin" ? "#e53935" : "#1e88e5",
        color: "white",
        borderRadius: "12px",
        fontSize: "14px",
      }}
    >
      {user.role}
    </span>
  );
}

export default UserBadge;
