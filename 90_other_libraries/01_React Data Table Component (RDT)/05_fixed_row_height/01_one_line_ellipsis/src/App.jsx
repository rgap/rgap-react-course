// App.jsx — TanStack Table: Fixed Row Height v1 (one-line ellipsis)
// Keep every row exactly 48px tall; clip overflow with "…"; per-column fixed widths.

import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import * as React from "react";

// Small helper to clamp to one line with ellipsis
const OneLine = ({ children, max }) => (
  <span
    style={{
      display: "block",
      height: 48, // strict row box height
      lineHeight: "48px", // vertical centering for a single line
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: max, // inner max width so ellipsis appears before cell edge
    }}
    title={String(children)}
  >
    {children}
  </span>
);

// Fixed px widths and per-cell max widths (to show ellipsis sooner)
const columns = [
  { header: "ID", accessorKey: "id", meta: { w: 72, max: 60 } },
  { header: "Name", accessorKey: "name", meta: { w: 260, max: 240 } },
  { header: "Role", accessorKey: "role", meta: { w: 280, max: 260 } },
  { header: "Age", accessorKey: "age", meta: { w: 90, max: 60, right: true } },
  { header: "Location", accessorKey: "location", meta: { w: 320, max: 300 } },
];

const data = [
  {
    id: 1,
    name: "Ellen Louise Ripley — USCSS Nostromo warrant officer noted for decisive, high-risk containment protocols and strict quarantine enforcement.",
    role: "Warrant Officer handling shipboard ops, cargo quarantine compliance, evidence preservation, and emergency decision-making per Special Orders.",
    age: 32,
    location: "Hadley’s Hope, Acheron (LV-426) — atmospheric processor perimeter; temporary admin sector near main power relay.",
  },
  {
    id: 2,
    name: "Dwayne Hicks — Colonial Marine NCO; calm, methodical command presence; de facto squad lead during LV-426 incident.",
    role: "Corporal coordinating perimeter defense, motion-tracker sweeps, evac logistics, and tactical fallback plans under fire.",
    age: 28,
    location: "USS Sulaco — UD-4L Cheyenne dropship bay; forward armory staging for rapid redeploy.",
  },
  {
    id: 3,
    name: "Bishop — Hyperdyne Systems synthetic; precision operations, surgical dexterity, probabilistic navigation, EVA pipeline interface expert.",
    role: "Android Science Officer for analytics, medical support, auto-nav guidance, and high-risk manual overrides.",
    age: "—",
    location: "Sulaco ops core — autonav interfaces; auxiliary medbay; cargo subsystems and diagnostics.",
  },
  {
    id: 4,
    name: "Carter J. Burke — Weyland-Yutani liaison focused on asset recovery, risk externalization, and legal mitigation across jurisdictions.",
    role: "Company Rep overseeing procurement pipelines, project sign-offs, and liability containment under confidential directives.",
    age: 35,
    location: "Weyland-Yutani corporate — special projects floor; trade compliance & legal mitigation desk.",
  },
];

export default function App() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // Map TanStack cells → our OneLine wrapper so every cell truncates to one line
    columns: columns.map(col => ({
      ...col,
      cell: info => <OneLine max={info.column.columnDef.meta?.max}>{info.getValue()}</OneLine>,
    })),
  });

  // Apply fixed px width + alignment from column meta
  const cellStyle = col => {
    const w = col.columnDef.meta?.w;
    const right = col.columnDef.meta?.right;
    return {
      width: w,
      minWidth: w,
      maxWidth: w,
      boxSizing: "border-box",
      textAlign: right ? "right" : "left",
      padding: "0 12px", // no vertical padding → strict 48px rows
      borderBottom: "1px solid #f1f5f9",
      borderRight: "1px solid #e5e7eb",
      verticalAlign: "top",
      background: undefined,
      fontWeight: undefined,
    };
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 16 }}>
      <h1>TanStack — Fixed Row Height v1 (One-line Ellipsis)</h1>

      <style>{`
        .wrap { overflow-x: auto; }
        .tbl  { width: max-content; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; }
        table { border-collapse: separate; border-spacing: 0; table-layout: fixed; } /* respect px widths */
        thead th {
          height: 48px; line-height: 48px;
          background:#f9fafb; border-bottom:1px solid #e5e7eb; padding:0 12px; text-align:left;
          border-right:1px solid #e5e7eb;
        }
        tbody td { height: 48px; } /* strict row height */
        thead th:last-child, tbody td:last-child { border-right: none; }
        tbody tr:last-child td { border-bottom: none; }
      `}</style>

      <div className="wrap">
        <div className="tbl">
          <table>
            <thead>
              {table.getHeaderGroups().map(hg => (
                <tr key={hg.id}>
                  {hg.headers.map(h => (
                    <th key={h.id} style={cellStyle(h.column)}>
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
                    <td key={cell.id} style={cellStyle(cell.column)}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
