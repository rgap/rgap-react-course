// App.jsx — React client with real API calls
import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: r => r.id, width: "80px" },
  { name: "Name", selector: r => r.name },
  { name: "Note", selector: r => r.note, wrap: true },
];

export default function App() {
  const [rows, setRows] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const [total, setTotal] = React.useState(0);

  const fetchPage = (p = page, pp = perPage) => {
    fetch(`http://localhost:4000/items?page=${p}&perPage=${pp}`)
      .then(res => res.json())
      .then(data => {
        setRows(data.rows);
        setTotal(data.total);
      });
  };

  React.useEffect(() => {
    fetchPage(1, 10);
  }, []);

  const handlePageChange = p => {
    setPage(p);
    fetchPage(p, perPage);
  };

  const handlePerPageChange = (newPerPage, newPage) => {
    setPerPage(newPerPage);
    setPage(newPage);
    fetchPage(newPage, newPerPage);
  };

  return (
    <div style={{ padding: 16, fontFamily: "system-ui" }}>
      <h1 style={{ marginBottom: 12 }}>RDT — Real Fake API</h1>
      <DataTable
        columns={columns}
        data={rows}
        pagination
        paginationServer
        paginationTotalRows={total}
        paginationPerPage={perPage}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handlePerPageChange}
      />
    </div>
  );
}
