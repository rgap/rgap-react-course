import DataTable from "react-data-table-component";

// -----------------------------
// Define the table structure
// -----------------------------
// "columns" tells RDT what columns exist in the table and
// how to map data fields into them.
const columns = [
  { name: "Title", selector: r => r.title },
  { name: "Year", selector: r => r.year },
];

// -----------------------------
// Provide some sample data
// -----------------------------
// This is static for now, but later projects will show
// how to load dynamic or server-side data.
const data = [
  { id: 1, title: "Conan the Barbarian", year: 1982 },
  { id: 2, title: "The Terminator", year: 1984 },
  { id: 3, title: "Predator", year: 1987 },
];

// -----------------------------
// App component renders the DataTable
// -----------------------------
// The <DataTable> component is provided by
// "react-data-table-component" (RDT).
export default function App() {
  return (
    <div>
      <h2>01 — Basic</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
