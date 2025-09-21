// App.jsx — Cell Editing v1 (single column, inline)
// Edit only the "Role" cell. Save on Enter/blur, cancel on Escape.

import React from "react";
import DataTable from "react-data-table-component";

const initial = [
  { id: 1, name: "Ellen Ripley", role: "Warrant Officer" },
  { id: 2, name: "Dwayne Hicks", role: "Corporal" },
  { id: 3, name: "Bishop", role: "Science Officer" },
];

export default function App() {
  const [rows, setRows] = React.useState(initial);
  const [editingId, setEditingId] = React.useState(null);
  const [draft, setDraft] = React.useState("");

  const RoleCell = row =>
    editingId === row.id ? (
      <input
        autoFocus
        value={draft}
        onChange={e => setDraft(e.target.value)}
        onBlur={() => {
          setRows(rs => rs.map(r => (r.id === row.id ? { ...r, role: draft.trim() } : r)));
          setEditingId(null);
        }}
        onKeyDown={e => {
          if (e.key === "Enter") e.currentTarget.blur();
          if (e.key === "Escape") setEditingId(null);
        }}
        style={{ width: "100%", padding: 6 }}
      />
    ) : (
      <span
        onDoubleClick={() => {
          setEditingId(row.id);
          setDraft(row.role);
        }}
      >
        {row.role}
      </span>
    );

  const columns = [
    { name: "ID", selector: r => r.id, width: "72px", right: true },
    { name: "Name", selector: r => r.name, grow: 2 },
    { name: "Role (dbl-click to edit)", cell: RoleCell, grow: 2 },
  ];

  return (
    <div style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <h2 style={{ margin: 0, marginBottom: 10 }}>RDT — Cell Editing v1</h2>
      <DataTable columns={columns} data={rows} dense />
    </div>
  );
}
