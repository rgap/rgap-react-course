// App.jsx — Cell Editing (Edit button opens a modal with details)
// Click "Edit" → a lightweight modal appears to edit Name, Role, and Location.
// Save applies changes to that row; Cancel closes without saving.

import React from "react";
import DataTable from "react-data-table-component";

const SEED = [
  { id: 1, name: "Ellen Ripley", role: "Warrant Officer", location: "LV-426" },
  { id: 2, name: "Dwayne Hicks", role: "Corporal",        location: "USS Sulaco" },
  { id: 3, name: "Bishop",       role: "Science Officer", location: "USS Sulaco" },
];

function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,.35)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 16, zIndex: 50
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: "min(520px, 92vw)", background: "#fff", borderRadius: 12,
          padding: 16, boxShadow: "0 12px 30px rgba(0,0,0,.2)"
        }}
      >
        <h3 style={{ margin: 0, marginBottom: 12 }}>{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [rows, setRows] = React.useState(SEED);
  const [open, setOpen] = React.useState(false);
  const [editId, setEditId] = React.useState(null);
  const [draft, setDraft] = React.useState({ name: "", role: "", location: "" });

  // Open modal with current row as draft
  const startEdit = (row) => {
    setEditId(row.id);
    setDraft({ name: row.name || "", role: row.role || "", location: row.location || "" });
    setOpen(true);
  };

  const save = () => {
    setRows(rs => rs.map(r => (r.id === editId ? { ...r, ...draft } : r)));
    setOpen(false);
    setEditId(null);
  };

  const columns = [
    { name: "ID", selector: r => r.id, width: "70px", right: true },
    { name: "Name", selector: r => r.name, grow: 2 },
    { name: "Role", selector: r => r.role, grow: 2, wrap: true },
    { name: "Location", selector: r => r.location, grow: 1, wrap: true },
    {
      name: "Actions",
      width: "120px",
      cell: row => <button onClick={() => startEdit(row)}>Edit</button>,
      ignoreRowClick: true,
      button: true,
    },
  ];

  // Close on Escape inside modal
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); if (e.key === "Enter") save(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, draft]);

  return (
    <div style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 10 }}>RDT — Edit Button → Modal</h1>
      <DataTable columns={columns} data={rows} dense />

      <Modal open={open} title={`Edit Row #${editId ?? ""}`} onClose={() => setOpen(false)}>
        <div style={{ display: "grid", gap: 10 }}>
          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontSize: 12, color: "#475569" }}>Name</span>
            <input
              value={draft.name}
              onChange={e => setDraft(d => ({ ...d, name: e.target.value }))}
              style={{ padding: 8, border: "1px solid #e5e7eb", borderRadius: 8 }}
              autoFocus
            />
          </label>

          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontSize: 12, color: "#475569" }}>Role</span>
            <input
              value={draft.role}
              onChange={e => setDraft(d => ({ ...d, role: e.target.value }))}
              style={{ padding: 8, border: "1px solid #e5e7eb", borderRadius: 8 }}
            />
          </label>

          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontSize: 12, color: "#475569" }}>Location</span>
            <input
              value={draft.location}
              onChange={e => setDraft(d => ({ ...d, location: e.target.value }))}
              style={{ padding: 8, border: "1px solid #e5e7eb", borderRadius: 8 }}
            />
          </label>
        </div>

        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 14 }}>
          <button onClick={() => setOpen(false)}>Cancel</button>
          <button onClick={save} disabled={!draft.name.trim() || !draft.role.trim()}>
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
}
