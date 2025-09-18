// App.jsx — Fixed Row Height v2 (two-line clamp)
// Rows have a strict height. Inside each cell we clamp content to 2 lines (CSS line-clamp).
// This preserves uniform height while showing a bit more text than a single line.

import DataTable from "react-data-table-component";

const TwoLine = ({ children }) => <div className="clamp2">{children}</div>;

const columns = [
  { name: "ID", width: "72px", cell: r => <TwoLine>{r.id}</TwoLine> },
  { name: "Name", width: "260px", cell: r => <TwoLine>{r.name}</TwoLine> },
  { name: "Role", width: "280px", cell: r => <TwoLine>{r.role}</TwoLine> },
  { name: "Age", width: "90px", right: true, cell: r => <TwoLine>{r.age}</TwoLine> },
  { name: "Location", width: "320px", cell: r => <TwoLine>{r.location}</TwoLine> },
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
  table: { style: { width: "max-content" } },
  headRow: { style: { height: "50px" } },
  rows: { style: { height: "64px" } }, // exact height to fit ~2 lines + padding
  cells: { style: { paddingTop: 6, paddingBottom: 6 } },
};

export default function App() {
  return (
    <div className="fx2">
      <style>{`
        .fx2 .clamp2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      <h1>RDT — Fixed Row Height v2 (Two-line Clamp)</h1>
      <DataTable columns={columns} data={data} customStyles={customStyles} />
    </div>
  );
}
