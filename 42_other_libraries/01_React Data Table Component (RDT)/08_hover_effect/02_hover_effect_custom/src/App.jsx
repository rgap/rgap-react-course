// App.jsx — Hover Effects v2 (custom color + pointer cursor)
// Use a wrapper class to style `.rdt_TableRow:hover` with your own color.

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
    <div className="hover2" style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <style>{`
        .hover2 .rdt_TableRow { transition: background-color 120ms ease; }
        .hover2 .rdt_TableRow:hover { background-color:rgb(235, 245, 185); cursor: pointer; }
      `}</style>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Hover v2 (Custom Color)</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
