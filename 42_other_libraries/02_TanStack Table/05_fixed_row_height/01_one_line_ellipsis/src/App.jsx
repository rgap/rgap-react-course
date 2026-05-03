// App.jsx — TanStack Table: Fixed Row Height (exact 48.00px) — no inner div/span

import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

const columns = [
  { header: "ID", accessorKey: "id" },
  { header: "Name", accessorKey: "name" },
  { header: "Role", accessorKey: "role" },
  { header: "Age", accessorKey: "age" },
  { header: "Location", accessorKey: "location" },
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
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div>
      {/* width:max-content hugs sum of fixed widths; outer div scrolls on small screens */}
      <style>{`
      table {
        border-collapse: collapse;
        width: 1062px;
        table-layout: fixed;
      }

      th,
      td {
        border: 1px solid #444;
        overflow-wrap: anywhere;

        padding: 0;                 /* remove default padding */
        height: 40px;               /* content-box target */
        overflow: hidden;           /* hide overflow beyond the cell box */
        white-space: nowrap;        /* force a single line */
        text-overflow: ellipsis;    /* show “…” when clipped */
      }
   
      table col.col-1 {
        width: 72px;
      }
      table col.col-2 {
        width: 260px;
      }
      table col.col-3 {
        width: 300px;
      }
      table col.col-4 {
        width: 90px;
      }
      table col.col-5 {
        width: 340px;
      }
      `}</style>

      <div>
        <div>
          <table>
            <colgroup>
              <col className="col-1" />
              <col className="col-2" />
              <col className="col-3" />
              <col className="col-4" />
              <col className="col-5" />
            </colgroup>
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
                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell ?? (ctx => ctx.getValue()), cell.getContext())}</td>
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
