// App.jsx — Basic table using TanStack Table (React)

// Core TanStack Table APIs to build a table instance and render cells/headers
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import * as React from "react";

// -----------------------------
// Define the table structure
// -----------------------------
// `columns` describes the headers and which field each column reads from.
// `accessorKey` tells TanStack which property from each row to display.
const columns = [
  { header: "Title", accessorKey: "title" },
  { header: "Year", accessorKey: "year" },
];

// -----------------------------
// Provide some sample data
// -----------------------------
const data = [
  { id: 1, title: "Conan the Barbarian", year: 1982 },
  { id: 2, title: "The Terminator", year: 1984 },
  { id: 3, title: "Predator", year: 1987 },
];

// -----------------------------
// App component renders the table
// -----------------------------
// TanStack Table gives us a "table instance" (via `useReactTable`) and
// we map its header groups and rows into a plain HTML <table>.
export default function App() {
  const table = useReactTable({
    data,
    columns,
    // getCoreRowModel gives us the basic row/column model (no sorting, filtering, etc.)
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <h2>01 — Basic (TanStack)</h2>

      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {/* flexRender safely renders a header/cell whether it's text or a component */}
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
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
                  {/* flexRender for cells mirrors header rendering */}
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
