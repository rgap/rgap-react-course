// App.jsx — Pagination v2 (custom labels/options)
// Tweak the footer text and available page sizes.

import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: r => r.id, width: "80px" },
  { name: "Name", selector: r => r.name },
  { name: "Role", selector: r => r.role },
];

const data = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  name: `Person ${i + 1}`,
  role: i % 3 === 0 ? "Operator" : i % 3 === 1 ? "Supervisor" : "Analyst",
}));

export default function App() {
  return (
    <div style={{ padding: 16, fontFamily: "system-ui" }}>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Pagination v2</h1>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[5, 10, 20, 50]}
        paginationComponentOptions={{
          rowsPerPageText: "Filas",
          rangeSeparatorText: "de",
          selectAllRowsItem: false,
          noRowsPerPage: false, // keep the selector visible
        }}
      />
    </div>
  );
}
