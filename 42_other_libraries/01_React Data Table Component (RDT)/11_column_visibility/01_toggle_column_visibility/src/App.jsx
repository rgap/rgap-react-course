// App.jsx — Column Visibility v1 (basic checkboxes → column.omit)
// Toggle visibility by flipping each column's `omit` prop.

import React from "react";
import DataTable from "react-data-table-component";

const BASE_COLS = [
  { id: "id", name: "ID", selector: r => r.id, width: "80px" },
  { id: "name", name: "Name", selector: r => r.name },
  { id: "role", name: "Role", selector: r => r.role },
  { id: "age", name: "Age", selector: r => r.age, right: true, width: "100px" },
];

const data = [
  { id: 1, name: "Ellen Ripley", role: "Warrant Officer", age: 32 },
  { id: 2, name: "Dwayne Hicks", role: "Corporal", age: 28 },
  { id: 3, name: "Bishop", role: "Science Officer", age: 4 },
];

export default function App() {
  // track visible columns by id
  const [visible, setVisible] = React.useState(() => new Set(["id", "name", "role", "age"]));

  const toggle = id =>
    setVisible(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  // map base columns → set omit based on visibility set
  const columns = React.useMemo(() => BASE_COLS.map(c => ({ ...c, omit: !visible.has(c.id) })), [visible]);

  return (
    <div style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Column Visibility v1</h1>

      <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
        {BASE_COLS.map(c => (
          <label key={c.id} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <input type="checkbox" checked={visible.has(c.id)} onChange={() => toggle(c.id)} />
            {c.name}
          </label>
        ))}
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
}
