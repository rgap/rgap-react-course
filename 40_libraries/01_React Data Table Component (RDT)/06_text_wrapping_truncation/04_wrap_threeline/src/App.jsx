// App.jsx — Truncate v3 (true three-line clamp)
// Same minWidth=0 fix; clamp to exactly 3 lines with ellipsis.

import React from "react";
import DataTable from "react-data-table-component";

const ThreeLine = ({ children }) => <div className="clamp3">{children}</div>;

const columns = [
  { name: "ID", width: "72px", style: { minWidth: 0 }, cell: r => <ThreeLine>{r.id}</ThreeLine> },
  { name: "Name", width: "280px", style: { minWidth: 0 }, cell: r => <ThreeLine>{r.name}</ThreeLine> },
  { name: "Role", width: "320px", style: { minWidth: 0 }, cell: r => <ThreeLine>{r.role}</ThreeLine> },
  { name: "Location", width: "340px", style: { minWidth: 0 }, cell: r => <ThreeLine>{r.location}</ThreeLine> },
];

const data = [
  {
    id: 1,
    name: "Ellen Louise Ripley — USCSS Nostromo warrant officer noted for decisive, high-risk containment protocols and strict quarantine enforcement.",
    role: "Warrant Officer handling shipboard ops, cargo quarantine compliance, evidence preservation, and emergency decision-making per Special Orders.",
    location: "Hadley’s Hope, Acheron (LV-426) — atmospheric processor perimeter; temporary admin sector near main power relay.",
  },
  {
    id: 2,
    name: "Dwayne Hicks — Colonial Marine NCO; calm, methodical command presence; de facto squad lead during LV-426 incident.",
    role: "Perimeter defense, motion-tracker sweeps, evac logistics, tactical fallback plans, and breach management under fire.",
    location: "USS Sulaco — UD-4L Cheyenne dropship bay; forward armory staging for rapid redeploy.",
  },
  {
    id: 3,
    name: "Bishop — Hyperdyne Systems synthetic; precision operations, surgical dexterity, probabilistic navigation, EVA pipeline interface expert.",
    role: "Android Science Officer for analytics, medical support, auto-nav guidance, and high-risk manual overrides.",
    location: "Sulaco ops core — autonav interfaces; auxiliary medbay; cargo subsystems and diagnostics.",
  },
];

const customStyles = {
  headRow: { style: { height: 48 } },
  rows: { style: { height: 82 } }, // ~3 lines tall
  cells: { style: { paddingTop: 6, paddingBottom: 6 } },
};

export default function App() {
  return (
    <div style={{ padding: 16, overflowX: "auto", fontFamily: "system-ui, sans-serif" }} className="threeline">
      <style>{`
        .threeline .clamp3 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      `}</style>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Truncate v3 (Three-line)</h1>
      <DataTable columns={columns} data={data} dense customStyles={customStyles} />
    </div>
  );
}
