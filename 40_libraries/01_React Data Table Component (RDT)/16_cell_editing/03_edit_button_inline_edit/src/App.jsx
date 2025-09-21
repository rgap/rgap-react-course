// App.jsx — Cell Editing v3 (row edit mode: Save/Cancel)
// Click Edit to turn the whole row into inputs; Save/Cancel affects that row.

import React from "react";
import DataTable from "react-data-table-component";

const seed = [
  { id: 1, name: "Ripley", role: "Warrant Officer" },
  { id: 2, name: "Hicks", role: "Corporal" },
  { id: 3, name: "Bishop", role: "Science Officer" },
];

export default function App() {
  const [rows, setRows] = React.useState(seed);
  const [editId, setEditId] = React.useState(null);
  const [draft, setDraft] = React.useState({ name: "", role: "" });

  const start = r => { setEditId(r.id); setDraft({ name: r.name, role: r.role }); };
  const save  = () => { setRows(rs => rs.map(r => r.id === editId ? { ...r, ...draft } : r)); setEditId(null); };
  const cancel= () => setEditId(null);

  const NameCell = r => editId === r.id
    ? <input autoFocus value={draft.name} onChange={e => setDraft(d => ({ ...d, name: e.target.value }))} style={{ width:"100%", padding:6 }} />
    : <span>{r.name}</span>;

  const RoleCell = r => editId === r.id
    ? <input value={draft.role} onChange={e => setDraft(d => ({ ...d, role: e.target.value }))} style={{ width:"100%", padding:6 }} />
    : <span>{r.role}</span>;

  const columns = [
    { name:"ID", selector:r=>r.id, width:"70px", right:true },
    { name:"Name", cell: NameCell, grow:2 },
    { name:"Role", cell: RoleCell, grow:2, wrap:true },
    { name:"Actions", width:"160px", cell: r => editId === r.id
        ? (<><button onClick={save}>Save</button> <button onClick={cancel}>Cancel</button></>)
        : (<button onClick={() => start(r)}>Edit</button>)
      }
  ];

  return (
    <div style={{ padding:16, fontFamily:"system-ui,sans-serif" }}>
      <h2 style={{ margin:0, marginBottom:10 }}>RDT — Cell Editing v3</h2>
      <DataTable columns={columns} data={rows} dense />
    </div>
  );
}
