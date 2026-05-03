// App.jsx — Fixed Row Height v3 (CSS override on RDT rows)
// Force a strict height with CSS (not only customStyles). Also clamp each cell to one line.
// Using !important ensures no internal styles can increase height.

import DataTable from "react-data-table-component";

const OneLine = ({ children }) => <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{children}</div>;

const columns = [
  { name: "ID", width: "72px", cell: r => <OneLine>{r.id}</OneLine> },
  { name: "Name", width: "260px", cell: r => <OneLine>{r.name}</OneLine> },
  { name: "Role", width: "280px", cell: r => <OneLine>{r.role}</OneLine> },
  { name: "Age", width: "90px", right: true, cell: r => <OneLine>{r.age}</OneLine> },
  { name: "Location", width: "320px", cell: r => <OneLine>{r.location}</OneLine> },
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
  return (
    <div className="fx3">
      <style>{`
        /* strict heights for header/body rows */
        .fx3 .rdt_TableHeadRow { height: 48px !important; }
        .fx3 .rdt_TableRow     { height: 48px !important; }
        /* remove vertical padding so height stays exact */
        .fx3 .rdt_TableCell, .fx3 .rdt_TableCol {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
      `}</style>
      <h1>RDT — Fixed Row Height v3 (CSS Override)</h1>
      <DataTable columns={columns} data={data} dense />
    </div>
  );
}
