// App.jsx — Column Visibility v3 (presets: Minimal vs Detailed)
// Quick presets that swap which columns are visible.

import React from "react";
import DataTable from "react-data-table-component";

const BASE_COLS = [
  { id: "id", name: "ID", selector: r => r.id, width: "80px" },
  { id: "name", name: "Name", selector: r => r.name },
  { id: "role", name: "Role", selector: r => r.role },
  { id: "age", name: "Age", selector: r => r.age, right: true, width: "100px" },
  { id: "loc", name: "Location", selector: r => r.location },
  { id: "note", name: "Note", selector: r => r.note, wrap: true },
];

const data = [
  { id: 1, name: "Ripley", role: "Warrant Officer", age: 32, location: "LV-426", note: "Quarantine stickler" },
  { id: 2, name: "Hicks", role: "Corporal", age: 28, location: "Sulaco", note: "Calm under pressure" },
  { id: 3, name: "Bishop", role: "Science Officer", age: 4, location: "Sulaco", note: "Excellent EVA ops" },
];

export default function App() {
  const [visible, setVisible] = React.useState(new Set(["id", "name", "role"]));

  const showMinimal = () => setVisible(new Set(["id", "name", "role"]));
  const showDetailed = () => setVisible(new Set(["id", "name", "role", "age", "loc", "note"]));

  const columns = React.useMemo(() => BASE_COLS.map(c => ({ ...c, omit: !visible.has(c.id) })), [visible]);

  return (
    <div style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Column Visibility v3 (Presets)</h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        <button onClick={showMinimal}>Minimal</button>
        <button onClick={showDetailed}>Detailed</button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
