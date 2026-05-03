// App.jsx — Sortable Indicators v4 (custom sort functions + visual cue)
// Case-insensitive text sort, numeric sort, and date sort. Header shows active arrow like v3.

import React from "react";
import DataTable from "react-data-table-component";

const rows = [
  { id: 1, name: "ellen ripley", role: "Warrant Officer", age: 32, started: "2122-06-12" },
  { id: 2, name: "Dwayne Hicks", role: "Corporal", age: 28, started: "2179-07-18" },
  { id: 3, name: "bishop", role: "Science Officer", age: 4, started: "2179-07-18" },
  { id: 4, name: "Vasquez", role: "Smartgunner", age: 27, started: "2179-07-17" },
];

function arrowHeader(label, isActive, dir) {
  const arrow = isActive ? (dir === "asc" ? "▲" : "▼") : "⇅";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      {label}
      <span style={{ opacity: 0.7, fontSize: 12 }}>{arrow}</span>
    </span>
  );
}

export default function App() {
  const [active, setActive] = React.useState({ id: "name", dir: "asc" });

  const columns = [
    {
      id: "name",
      name: arrowHeader("Name", active.id === "name", active.dir),
      selector: r => r.name,
      sortable: true,
      sortFunction: (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    },
    {
      id: "age",
      name: arrowHeader("Age", active.id === "age", active.dir),
      selector: r => r.age,
      sortable: true,
      sortFunction: (a, b) => a.age - b.age,
      right: true,
      width: "100px",
    },
    {
      id: "started",
      name: arrowHeader("Started", active.id === "started", active.dir),
      selector: r => r.started,
      sortable: true,
      sortFunction: (a, b) => new Date(a.started) - new Date(b.started),
      width: "160px",
    },
    { id: "role", name: arrowHeader("Role", active.id === "role", active.dir), selector: r => r.role, sortable: true },
  ];

  return (
    <div style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Sortable v4 (Custom SortFns)</h1>
      <DataTable columns={columns} data={rows} defaultSortFieldId="name" onSort={(column, dir) => setActive({ id: column.id, dir })} />
    </div>
  );
}
