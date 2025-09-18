# 02 — All-in-One Index File

## 🧠 Theory

This setup takes the **first real step beyond CDN** by introducing npm and a build tool (like Vite or Webpack).
Instead of writing React inline in an HTML file, you now create an **`index.jsx`** that contains everything: imports, components, and rendering logic.

All application logic is centralized in this single file, which is compiled by the build tool into browser-ready JavaScript.

---

### 📜 Other Common Names

- Single-file React app
- One-entry setup
- Minimal npm React

---

### 📌 Description

- React and ReactDOM are installed via npm.
- Your `index.jsx` imports React and renders directly.
- `package.json` manages dependencies.
- An `index.html` file points to the bundled JavaScript.

This is still **very small-scale**, but it’s the bridge between “React via CDN” and more structured projects.

---

### ✅ When to Use

- Learning how React projects look when installed via npm.
- Prototyping very small apps.
- Transition step before splitting components into separate files.

---

### ⚠️ Limitations

- Everything in one file → messy as soon as you add more components.
- Not maintainable for medium/large projects.
- No separation of concerns.

---

## 🕰️ Historical Context

- **2014–2015** – As npm usage grew, developers moved from script tags to npm modules.
- **2016** – Create React App popularized this “single entry file” setup, putting all starter code in `index.js`.
- **Now** – Tools like Vite and Next.js still start from a similar pattern, but encourage splitting components early.

---

## 📁 Folder Structure

```
02_all_in_one_index_file/
├── README.md            # This file
└── example/
    ├── index.html       # HTML entry point
    ├── package.json     # npm dependencies
    └── index.jsx        # React app (all in one file)
```

---

## ▶️ Run It

1. `cd example`
2. `npm install`
3. `npm run dev` (if using Vite)
4. Open in browser → the React app will render from `index.jsx`.

---
