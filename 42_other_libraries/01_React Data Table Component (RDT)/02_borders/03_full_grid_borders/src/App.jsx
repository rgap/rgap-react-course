// App.jsx — RDT "Borders" (simple)
// Just render a table with visible cell borders using tiny CSS.

import DataTable from "react-data-table-component";

// columns: minimal
const columns = [
  { name: "ID", selector: r => r.id, width: "80px" },
  { name: "Name", selector: r => r.name },
  { name: "Role", selector: r => r.role },
];

// sample data
const data = [
  { id: 1, name: "Ellen Ripley", role: "Warrant Officer" },
  { id: 2, name: "Dwayne Hicks", role: "Corporal" },
  { id: 3, name: "Bishop", role: "Science Officer (Android)" },
  { id: 4, name: "Carter Burke", role: "Company Rep" },
];

export default function App() {
  return (
    <div>
      {/* Tiny CSS to draw borders per cell/row */}
      <style>{`
        .rdt-borders { border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
        .rdt-borders .rdt_TableHeadRow,
        .rdt-borders .rdt_TableRow { border-bottom: 1px solid #e5e7eb; }
        .rdt-borders .rdt_TableCol,
        .rdt-borders .rdt_TableCell { border-right: 1px solid #e5e7eb; }
        /* no right border on last column (head + body) */
        .rdt-borders .rdt_TableCol:last-child,
        .rdt-borders .rdt_TableCell:last-child { border-right: none; }
        /* optional subtle header bg */
        .rdt-borders .rdt_TableHeadRow { background: #f9fafb; }
      `}</style>

      <h1>RDT — Borders</h1>

      {/* Wrapper class scopes the borders */}
      <div className="rdt-borders">
        <DataTable columns={columns} data={data} dense persistTableHead />
      </div>
    </div>
  );
}
