// App.jsx — Wrap v1 (built-in `wrap`)
// Let long text flow to multiple lines in selected columns.

import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: r => r.id, width: "72px" },
  { name: "Name", selector: r => r.name, wrap: true },
  { name: "Role", selector: r => r.role, wrap: false },
  { name: "Location", selector: r => r.location, wrap: true },
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

export default function App() {
  return (
    <div style={{ padding: 16, fontFamily: "system-ui" }}>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Wrap v1</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
