// App.jsx — Responsive v1 (overflow scroll on small screens)
// Strategy: give columns fixed px widths and set table width to 'max-content' so it
// sizes to the sum of columns. Wrap in overflow-x:auto so phones can scroll sideways.

import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", width: "80px", selector: r => r.id },
  { name: "Name", width: "220px", selector: r => r.name, wrap: true },
  { name: "Role", width: "260px", selector: r => r.role, wrap: true },
  { name: "Age", width: "90px", right: true, selector: r => r.age },
  { name: "Location", width: "240px", selector: r => r.location, wrap: true },
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

const customStyles = {
  table: { style: { width: "max-content", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden" } },
  headRow: { style: { background: "#f9fafb", borderBottom: "1px solid #e5e7eb" } },
  rows: { style: { borderBottom: "1px solid #f1f5f9" } },
};

export default function App() {
  return (
    <div style={{ padding: 16, overflowX: "auto", fontFamily: "system-ui,sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Responsive v1 (Horizontal Scroll)</h1>
      <DataTable columns={columns} data={data} customStyles={customStyles} dense />
    </div>
  );
}
