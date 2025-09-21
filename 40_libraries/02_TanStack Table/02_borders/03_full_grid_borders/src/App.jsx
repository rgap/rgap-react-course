// App.jsx — TanStack Table with full grid (all cell borders)
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import * as React from "react";

const columns = [
  { header: "ID", accessorKey: "id" },
  { header: "Name", accessorKey: "name" },
  { header: "Role", accessorKey: "role" },
];

const data = [
  { id: 1, name: "Ellen Ripley", role: "Warrant Officer" },
  { id: 2, name: "Dwayne Hicks", role: "Corporal" },
  { id: 3, name: "Bishop", role: "Science Officer (Android)" },
  { id: 4, name: "Carter Burke", role: "Company Rep" },
];

export default function App() {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 16 }}>
      <h1>TanStack — Borders: Full Grid</h1>

      {/* Draw vertical lines for every column; trim the last to keep the outer edge clean */}
      <style>{`
        .grid { border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
        .grid table { width: 100%; border-collapse: separate; border-spacing: 0; }
        thead th {
          background: #f9fafb; padding: 10px 12px; text-align: left; font-weight: 600;
          border-bottom: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb;
        }
        tbody td {
          padding: 10px 12px; border-bottom: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb;
        }
        thead th:last-child, tbody td:last-child { border-right: none; }
        tbody tr:last-child td { border-bottom: none; }
      `}</style>

      <div className="grid">
        <table>
          <thead>
            {table.getHeaderGroups().map(hg => (
              <tr key={hg.id}>
                {hg.headers.map(h => (
                  <th key={h.id}>{h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}</th>
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
