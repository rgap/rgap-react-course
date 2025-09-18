// App.jsx — Row Striping v1 (built-in prop)
// Easiest: just pass `striped`.

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
  { id: 4, name: "Carter Burke", role: "Company Rep" },
];

export default function App() {
  return (
    <div>
      <h1>RDT — Row Striping v1</h1>
      <DataTable columns={columns} data={data} striped />
    </div>
  );
}
