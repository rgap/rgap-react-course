# 03 — Split Entry Point and App Component

## 🧠 Theory

This is the **first real structural improvement** in React projects.
Instead of keeping everything inside `index.jsx`, we **split responsibilities**:

- **`index.jsx`** → App entry point (bootstrapping, ReactDOM root).
- **`App.jsx`** → Main component of the application (UI definition).

This makes the project slightly more modular and mirrors how larger React apps are typically structured.

---

### 📜 Other Common Names

- Two-file React setup
- Entry/App split
- Minimal modular setup

---

### 📌 Description

- `index.jsx` focuses only on rendering.
- `App.jsx` defines your root component.
- `index.html` still just provides the mount point.
- `package.json` manages dependencies and build commands.

This is the **simplest scalable structure** — even big React apps still keep this pattern at the top level.

---

### ✅ When to Use

- Teaching newcomers about **separation of concerns**.
- Starting any React app (this is the usual baseline).
- Building small to medium apps before further splitting features.

---

### ⚠️ Limitations

- Still too flat — as the app grows, everything ends up in `/src`.
- Only separates entry from app, not features or UI layers.

---

## 🕰️ Historical Context

- **2016** – Create React App popularized this pattern: `index.js` bootstraps the app, `App.js` defines the main UI.
- **Today** – This split remains the **default convention** in almost all modern React boilerplates and frameworks.

---

## 📁 Folder Structure

```
03_split_entry_and_app/
├── README.md            # This file
└── example/
    ├── index.html       # HTML entry point
    ├── package.json     # npm dependencies
    ├── index.jsx        # Entry point (ReactDOM root)
    └── App.jsx          # Main App component
```

---

## ▶️ Run It

1. `cd example`
2. `npm install`
3. `npm run dev` (Vite or similar)
4. The browser shows your `App` component rendered through `index.jsx`.

---
