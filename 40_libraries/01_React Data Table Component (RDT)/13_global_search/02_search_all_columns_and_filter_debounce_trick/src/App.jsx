// App.jsx — Global Search v2 (debounced input)
// Debounce user input by 300ms to avoid filtering on every keystroke.

import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: r => r.id, width: "80px" },
  { name: "Name", selector: r => r.name },
  { name: "Role", selector: r => r.role, wrap: true },
  { name: "Location", selector: r => r.location, wrap: true },
];

const ALL = [
  { id: 1, name: "Ellen Ripley", role: "Warrant Officer", location: "LV-426" },
  { id: 2, name: "Dwayne Hicks", role: "Corporal", location: "USS Sulaco" },
  { id: 3, name: "Bishop", role: "Science Officer", location: "USS Sulaco" },
  { id: 4, name: "Vasquez", role: "Smartgunner", location: "LV-426" },
];

function useDebouncedValue(value, delay = 300) {
  const [v, setV] = React.useState(value);
  React.useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return v;
}

export default function App() {
  const [raw, setRaw] = React.useState("");
  const q = useDebouncedValue(raw, 300);

  const filtered = React.useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return ALL;
    return ALL.filter(r => [r.name, r.role, r.location].some(v => String(v).toLowerCase().includes(s)));
  }, [q]);

  const SearchBox = (
    <input
      placeholder="Search… (debounced)"
      value={raw}
      onChange={e => setRaw(e.target.value)}
      style={{ width: 260, padding: "6px 10px", borderRadius: 8, border: "1px solid #e5e7eb" }}
    />
  );

  return (
    <div style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 10 }}>RDT — Global Search v2 (Debounced)</h1>
      <DataTable columns={columns} data={filtered} subHeader subHeaderComponent={SearchBox} />
    </div>
  );
}
