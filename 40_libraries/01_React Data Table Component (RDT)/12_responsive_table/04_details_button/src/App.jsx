// App.jsx — Responsive (mobile fewer cols + Details button modal)
// Another approach: on mobile we keep only {ID, Name, Details}, and show the rest
// in a small modal when the "Details" button is pressed. On desktop we show all columns
// and hide the Details button entirely (no expandable rows API needed).

import React from "react";
import DataTable from "react-data-table-component";

// --- data ---
const ALL_COLS = [
  { id: "id", name: "ID", width: "80px", selector: r => r.id },
  { id: "name", name: "Name", selector: r => r.name, grow: 2 },
  { id: "role", name: "Role", selector: r => r.role, wrap: true, grow: 2 },
  { id: "age", name: "Age", width: "90px", right: true, selector: r => r.age },
  { id: "loc", name: "Location", selector: r => r.location, wrap: true, grow: 1 },
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
    role: "Corporal of the Colonial Marines — Experienced in tactical combat; adept with pulse rifles, CQB, and squad leadership under extreme duress.",
    age: 28,
    location: "USS Sulaco (in orbit around LV-426)",
  },
  {
    id: 3,
    name: "Bishop",
    role: "Science Officer (Android) — Advanced synthetic assisting biological research and spacecraft ops; excels with delicate instruments.",
    age: "—",
    location: "USS Sulaco (med bay, cryo, ops core)",
  },
  {
    id: 4,
    name: "Carter Burke",
    role: "Weyland-Yutani Corporate Rep — Profit-first; skilled in negotiation, manipulation, and bureaucracy within interstellar commerce.",
    age: 35,
    location: "Weyland-Yutani HQ (Earth); temp aboard USS Sulaco",
  },
];

// --- hooks ---
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

// --- details modal ---
function DetailsModal({ openRow, onClose }) {
  if (!openRow) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="details-title"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        zIndex: 50,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: "min(560px, 92vw)",
          background: "white",
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          overflow: "hidden",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "center" }}>
          <strong id="details-title" style={{ fontSize: 16 }}>
            Details — {openRow.name}
          </strong>
          <button onClick={onClose} aria-label="Close" style={{ marginLeft: "auto" }}>
            ✕
          </button>
        </div>
        <div style={{ padding: 16, lineHeight: 1.5 }}>
          <div style={{ marginBottom: 8 }}>
            <strong>ID:</strong> {openRow.id}
          </div>
          <div style={{ marginBottom: 8 }}>
            <strong>Role:</strong> {openRow.role}
          </div>
          <div style={{ marginBottom: 8 }}>
            <strong>Age:</strong> {openRow.age}
          </div>
          <div>
            <strong>Location:</strong> {openRow.location}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const mobile = useMedia("(max-width: 639px)");
  const [openRow, setOpenRow] = React.useState(null);

  // "Details" action column (only used on mobile)
  const detailsCol = React.useMemo(
    () => ({
      id: "act",
      name: "Details",
      width: "110px",
      cell: row => (
        <button onClick={() => setOpenRow(row)} aria-label={`Show details for ${row.name}`}>
          View
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }),
    []
  );

  const columns = React.useMemo(() => {
    if (!mobile) {
      // Desktop: show all columns; no details button column.
      return ALL_COLS;
    }
    // Mobile: show fewer columns + a "Details" button column.
    return [
      { ...ALL_COLS[0] }, // ID
      { ...ALL_COLS[1] }, // Name
      detailsCol, // Action to open modal with hidden fields
    ];
  }, [mobile, detailsCol]);

  // Close modal on Escape
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") setOpenRow(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Responsive (Mobile fewer cols + Details button modal)</h1>

      <DataTable columns={columns} data={data} dense={mobile} />

      <DetailsModal openRow={openRow} onClose={() => setOpenRow(null)} />
    </div>
  );
}
