// App.jsx — Grouped Headers (2 buttons toggle column groups; super simple)
// Two buttons above the table header switch which columns are shown.
// Group A: ID, Name, Role
// Group B: Age, Location
// This mimics multi-row headers by conditionally showing grouped columns.

import React from "react";
import DataTable from "react-data-table-component";

const BASE_COLS = [
  { id: "id", name: "ID", selector: r => r.id, width: "90px" },
  { id: "name", name: "Name", selector: r => r.name, grow: 2, wrap: true },
  { id: "role", name: "Role", selector: r => r.role, grow: 2, wrap: true },
  { id: "age", name: "Age", selector: r => r.age, width: "110px", right: true },
  { id: "loc", name: "Location", selector: r => r.location, grow: 2, wrap: true },
];

const data = [
  {
    id: 1,
    name: "Ellen Louise Ripley",
    role: "Warrant Officer — decisive command; quarantine enforcement.",
    age: 32,
    location: "LV-426 (Hadley's Hope), Acheron",
  },
  { id: 2, name: "Dwayne Hicks", role: "Corporal — methodical NCO; coordinates defense and evac.", age: 28, location: "USS Sulaco — dropship bay" },
  {
    id: 3,
    name: "Bishop",
    role: "Science Officer (Android) — EVA precision; ethical routines.",
    age: "—",
    location: "Sulaco ops core; medbay; diagnostics",
  },
  {
    id: 4,
    name: "Carter J. Burke",
    role: "WY Corporate Rep — profit-first; legal risk deflection.",
    age: 35,
    location: "WY HQ (Earth); temp aboard Sulaco",
  },
];

export default function App() {
  const [group, setGroup] = React.useState("A"); // "A" or "B"

  const visible = React.useMemo(() => {
    return group === "A"
      ? new Set(["id", "name", "role"]) // primary info
      : new Set(["age", "loc"]); // extra info
  }, [group]);

  const columns = React.useMemo(() => BASE_COLS.map(c => ({ ...c, omit: !visible.has(c.id) })), [visible]);

  return (
    <div style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 10 }}>RDT — Grouped Headers (2 buttons)</h1>

      {/* Grouped headers bar (clickable) */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 6,
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setGroup("A")}
          aria-pressed={group === "A"}
          style={{
            padding: "6px 10px",
            borderRadius: 8,
            border: "1px solid #e5e7eb",
            background: group === "A" ? "#e2e8f0" : "#f8fafc",
            fontWeight: 600,
          }}
        >
          Primary (ID • Name • Role)
        </button>
        <button
          onClick={() => setGroup("B")}
          aria-pressed={group === "B"}
          style={{
            padding: "6px 10px",
            borderRadius: 8,
            border: "1px solid #e5e7eb",
            background: group === "B" ? "#e2e8f0" : "#f8fafc",
            fontWeight: 600,
          }}
        >
          Extra (Age • Location)
        </button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        customStyles={{
          table: { style: { width: "100%", border: "1px solid #e5e7eb", borderRadius: 8, overflow: "hidden" } },
          headRow: { style: { background: "#f8fafc", minHeight: 44 } },
          rows: { style: { minHeight: 46 } },
        }}
        dense
      />
    </div>
  );
}
