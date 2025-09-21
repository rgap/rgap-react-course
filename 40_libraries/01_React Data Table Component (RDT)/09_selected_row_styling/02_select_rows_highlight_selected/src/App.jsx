// App.jsx — Selected Row Styling v5 (click-to-select; no checkboxes)
// Disable checkboxes; click a row to select it and style via conditionalRowStyles.

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
  const [selectedId, setSelectedId] = React.useState(null);

  const conditionalRowStyles = [
    {
      when: row => row.id === selectedId,
      style: {
        backgroundColor: "#fff7ed", // amber-50
        boxShadow: "inset 3px 0 0 #f59e0b",
      },
    },
  ];

  return (
    <div className="clicksel" style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <style>{`
        .clicksel .rdt_TableRow { cursor: pointer; transition: background-color 120ms ease; }
        .clicksel .rdt_TableRow:hover { background-color: #f9fafb; }
      `}</style>

      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Selected Styling v5 (Click-to-select)</h1>
      <DataTable
        columns={columns}
        data={data}
        // no selectableRows → no checkboxes
        onRowClicked={row => setSelectedId(row.id)}
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
}
