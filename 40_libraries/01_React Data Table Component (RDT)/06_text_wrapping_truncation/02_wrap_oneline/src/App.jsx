// App.jsx — Truncate v1 (true one-line ellipsis)
// Fix: set column.style.minWidth = 0 so flex children can shrink,
// then render a child div with overflow:hidden; text-overflow:ellipsis; white-space:nowrap.

import React from "react";
import DataTable from "react-data-table-component";

const OneLine = ({ children }) => <div style={{ width: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{children}</div>;

const columns = [
  { name: "ID", width: "72px", style: { minWidth: 0 }, cell: r => <OneLine>{r.id}</OneLine> },
  { name: "Name", width: "280px", style: { minWidth: 0 }, cell: r => <OneLine>{r.name}</OneLine> },
  { name: "Role", width: "320px", style: { minWidth: 0 }, cell: r => <OneLine>{r.role}</OneLine> },
  { name: "Location", width: "340px", style: { minWidth: 0 }, cell: r => <OneLine>{r.location}</OneLine> },
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
  {
    id: 4,
    name: "Carter J. Burke — Weyland-Yutani liaison focused on asset recovery, risk externalization, and legal mitigation across jurisdictions.",
    role: "Company Rep overseeing procurement pipelines, project sign-offs, and liability containment under confidential directives.",
    location: "Weyland-Yutani corporate — special projects floor; trade compliance & legal mitigation desk.",
  },
];

const customStyles = {
  headRow: { style: { height: 48 } },
  rows: { style: { height: 44 } },
  cells: { style: { paddingTop: 0, paddingBottom: 0 } },
};

export default function App() {
  return (
    <div style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Truncate v1 (One-line)</h1>
      <DataTable columns={columns} data={data} dense customStyles={customStyles} />
    </div>
  );
}
