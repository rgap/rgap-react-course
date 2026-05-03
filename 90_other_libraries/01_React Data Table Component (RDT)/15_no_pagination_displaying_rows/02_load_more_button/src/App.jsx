// App.jsx — Load More (minimal)

import React from "react";
import DataTable from "react-data-table-component";

const ALL = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Person ${i + 1}`,
  role: ["Analyst", "Technician", "Officer", "Pilot"][i % 4],
}));

const columns = [
  { name: "ID", selector: r => r.id, width: "80px", right: true },
  { name: "Name", selector: r => r.name, grow: 2 },
  { name: "Role", selector: r => r.role, grow: 1 },
];

export default function App() {
  const STEP = 10;
  const [count, setCount] = React.useState(20);

  const rows = ALL.slice(0, count);
  const done = count >= ALL.length;

  return (
    <div>
      <DataTable columns={columns} data={rows} dense />
      {!done && <button onClick={() => setCount(c => Math.min(c + STEP, ALL.length))}>Load more</button>}
      {done && <div>End of list</div>}
    </div>
  );
}
