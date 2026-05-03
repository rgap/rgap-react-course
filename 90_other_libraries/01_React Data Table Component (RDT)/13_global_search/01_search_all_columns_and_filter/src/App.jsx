// App.jsx — Global Search v1 (basic client-side filter)
// Simple text input filters rows by Name/Role/Location (case-insensitive).
// Uses RDT's subHeader to place the search box above the table.

import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: r => r.id, width: "80px" },
  { name: "Name", selector: r => r.name, grow: 2 },
  { name: "Role", selector: r => r.role, grow: 2, wrap: true },
  { name: "Location", selector: r => r.location, grow: 1, wrap: true },
];

const ALL = [
  { id: 1, name: "Ellen Ripley", role: "Warrant Officer", location: "LV-426" },
  { id: 2, name: "Dwayne Hicks", role: "Corporal", location: "USS Sulaco" },
  { id: 3, name: "Bishop", role: "Science Officer", location: "USS Sulaco" },
  { id: 4, name: "Vasquez", role: "Smartgunner", location: "LV-426" },
];

export default function App() {
  const [q, setQ] = React.useState("");

  const filtered = React.useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return ALL;
    return ALL.filter(r => [r.name, r.role, r.location].some(v => String(v).toLowerCase().includes(s)));
  }, [q]);

  const SearchBox = (
    <input
      placeholder="Search all columns…"
      value={q}
      onChange={e => setQ(e.target.value)}
      style={{ width: 260, padding: "6px 10px", borderRadius: 8, border: "1px solid #e5e7eb" }}
    />
  );

  return (
    <div style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 10 }}>RDT — Global Search v1</h1>
      <DataTable columns={columns} data={filtered} subHeader subHeaderComponent={SearchBox} />
    </div>
  );
}
