# 01 — Basic React Data Table Example

This project shows the **simplest possible usage** of the [React Data Table Component (RDT)](https://www.npmjs.com/package/react-data-table-component).

---

## 📖 What is RDT?

React Data Table Component is a popular React library that lets you build interactive and customizable data tables with **minimal boilerplate**.

Instead of manually writing `<table><tr><td>` markup, you declare:

- **Columns** → configuration objects with `name` (header) and `selector` (how to extract values from data rows).
- **Data** → an array of objects representing your rows.

RDT takes care of rendering the table structure.

---

## ⚙️ What this project does

- Installs `react-data-table-component`.
- Defines two columns: **Title** and **Year**.
- Supplies three rows of sample movie data.
- Renders a `<DataTable>` component with the columns + data.

That’s it — the bare minimum table.

---

## 🏛 Historical Context

- In **early web apps**, tables were written with raw HTML `<table>`, `<tr>`, `<td>` markup. Styling and interaction (sorting, pagination) had to be coded manually or with jQuery plugins (like **DataTables.js**, created in 2008).
- With **React (2013+)**, developers wanted **declarative, component-based tables**. Several libraries emerged to replace jQuery DataTables in a React-friendly way.
- **React Data Table Component (RDT)** appeared around 2018, designed as a **lightweight, declarative alternative** to heavy table libraries. It quickly gained traction because:

  - It works with plain arrays of objects.
  - It has built-in support for sorting, pagination, selectable rows, expandable rows, and theming.
  - It doesn’t require CSS frameworks (but integrates easily if you want).

---

## 🚀 Running the project

```bash
npm install
npm install react-data-table-component
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the table.
