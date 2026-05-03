// App.jsx — Sortable Indicators v1 (built-in)
// Simplest: mark columns `sortable`. RDT shows its default indicator.

import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  { id: "id", name: "ID", selector: r => r.id, sortable: true, width: "80px" },
  { id: "name", name: "Name", selector: r => r.name, sortable: true },
  { id: "role", name: "Role", selector: r => r.role, sortable: true },
];

const data = [
  { id: 3, name: "Bishop", role: "Science Officer" },
  { id: 1, name: "Ellen Ripley", role: "Warrant Officer" },
  { id: 2, name: "Dwayne Hicks", role: "Corporal" },
];

export default function App() {
  return (
    <div style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Sortable v1 (Built-in)</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
