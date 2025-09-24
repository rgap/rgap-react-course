// App.jsx — TanStack Table Simple v1
// Minimal equivalent of your RDT "01_simple": basic columns + data.
// No pagination/filters yet—this is just the bare table rendering.

import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

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
  const table = useReactTable({
    data,
    columns,
    // getCoreRowModel gives us the basic row/column model (no sorting, filtering, etc.)
    // it's not required, but it's a good practice to include it since it:
    // 1) Makes the data pipeline explicit (base layer other features build on).
    // 2) Avoids surprises when you add sorting/filtering/pagination later.
    // 3) Matches the docs/examples and upgrades more predictably.
    // 4) Enables memoized row modeling for better perf on larger tables.
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <style>{`
        table {
          border-collapse: collapse;
          border: 1px solid black;
        }
        table th,
        table td {
          border: 1px solid black;
        }.
      `}</style>

      <h1>TanStack — Simple v1</h1>

      <div>
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
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
