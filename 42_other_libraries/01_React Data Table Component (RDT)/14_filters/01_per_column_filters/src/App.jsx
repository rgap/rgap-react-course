// App.jsx — Per-Column Filters v1 (simple inputs in a subHeader)
// One input per column (Name, Role, Location). Case-insensitive "includes" matching.

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
  { id: 2, name: "Dwayne Hicks", role: "Corporal",        location: "USS Sulaco" },
  { id: 3, name: "Bishop",       role: "Science Officer", location: "USS Sulaco" },
  { id: 4, name: "Vasquez",      role: "Smartgunner",     location: "LV-426" },
];

export default function App() {
  const [nameQ, setNameQ] = React.useState("");
  const [roleQ, setRoleQ] = React.useState("");
  const [locQ, setLocQ] = React.useState("");

  const filtered = React.useMemo(() => {
    const nm = nameQ.toLowerCase();
    const rl = roleQ.toLowerCase();
    const lc = locQ.toLowerCase();
    return ALL.filter(r =>
      r.name.toLowerCase().includes(nm) &&
      r.role.toLowerCase().includes(rl) &&
      r.location.toLowerCase().includes(lc)
    );
  }, [nameQ, roleQ, locQ]);

  const Filters = (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <input placeholder="Name…"     value={nameQ} onChange={e => setNameQ(e.target.value)} style={ibox} />
      <input placeholder="Role…"     value={roleQ} onChange={e => setRoleQ(e.target.value)} style={ibox} />
      <input placeholder="Location…" value={locQ}  onChange={e => setLocQ(e.target.value)}  style={ibox} />
      <button onClick={() => { setNameQ(""); setRoleQ(""); setLocQ(""); }}>Clear</button>
    </div>
  );

  return (
    <div style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 10 }}>RDT — Per-Column Filters v1</h1>
      <DataTable columns={columns} data={filtered} subHeader subHeaderComponent={Filters} />
    </div>
  );
}

const ibox = { width: 180, padding: "6px 10px", borderRadius: 8, border: "1px solid #e5e7eb" };
