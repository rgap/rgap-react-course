// App.jsx — Fixed widths + borders (ultra-minimal)
// Trick used:
// Set every column to a fixed px width and force the table’s root width to 'max-content'
// so it hugs the sum of those widths; wrap it in an overflow-x:auto container.
// customStyles.table.style.width = 'max-content' so RDT doesn't distribute free spac

import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: r => r.id, width: "72px" },
  { name: "Name", selector: r => r.name, width: "260px", wrap: true },
  { name: "Role", selector: r => r.role, width: "300px", wrap: true },
  { name: "Age", selector: r => r.age, width: "90px", right: true },
  { name: "Location", selector: r => r.location, width: "340px", wrap: true },
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
  table: {
    style: {
      border: "1px solid #e5e7eb",
      borderRadius: 10,
      overflow: "hidden",
      width: "max-content", // use sum of column widths; prevents stretch
    },
  },
  headRow: { style: { borderBottom: "1px solid #e5e7eb", background: "#f9fafb" } },
  rows: { style: { borderBottom: "1px solid #e5e7eb" } },
  headCells: { style: { borderRight: "1px solid #e5e7eb" } },
  cells: { style: { borderRight: "1px solid #e5e7eb" } },
};

export default function App() {
  return (
    <div>
      <style>{`
        .rdt_TableCol:last-child { border-right: none !important; }
        .rdt_TableCell:last-child { border-right: none !important; }
      `}</style>
      <DataTable columns={columns} data={data} customStyles={customStyles} dense />
    </div>
  );
}
