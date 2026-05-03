// App.jsx — Hover Effects v1 (built-in highlight)
// Easiest: pass `highlightOnHover` to get a subtle background on hover.

import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: r => r.id, width: "80px" },
  { name: "Name", selector: r => r.name },
  { name: "Role", selector: r => r.role },
];

const data = [
  { id: 1, name: "Ellen Ripley", role: "Warrant Officer" },
  { id: 2, name: "Dwayne Hicks", role: "Corporal" },
  { id: 3, name: "Bishop", role: "Science Officer (Android)" },
  { id: 4, name: "Vasquez", role: "Smartgunner" },
];

export default function App() {
  return (
    <div style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Hover v1 (Built-in)</h1>
      <DataTable columns={columns} data={data} highlightOnHover />
    </div>
  );
}
