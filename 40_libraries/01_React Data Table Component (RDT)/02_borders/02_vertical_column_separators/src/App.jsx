// App.jsx — Borders v3: vertical column lines via column.style
import DataTable from "react-data-table-component";

const columns = [
  // add right border on first two columns; leave the last column clean
  { name: "ID", selector: r => r.id, width: "80px", style: { borderRight: "1px solid #e5e7eb" } },
  { name: "Name", selector: r => r.name, style: { borderRight: "1px solid #e5e7eb" } },
  { name: "Role", selector: r => r.role }, // no border → cleaner last column
];

const data = [
  { id: 1, name: "Ellen Ripley", role: "Warrant Officer" },
  { id: 2, name: "Dwayne Hicks", role: "Corporal" },
  { id: 3, name: "Bishop", role: "Science Officer (Android)" },
  { id: 4, name: "Carter Burke", role: "Company Rep" },
];

const customStyles = {
  table: { style: { border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden" } },
  headRow: { style: { borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafb" } },
  rows: { style: { borderBottom: "1px solid #e5e7eb" } },
  headCells: {
    style: {
      /* match column verticals */
    },
  },
};

export default function App() {
  return (
    <div>
      <h1>RDT — Borders v3</h1>
      <DataTable columns={columns} data={data} customStyles={customStyles} dense />
    </div>
  );
}
