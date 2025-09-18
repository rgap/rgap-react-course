// App.jsx — Borders v2: horizontal separators using customStyles (no vertical lines)
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

// only top/frame + horizontal row lines
const customStyles = {
  table: { style: { border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden" } },
  headRow: { style: { borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafb" } },
  rows: { style: { borderBottom: "1px solid #e5e7eb" } },
};

export default function App() {
  return (
    <div>
      <h1>RDT — Borders v2</h1>
      <DataTable 
        columns={columns}
        data={data}
        customStyles={customStyles}
        dense />
    </div>
  );
}
