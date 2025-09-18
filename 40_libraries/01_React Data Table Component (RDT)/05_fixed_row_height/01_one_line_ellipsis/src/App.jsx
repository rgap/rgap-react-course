// App.jsx — Fixed Row Height v1 (one-line ellipsis)
// Fixed row height with clipped overflow. Each cell renders a single line with "…".
// Note: we use `height` (not minHeight) to keep all rows exactly the same size.

import DataTable from "react-data-table-component";

const OneLine = ({ children, max }) => (
  <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: max }}>{children}</div>
);

const columns = [
  { name: "ID", selector: r => r.id, width: "72px", cell: r => <OneLine max={60}>{r.id}</OneLine> },
  { name: "Name", width: "260px", cell: r => <OneLine max={240}>{r.name}</OneLine> },
  { name: "Role", width: "280px", cell: r => <OneLine max={260}>{r.role}</OneLine> },
  { name: "Age", width: "90px", right: true, cell: r => <OneLine max={60}>{r.age}</OneLine> },
  { name: "Location", width: "320px", cell: r => <OneLine max={300}>{r.location}</OneLine> },
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

const customStyles = {
  table: { style: { width: "max-content" } }, // prevent stretch (optional here, keeps widths honest)
  headRow: { style: { height: "48px" } }, // fixed header height
  rows: { style: { height: "48px" } }, // <-- fixed row height
  cells: { style: { paddingTop: 0, paddingBottom: 0 } }, // remove vertical padding so height is strict
};

export default function App() {
  return (
    <div>
      <h1>RDT — Fixed Row Height v1 (One-line Ellipsis)</h1>
      <DataTable columns={columns} data={data} customStyles={customStyles} dense />
    </div>
  );
}
