// App.jsx — Responsive v3 (compact + expandable details on mobile)
// Strategy: on small screens show only key columns; reveal the rest via expandable rows.
// On desktop, show all columns and disable expanders.

import React from "react";
import DataTable from "react-data-table-component";

const ALL_COLS = [
  { id: "id", name: "ID", width: "80px", selector: r => r.id },
  { id: "name", name: "Name", selector: r => r.name, grow: 2 },
  { id: "role", name: "Role", selector: r => r.role, grow: 2, wrap: true },
  { id: "age", name: "Age", width: "90px", right: true, selector: r => r.age },
  { id: "loc", name: "Location", selector: r => r.location, wrap: true },
];

const data = [
  {
    id: 1,
    name: "Ellen Louise Ripley",
    role: "Warrant Officer — Specialist in interstellar cargo transport and survival against xenomorph threats. Known for her leadership and resilience.",
    age: 32,
    location: "LV-426 (Hadley's Hope Colony, Acheron)",
  },
  {
    id: 2,
    name: "Dwayne Hicks",
    role: "Corporal of the Colonial Marines — Experienced in tactical combat situations, adept with pulse rifles, close-quarter battle, and squad leadership under extreme duress.",
    age: 28,
    location: "USS Sulaco (United States Colonial Marine Spaceship, orbiting LV-426)",
  },
  {
    id: 3,
    name: "Bishop",
    role: "Science Officer (Android) — Advanced synthetic with programming to assist in biological research, spacecraft operations, and ethical dilemmas involving human safety. Capable of handling delicate scientific instruments with precision.",
    age: "—",
    location: "USS Sulaco, cryogenic stasis chambers and medical bay",
  },
  {
    id: 4,
    name: "Carter Burke",
    role: "Weyland-Yutani Corporate Representative — Focused on corporate profit at the expense of crew safety. Skilled in negotiation, manipulation, and bureaucratic survival tactics within the interstellar business empire.",
    age: 35,
    location: "Weyland-Yutani Headquarters, Earth; temporarily stationed aboard USS Sulaco",
  },
];

function useMedia(q) {
  const [m, setM] = React.useState(() => (typeof window !== "undefined" ? window.matchMedia(q).matches : false));
  React.useEffect(() => {
    const mm = window.matchMedia(q);
    const fn = e => setM(e.matches);
    mm.addEventListener?.("change", fn);
    setM(mm.matches);
    return () => mm.removeEventListener?.("change", fn);
  }, [q]);
  return m;
}

const Expand = ({ data }) => (
  <div style={{ padding: 12, background: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
    <div>
      <strong>Role:</strong> {data.role}
    </div>
    <div>
      <strong>Age:</strong> {data.age}
    </div>
    <div>
      <strong>Location:</strong> {data.location}
    </div>
  </div>
);

export default function App() {
  const mobile = useMedia("(max-width: 639px)");

  const columns = React.useMemo(() => {
    if (!mobile) return ALL_COLS;
    // On mobile show a minimal set; others via expandable content
    return ALL_COLS.map(c => ({ ...c, omit: !new Set(["id", "name"]).has(c.id) }));
  }, [mobile]);

  return (
    <div style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Responsive v3 (Expandable on Mobile)</h1>
      <DataTable columns={columns} data={data} expandableRows={mobile} expandableRowsComponent={Expand} dense={mobile} />
    </div>
  );
}
