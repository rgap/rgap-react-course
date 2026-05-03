// App.jsx — Pagination v4 (minimal footer)
// Hide the rows-per-page dropdown; only show the range and nav buttons.

import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: r => r.id, width: "80px" },
  { name: "Name", selector: r => r.name },
];

const data = Array.from({ length: 37 }, (_, i) => ({
  id: i + 1,
  name: `Row ${i + 1}`,
}));

export default function App() {
  return (
    <div style={{ padding: 16, fontFamily: "system-ui" }}>
      <h1 style={{ margin: 0, marginBottom: 12 }}>RDT — Pagination v4 (Minimal)</h1>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={7}
        paginationComponentOptions={{
          noRowsPerPage: true, // hide the selector
          rangeSeparatorText: "of",
        }}
      />
    </div>
  );
}
