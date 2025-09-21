// App.jsx — Global Search v4 (highlight matches)
// Same as v1 but highlights matching substrings within Name/Role/Location.

import React from "react";
import DataTable from "react-data-table-component";

function highlight(text, q) {
  if (!q) return text;
  const s = q.trim();
  if (!s) return text;
  const idx = text.toLowerCase().indexOf(s.toLowerCase());
  if (idx === -1) return text;
  return (
    <span>
      {text.slice(0, idx)}
      <mark>{text.slice(idx, idx + s.length)}</mark>
      {text.slice(idx + s.length)}
    </span>
  );
}

const baseCols = q => [
  { name: "ID", selector: r => r.id, width: "80px" },
  { name: "Name", cell: r => <span>{highlight(r.name, q)}</span>, grow: 2 },
  { name: "Role", cell: r => <span>{highlight(r.role, q)}</span>, grow: 2, wrap: true },
  { name: "Location", cell: r => <span>{highlight(r.location, q)}</span>, grow: 1, wrap: true },
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
      placeholder="Search… (highlights matches)"
      value={q}
      onChange={e => setQ(e.target.value)}
      style={{ width: 280, padding: "6px 10px", borderRadius: 8, border: "1px solid #e5e7eb" }}
    />
  );

  return (
    <div style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 10 }}>RDT — Global Search v4 (Highlight)</h1>
      <DataTable columns={baseCols(q)} data={filtered} subHeader subHeaderComponent={SearchBox} />
    </div>
  );
}
