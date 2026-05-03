// App.jsx — Per-Column Filters in HEADER v1 (text inputs inside headers)
// No subHeader, no external bars — each column header contains its own input.

import React from "react";
import DataTable from "react-data-table-component";

const ALL = [
  { id: 1, name: "Ellen Ripley", role: "Warrant Officer", location: "LV-426" },
  { id: 2, name: "Dwayne Hicks", role: "Corporal", location: "USS Sulaco" },
  { id: 3, name: "Bishop", role: "Science Officer", location: "USS Sulaco" },
  { id: 4, name: "Vasquez", role: "Smartgunner", location: "LV-426" },
];

export default function App() {
  const [filters, setFilters] = React.useState({ name: "", role: "", location: "" });
  const set = (k, v) => setFilters(f => ({ ...f, [k]: v }));

  const filtered = React.useMemo(() => {
    const nm = filters.name.toLowerCase();
    const rl = filters.role.toLowerCase();
    const lc = filters.location.toLowerCase();
    return ALL.filter(r => r.name.toLowerCase().includes(nm) && r.role.toLowerCase().includes(rl) && r.location.toLowerCase().includes(lc));
  }, [filters]);

  const I = props => (
    <input {...props} style={{ width: "100%", boxSizing: "border-box", padding: 6, fontSize: 12, border: "1px solid #e5e7eb", borderRadius: 6 }} />
  );

  const columns = [
    { name: "ID", selector: r => r.id, width: "80px", right: true },
    {
      name: (
        <div style={{ display: "grid", gap: 6 }}>
          <span>Name</span>
          <I placeholder="Filter…" value={filters.name} onChange={e => set("name", e.target.value)} />
        </div>
      ),
      selector: r => r.name,
      grow: 2,
    },
    {
      name: (
        <div style={{ display: "grid", gap: 6 }}>
          <span>Role</span>
          <I placeholder="Filter…" value={filters.role} onChange={e => set("role", e.target.value)} />
        </div>
      ),
      selector: r => r.role,
      grow: 2,
      wrap: true,
    },
    {
      name: (
        <div style={{ display: "grid", gap: 6 }}>
          <span>Location</span>
          <I placeholder="Filter…" value={filters.location} onChange={e => set("location", e.target.value)} />
        </div>
      ),
      selector: r => r.location,
      grow: 1,
      wrap: true,
    },
  ];

  return (
    <div style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 10 }}>RDT — Header Filters v1 (Inputs in header)</h1>
      <DataTable columns={columns} data={filtered} />
    </div>
  );
}
