// App.jsx — staggered fade-in on mount
// Each row fades & slides up with a slight delay using nth-child().

import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: r => r.id, width: "80px" },
  { name: "Name", selector: r => r.name, grow: 2 },
  { name: "Role", selector: r => r.role, grow: 2, wrap: true },
];

const data = [
  { id: 1, name: "Ellen Ripley", role: "Warrant Officer" },
  { id: 2, name: "Dwayne Hicks", role: "Corporal" },
  { id: 3, name: "Bishop", role: "Science Officer (Android)" },
  { id: 4, name: "Vasquez", role: "Smartgunner" },
  { id: 5, name: "Hudson", role: "Private" },
];

export default function App() {
  return (
    <div className="anim1" style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .anim1 .rdt_TableRow { opacity: 0; animation: fadeUp .35s ease forwards; }
        .anim1 .rdt_TableRow:nth-child(1) { animation-delay: .02s; }
        .anim1 .rdt_TableRow:nth-child(2) { animation-delay: .06s; }
        .anim1 .rdt_TableRow:nth-child(3) { animation-delay: .10s; }
        .anim1 .rdt_TableRow:nth-child(4) { animation-delay: .14s; }
        .anim1 .rdt_TableRow:nth-child(5) { animation-delay: .18s; }
      `}</style>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Animations v1 (Staggered Fade-in)</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
