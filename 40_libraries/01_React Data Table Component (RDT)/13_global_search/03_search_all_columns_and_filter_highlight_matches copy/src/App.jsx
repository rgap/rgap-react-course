// App.jsx — Global Search (true server-side style with debounce + loading)
// What this shows:
// - A search box in the subHeader
// - Debounced keystrokes (300ms)
// - "Server" fetch that returns ONLY the current page slice (simulated here)
// - paginationServer + sortServer + progressPending (loading)
//
// Replace `fakeApi` with your real endpoint. The UI code stays the same.

import React from "react";
import DataTable from "react-data-table-component";

// ----- Columns -----
const columns = [
  { id: "id", name: "ID", selector: r => r.id, sortable: true, width: "88px", right: true },
  { id: "name", name: "Name", selector: r => r.name, sortable: true, grow: 2 },
  { id: "role", name: "Role", selector: r => r.role, sortable: true, wrap: true, grow: 2 },
  { id: "location", name: "Location", selector: r => r.location, sortable: true, wrap: true, grow: 1 },
];

// ----- Demo dataset (pretend this lives on the server) -----
const ALL = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: ["Ellen Ripley", "Dwayne Hicks", "Bishop", "Vasquez", "Hudson", "Gorman"][i % 6] + ` ${i + 1}`,
  role: ["Warrant Officer", "Corporal", "Science Officer", "Smartgunner"][i % 4],
  location: i % 2 ? "USS Sulaco" : "LV-426",
}));

// ----- Simulated API (server) -----
// Supports q (query), sort (column id + dir), page (1-based), perPage
function fakeApi({ q, sortId, dir, page, perPage, signal }) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => {
      // 1) search
      const qnorm = q.trim().toLowerCase();
      let rows = !qnorm ? ALL : ALL.filter(r => [r.name, r.role, r.location].some(v => String(v).toLowerCase().includes(qnorm)));

      const total = rows.length;

      // 2) sort (server)
      if (sortId) {
        const getter = sortId === "id" ? r => r.id : sortId === "name" ? r => r.name : sortId === "role" ? r => r.role : r => r.location;

        rows = [...rows].sort((a, b) => {
          const av = getter(a);
          const bv = getter(b);
          const cmp = typeof av === "number" && typeof bv === "number" ? av - bv : String(av).localeCompare(String(bv));
          return dir === "asc" ? cmp : -cmp;
        });
      }

      // 3) page slice (server)
      const start = (page - 1) * perPage;
      const data = rows.slice(start, start + perPage);

      resolve({ data, total });
    }, 350); // simulate network time

    signal?.addEventListener("abort", () => {
      clearTimeout(t);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}

// ----- Small debounce hook -----
function useDebounced(value, ms = 300) {
  const [v, setV] = React.useState(value);
  React.useEffect(() => {
    const t = setTimeout(() => setV(value), ms);
    return () => clearTimeout(t);
  }, [value, ms]);
  return v;
}

export default function App() {
  // query/sort/pagination UI state
  const [rawQ, setRawQ] = React.useState("");
  const q = useDebounced(rawQ, 300);

  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);

  const [sort, setSort] = React.useState({ id: "id", dir: "asc" });

  // fetched data
  const [rows, setRows] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const abortRef = React.useRef(null);

  // central fetcher — call whenever q/sort/page/perPage change
  const fetchRows = React.useCallback(async () => {
    abortRef.current?.abort?.();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    try {
      const res = await fakeApi({
        q,
        sortId: sort.id,
        dir: sort.dir,
        page,
        perPage,
        signal: controller.signal,
      });
      setRows(res.data);
      setTotal(res.total);
    } catch (e) {
      if (e.name !== "AbortError") console.error(e);
    } finally {
      setLoading(false);
    }
  }, [q, sort, page, perPage]);

  // trigger fetch on dependencies change
  React.useEffect(() => {
    fetchRows();
  }, [fetchRows]);

  // Search box UI (in subHeader)
  const SearchBox = (
    <input
      placeholder="Search (server-side)…"
      value={rawQ}
      onChange={e => {
        setRawQ(e.target.value);
        setPage(1);
      }} // reset to page 1 on new query
      style={{ width: 280, padding: "6px 10px", borderRadius: 8, border: "1px solid #e5e7eb" }}
    />
  );

  return (
    <div style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 10 }}>RDT — Server-side Global Search</h1>

      <DataTable
        columns={columns}
        data={rows}
        subHeader
        subHeaderComponent={SearchBox}
        progressPending={loading}
        // server-style pagination
        pagination
        paginationServer
        paginationTotalRows={total}
        paginationPerPage={perPage}
        onChangePage={setPage}
        onChangeRowsPerPage={(n, p) => {
          setPerPage(n);
          setPage(p);
        }}
        // server-style sorting
        sortServer
        defaultSortFieldId="id"
        defaultSortAsc
        onSort={(column, dir) => {
          setSort({ id: column.id, dir });
          setPage(1);
        }}
      />
    </div>
  );
}
