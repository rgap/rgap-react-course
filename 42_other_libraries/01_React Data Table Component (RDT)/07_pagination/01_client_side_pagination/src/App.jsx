// App.jsx — Pagination v1 (basic client-side)
// Just pass `pagination`. RDT paginates the in-memory array.

import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: r => r.id, width: "80px" },
  { name: "Name", selector: r => r.name },
];

const data = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  name: `Row ${i + 1}`,
}));

export default function App() {
  return (
    <div style={{ padding: 16, fontFamily: "system-ui" }}>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Pagination v1</h1>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={5} // small page for demo
        paginationRowsPerPageOptions={[5, 10, 15]}
      />
    </div>
  );
}
