// App.jsx — TanStack Table with striped rows (minimal)
import * as React from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

// Define columns → header text + which field to read from each row
const columns = [
  { header: "ID", accessorKey: "id" },
  { header: "Name", accessorKey: "name" },
  { header: "Role", accessorKey: "role" },
];

// Sample data (same spirit as RDT example)
const data = [
  { id: 1, name: "Ellen Ripley", role: "Warrant Officer" },
  { id: 2, name: "Dwayne Hicks", role: "Corporal" },
  { id: 3, name: "Bishop", role: "Science Officer (Android)" },
  { id: 4, name: "Carter Burke", role: "Company Rep" },
];

export default function App() {
  // Build the table model (headless). We render the HTML ourselves.
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 16 }}>
      <h1>TanStack — Row Striping</h1>

      {/* Tiny CSS: striped effect via :nth-child on table rows */}
      <style>{`
        .striped { border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; }
        .striped table { width: 100%; border-collapse: separate; border-spacing: 0; }
        thead th { background: #f9fafb; border-bottom: 1px solid #e5e7eb; text-align: left; padding: 10px 12px; }
        tbody td { padding: 10px 12px; }
        tbody tr:nth-child(even) td { background: #f8fafc; } /* ← stripe */
      `}</style>

      <div className="striped">
        <table>
          <thead>
            {table.getHeaderGroups().map(hg => (
              <tr key={hg.id}>
                {hg.headers.map(h => (
                  <th key={h.id}>
                    {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
