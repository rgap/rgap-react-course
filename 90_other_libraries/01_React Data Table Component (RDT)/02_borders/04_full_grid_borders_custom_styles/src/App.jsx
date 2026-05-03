// App.jsx — Borders v4: verticals using customStyles.cells/headCells + CSS to drop last border
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

const customStyles = {
  table: { style: { border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden" } },
  headRow: { style: { borderBottom: "1px solid #e5e7eb", background: "#f9fafb" } },
  rows: { style: { borderBottom: "1px solid #e5e7eb" } },
  headCells: { style: { borderRight: "1px solid #e5e7eb" } },
  cells: { style: { borderRight: "1px solid #e5e7eb" } },
};

export default function App() {
  return (
    <div>
      <h1>RDT — Borders v4</h1>
      <div>
        <DataTable columns={columns} data={data} customStyles={customStyles} dense />
      </div>
    </div>
  );
}
