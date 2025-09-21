// App.jsx — TanStack Table: fixed widths + simple borders (super minimal)
import * as React from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

// Fixed px widths per column; right-align Age
const columns = [
  { header: "ID", accessorKey: "id", meta: { w: 72 } },
  { header: "Name", accessorKey: "name", meta: { w: 260 } },
  { header: "Role", accessorKey: "role", meta: { w: 300 } },
  { header: "Age", accessorKey: "age", meta: { w: 90, right: true } },
  { header: "Location", accessorKey: "location", meta: { w: 340 } },
];

const data = [
  {
    id: 1,
    name:
      "Ellen Louise Ripley — USCSS Nostromo warrant officer noted for decisive, high-risk containment protocols and strict quarantine enforcement.",
    role:
      "Warrant Officer handling shipboard ops, cargo quarantine compliance, evidence preservation, and emergency decision-making per Special Orders.",
    age: 32,
    location:
      "Hadley’s Hope, Acheron (LV-426) — atmospheric processor perimeter; temporary admin sector near main power relay.",
  },
  {
    id: 2,
    name:
      "Dwayne Hicks — Colonial Marine NCO; calm, methodical command presence; de facto squad lead during LV-426 incident.",
    role:
      "Corporal coordinating perimeter defense, motion-tracker sweeps, evac logistics, and tactical fallback plans under fire.",
    age: 28,
    location: "USS Sulaco — UD-4L Cheyenne dropship bay; forward armory staging for rapid redeploy.",
  },
  {
    id: 3,
    name:
      "Bishop — Hyperdyne Systems synthetic; precision operations, surgical dexterity, probabilistic navigation, EVA pipeline interface expert.",
    role:
      "Android Science Officer for analytics, medical support, auto-nav guidance, and high-risk manual overrides.",
    age: "—",
    location: "Sulaco ops core — autonav interfaces; auxiliary medbay; cargo subsystems and diagnostics.",
  },
  {
    id: 4,
    name:
      "Carter J. Burke — Weyland-Yutani liaison focused on asset recovery, risk externalization, and legal mitigation across jurisdictions.",
    role:
      "Company Rep overseeing procurement pipelines, project sign-offs, and liability containment under confidential directives.",
    age: 35,
    location: "Weyland-Yutani corporate — special projects floor; trade compliance & legal mitigation desk.",
  },
];

export default function App() {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  // Apply fixed width + optional right align from column meta
  const colStyle = (col) => {
    const w = col.columnDef.meta?.w;
    const right = col.columnDef.meta?.right;
    return {
      width: w,
      minWidth: w,
      maxWidth: w,
      textAlign: right ? "right" : "left",
      whiteSpace: "normal",
      wordBreak: "break-word",
      verticalAlign: "top",
    };
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 16 }}>
      {/* width:max-content hugs sum of fixed widths; outer div scrolls on small screens */}
      <style>{`
        .wrap { overflow-x: auto; }
        .tbl  { width: max-content; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; }
        table { border-collapse: separate; border-spacing: 0; }
        thead th { background:#f9fafb; padding:10px 12px; border-bottom:1px solid #e5e7eb; border-right:1px solid #e5e7eb; text-align:left; }
        tbody td { padding:10px 12px; border-bottom:1px solid #e5e7eb; border-right:1px solid #e5e7eb; }
        thead th:last-child, tbody td:last-child { border-right:none; }
        tbody tr:last-child td { border-bottom:none; }
      `}</style>

      <div className="wrap">
        <div className="tbl">
          <table>
            <thead>
              {table.getHeaderGroups().map((hg) => (
                <tr key={hg.id}>
                  {hg.headers.map((h) => (
                    <th key={h.id} style={colStyle(h.column)}>
                      {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} style={colStyle(cell.column)}>
                      {flexRender(cell.column.columnDef.cell ?? ((ctx) => ctx.getValue()), cell.getContext())}
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
