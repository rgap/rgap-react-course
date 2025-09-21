// App.jsx — TanStack Table Simple v1
// Minimal equivalent of your RDT "01_simple": basic columns + data.
// No pagination/filters yet—this is just the bare table rendering.

import * as React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const data = [
  { id: 1, name: "Ellen Ripley", role: "Warrant Officer" },
  { id: 2, name: "Dwayne Hicks", role: "Corporal" },
  { id: 3, name: "Bishop", role: "Science Officer (Android)" },
  { id: 4, name: "Carter Burke", role: "Company Rep" },
];

const columns = [
  columnHelper.accessor("id", {
    header: () => "ID",
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("role", {
    header: () => "Role",
    cell: info => info.getValue(),
  }),
];

export default function App() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <style>{`
        .tbl { width: 100%; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; }
        .tbl table { width: 100%; border-collapse: separate; border-spacing: 0; }
        .tbl thead th { text-align: left; background: #f9fafb; border-bottom: 1px solid #e5e7eb; padding: 10px 12px; font-weight: 600; }
        .tbl tbody td { border-bottom: 1px solid #f1f5f9; padding: 10px 12px; vertical-align: top; }
        .tbl tbody tr:last-child td { border-bottom: none; }
        .col-id { width: 88px; }
      `}</style>

      <h1 style={{ margin: 0, marginBottom: 12 }}>TanStack — Simple v1</h1>

      <div className="tbl">
        <table>
          <thead>
            {table.getHeaderGroups().map(hg => (
              <tr key={hg.id}>
                {hg.headers.map(h => (
                  <th key={h.id} className={h.column.id === "id" ? "col-id" : undefined}>
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
                  <td key={cell.id} className={cell.column.id === "id" ? "col-id" : undefined}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
