// App.jsx — Cell Editing v2 (per-cell editing, Name & Role)
// Each cell toggles to an <input> on double click; independent per cell.

import React from "react";
import DataTable from "react-data-table-component";

const seed = [
  { id: 1, name: "Ripley", role: "Warrant Officer" },
  { id: 2, name: "Hicks", role: "Corporal" },
  { id: 3, name: "Bishop", role: "Science Officer" },
];

export default function App() {
  const [rows, setRows] = React.useState(seed);
  const [editKey, setEditKey] = React.useState(null); // `${id}:${field}`
  const [draft, setDraft] = React.useState("");

  function Cell({ row, field }) {
    const key = `${row.id}:${field}`;
    const editing = editKey === key;
    if (!editing) {
      return (
        <span
          onDoubleClick={() => {
            setEditKey(key);
            setDraft(row[field] ?? "");
          }}
        >
          {row[field]}
        </span>
      );
    }
    return (
      <input
        autoFocus
        value={draft}
        onChange={e => setDraft(e.target.value)}
        onBlur={() => {
          setRows(rs => rs.map(r => (r.id === row.id ? { ...r, [field]: draft.trim() } : r)));
          setEditKey(null);
        }}
        onKeyDown={e => {
          if (e.key === "Enter") e.currentTarget.blur();
          if (e.key === "Escape") setEditKey(null);
        }}
        style={{ width: "100%", padding: 6 }}
      />
    );
  }

  const columns = [
    { name: "ID", selector: r => r.id, width: "68px", right: true },
    { name: "Name", cell: r => <Cell row={r} field="name" />, grow: 2 },
    { name: "Role", cell: r => <Cell row={r} field="role" />, grow: 2, wrap: true },
  ];

  return (
    <div style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <h2 style={{ margin: 0, marginBottom: 10 }}>RDT — Cell Editing v2</h2>
      <DataTable columns={columns} data={rows} dense />
    </div>
  );
}
