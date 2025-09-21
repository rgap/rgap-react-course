// App.jsx — Server global search + server pagination
import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: r => r.id, width: "80px" },
  { name: "Name", selector: r => r.name, grow: 2 },
  { name: "Note", selector: r => r.note, wrap: true, grow: 3 },
];

export default function App() {
  const [q, setQ] = React.useState("");
  const [rows, setRows] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [page, setPage] = React.useState(1);       // 1-based
  const [perPage, setPerPage] = React.useState(10);
  const [loading, setLoading] = React.useState(false);

  // Fetch API
  const fetchData = React.useCallback((signal, params) => {
    const { page, perPage, q } = params;
    const url = new URL("http://localhost:4000/items");
    url.searchParams.set("page", page);
    url.searchParams.set("perPage", perPage);
    if (q) url.searchParams.set("q", q);

    return fetch(url, { signal })
      .then(r => r.json())
      .then(({ rows, total }) => {
        setRows(rows);
        setTotal(total);
      });
  }, []);

  // Debounce only the search term; page/perPage changes fetch immediately.
  React.useEffect(() => {
    const controller = new AbortController();
    const doFetch = () => {
      setLoading(true);
      fetchData(controller.signal, { page, perPage, q })
        .catch(() => {})
        .finally(() => setLoading(false));
    };

    let t;
    if (q.trim()) {
      t = setTimeout(doFetch, 250); // debounce searching
    } else {
      doFetch(); // no debounce when q is empty
    }

    return () => {
      controller.abort();
      if (t) clearTimeout(t);
    };
  }, [q, page, perPage, fetchData]);

  const handleChangePage = (p) => {
    setPage(p); // triggers fetch
  };

  const handleChangeRowsPerPage = (newPerPage, newPage) => {
    setPerPage(newPerPage);
    setPage(newPage); // RDT suggests passing the page it thinks we’re on
  };

  // When typing, reset to page 1 so the user sees the first matches
  const onSearchChange = (e) => {
    setQ(e.target.value);
    setPage(1);
  };

  const from = total === 0 ? 0 : (page - 1) * perPage + 1;
  const to = Math.min(page * perPage, total);

  const SearchBox = (
    <input
      placeholder="Search by ID, Name or Note…"
      value={q}
      onChange={onSearchChange}
      style={{
        width: 300,
        padding: "6px 10px",
        borderRadius: 8,
        border: "1px solid #e5e7eb",
      }}
    />
  );

  return (
    <div style={{ padding: 16, fontFamily: "system-ui,sans-serif" }}>
      <h1 style={{ margin: 0, marginBottom: 8 }}>RDT — Server Search + Server Pagination</h1>
      <div style={{ marginBottom: 8, color: "#6b7280", fontSize: 14 }}>
        {loading ? "Loading…" : `Showing ${from}-${to} of ${total}`}
      </div>
      <DataTable
        columns={columns}
        data={rows}
        subHeader
        subHeaderComponent={SearchBox}
        pagination
        paginationServer
        paginationTotalRows={total}
        paginationPerPage={perPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        progressPending={loading}
        highlightOnHover
        dense
      />
    </div>
  );
}
