# 04 — Flat `src/` Architecture

## 🧠 Theory

This is the **default layout** for many React starters (including Create React App):
all source files live in a single `src/` folder without deeper organization.

- **`index.jsx`** → Bootstraps the React app.
- **`App.jsx`** → Main application component.
- **`styles.css`** → Global stylesheet.
- **`utils.js`** → A place for helper functions.

Everything is flat and easy to find, but as the project grows, this becomes **hard to maintain**.

---

### 📜 Other Common Names

- Flat architecture
- Monolithic `src`
- All-in-one folder

---

### 📌 Description

- Encourages quick start: throw everything in `/src`.
- Works fine for **small apps or prototypes**.
- Becomes confusing when features/components multiply.

---

### ✅ When to Use

- Small apps, demos, or proofs of concept.
- Hackathons or one-off projects.
- Beginners who want simplicity.

---

### ⚠️ Limitations

- Hard to scale → all files mixed together.
- No clear separation by type or feature.
- Teams may step on each other’s toes in one folder.

---

## 🕰️ Historical Context

- **2016–2020** – CRA (Create React App) set this as the “standard” layout: all code inside `/src`.
- Many tutorials still use this structure because it is simple and avoids complexity.
- As apps grow, most teams migrate to **by-type** or **by-feature** folders.

---

## 📁 Folder Structure

```
04_flat_src/
├── README.md
└── example/
    ├── index.html
    ├── package.json
    └── src/
        ├── index.jsx     # Entry point
        ├── App.jsx       # Root component
        ├── utils.js      # Helper functions
        └── styles.css    # Global styles
```

---

## ▶️ Run It

1. `cd example`
2. `npm install`
3. `npm run dev` (Vite or similar)
4. Open in browser → app runs with everything in one flat folder.

---
