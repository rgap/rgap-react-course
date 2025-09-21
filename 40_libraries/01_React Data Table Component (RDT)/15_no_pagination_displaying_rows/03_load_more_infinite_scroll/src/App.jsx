// App.jsx — Infinite Scroll (ultra-simple)

import React from "react";
import DataTable from "react-data-table-component";

const ALL = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Person ${i + 1}`,
  role: ["Analyst", "Technician", "Officer", "Pilot"][i % 4],
}));

const columns = [
  { name: "ID", selector: r => r.id, width: "80px", right: true },
  { name: "Name", selector: r => r.name, grow: 2 },
  { name: "Role", selector: r => r.role, grow: 1 },
];

export default function App() {
  const STEP = 10; // rows per load
  const DELAY_MS = 3000; // slower append for smoother feel

  const [count, setCount] = React.useState(35); // start very small
  const [loading, setLoading] = React.useState(false);

  const sentinelRef = React.useRef(null);

  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      entries => {
        const hitBottom = entries[0].isIntersecting;
        const moreLeft = count < ALL.length;
        if (hitBottom && moreLeft && !loading) {
          setLoading(true);
          setTimeout(() => {
            setCount(c => Math.min(c + STEP, ALL.length));
            setLoading(false);
          }, DELAY_MS);
        }
      },
      { root: null, rootMargin: "300px 0px", threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [count, loading]);

  const rows = ALL.slice(0, count);
  const done = count >= ALL.length;

  return (
    <div style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 10 }}>RDT — Simple Infinite Scroll</h1>
      {/* Slight dim while "loading" for a softer feel */}
      <div style={{ opacity: loading ? 0.85 : 1, transition: "opacity 200ms" }}>
        <DataTable columns={columns} data={rows} dense />
      </div>
      <div style={{ textAlign: "center", color: "#64748b", fontSize: 13, padding: 10 }}>
        {done ? "End of list" : loading ? "Loading…" : "Scroll to load more…"}
      </div>
      {!done && <div ref={sentinelRef} style={{ height: 1 }} />} {/* sentinel */}
    </div>
  );
}
