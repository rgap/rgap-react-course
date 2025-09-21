# 01 — Basic TanStack Table Example

This project shows the **simplest possible usage** of [TanStack Table (React)](https://tanstack.com/table/latest).

---

## 📖 What is TanStack Table?

**TanStack Table** (formerly React Table) is a headless table library for React. It gives you the **data model and utilities** for rows, columns, sorting, pagination, etc.—and lets **you** render the markup (usually a plain `<table>`). That means:

- **Columns** → configuration objects with `header` (what to show) and `accessorKey` (which field from each row).
- **Data** → an array of objects (your rows).

You control the DOM and styling; TanStack Table handles the logic.

---

## ⚙️ What this project does

- Installs `@tanstack/react-table`.
- Defines two columns: **Title** and **Year** (via `accessorKey`).
- Supplies three rows of sample movie data.
- Builds a table instance with `useReactTable` and renders a plain HTML `<table>` using `flexRender`.

That’s it — the bare-minimum table.

---

## 🏛 Historical Context

- Early apps wrote raw `<table><tr><td>` markup and added behavior with custom JS or jQuery plugins (e.g., **DataTables.js**, 2008).
- With **React**, developers wanted **declarative data → UI**. Libraries emerged with different philosophies:

  - **Batteries-included** components (pre-styled table UI out of the box).
  - **Headless** utilities (logic only, **you** render HTML/CSS).

- **TanStack Table** is the headless approach:

  - Full control over markup and styling (CSS, Tailwind, styled-components, anything).
  - Powerful APIs for sorting, filtering, grouping, virtualization, server-side features.
  - No CSS framework required or imposed.

---

## 🚀 Running the project

```bash
npm install
npm install @tanstack/react-table
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the table.
