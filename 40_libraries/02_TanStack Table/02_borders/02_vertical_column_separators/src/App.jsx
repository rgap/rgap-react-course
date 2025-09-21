// App.jsx — TanStack Table with ONLY vertical column separators (no horizontal lines anywhere)
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import * as React from "react";

// Mark columns that should draw a right-side vertical rule.
const columns = [
  { header: "ID", accessorKey: "id", meta: { vr: true } },
  { header: "Name", accessorKey: "name", meta: { vr: true } },
  { header: "Role", accessorKey: "role" }, // no right border → clean outer edge
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
      <h1>TanStack — Borders: Vertical Only</h1>

      {/* Only vertical rules; absolutely no horizontal borders or outer frame */}
      <style>{`
        .tbl table { width: 100%; border-collapse: separate; border-spacing: 0; }
        thead th {
          background: #f9fafb;
          text-align: left;
          padding: 10px 12px;
          border: none;             /* no horizontal line */
        }
        tbody td {
          padding: 10px 12px;
          border: none;             /* no horizontal line */
        }
        .vr { border-right: 1px solid #e5e7eb; } /* only vertical separators */
      `}</style>

      <div className="tbl">
        <table>
          <thead>
            {table.getHeaderGroups().map(hg => (
              <tr key={hg.id}>
                {hg.headers.map(h => {
                  const vr = h.column.columnDef.meta?.vr;
                  return (
                    <th key={h.id} className={vr ? "vr" : undefined}>
                      {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  const vr = cell.column.columnDef.meta?.vr;
                  return (
                    <td key={cell.id} className={vr ? "vr" : undefined}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
