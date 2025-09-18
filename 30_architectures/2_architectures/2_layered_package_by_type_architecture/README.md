# 05 — Layered / Package-by-Type Architecture in React

## 🧠 Theory

This project uses a **folder-by-type organization** (also called **package-by-layer** or **package-by-type**),
where files are grouped by their **technical role** rather than by feature:

- `components/` → reusable UI elements
- `pages/` → page-level components (mapped to routes)
- `hooks/` → custom React hooks
- `services/` → API/data access
- `utils/` → generic helper functions
- `styles/` → CSS, themes, or style modules

This is the natural evolution after **flat `src/`**, introducing **layer separation** but not yet feature encapsulation.

---

### 📜 Other Common Names

- Layered architecture
- Package-by-layer
- Package-by-type
- Folder-by-concern
- Horizontal slicing

---

### 📌 Description

- Encourages separation of concerns between **UI, state, and data access**.
- Easy to teach and navigate: “look in `components/` for UI, `services/` for API, etc.”
- Still scales reasonably well for **small/medium projects** or teams just starting out.

---

### ✅ Pros

- Simple, familiar, and intuitive for beginners.
- Clear technical separation (UI vs logic vs data).
- Works well when building a design system of reusable components.

### ❌ Cons

- A single feature (e.g., “Login”) touches many folders → changes are **scattered**.
- Harder to refactor feature boundaries.
- Teams may prefer **feature folders** as apps grow.

---

## 🕰️ Historical Context

- **2000s (Java/.NET world)** – “Package-by-layer” was the default: UI layer, service layer, DAO layer.
- **2016 (Create React App)** – popularized the `src/components`, `src/services`, `src/utils` convention.
- **Today** – Many React projects start here, then migrate to **feature-based** or **component-based** architectures once the app grows.

---

## 📁 Folder Structure

```
./
├── index.html
├── vite.config.js
├── .eslintrc.cjs
├── package.json
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Button.jsx
    │   └── Card.jsx
    ├── hooks/
    │   └── useAuth.js
    ├── pages/
    │   ├── HomePage.jsx
    │   └── AboutPage.jsx
    ├── services/
    │   └── api.js
    ├── styles/
    │   └── theme.css
    └── utils/
        └── helpers.js
```

---

## 📚 Related Patterns

| Pattern / Term                  | What it means                                                                 |
| ------------------------------- | ----------------------------------------------------------------------------- |
| **Package-by-Feature**          | Group files for one feature (UI + logic + data) together → improves locality. |
| **Package-by-Component**        | Organize around coarse components; layers live inside each component package. |
| **Clean/Hexagonal/Onion**       | Domain-centric layering with dependency rules; not folder-prescriptive.       |
| **Feature-Sliced Design (FSD)** | Modern front-end methodology combining layered + feature segmentation.        |

---

## Quick glossary

- **Layer** → Logical grouping by responsibility (UI, domain, data).
- **Tier** → Deployment separation of a layer (browser vs API server vs DB).
- **Horizontal slice** → Group by type (this repo’s style).
- **Vertical slice** → Group by feature (alternative style).

---

## ▶️ Run It

1. `npm install`
2. `npm run dev`
3. Visit `http://localhost:5173` → HomePage and AboutPage render using layered structure.

---

## 📚 References

- Martin Fowler — [Presentation-Domain-Data Layering](https://martinfowler.com/bliki/PresentationDomainDataLayering.html)
- O’Reilly — [_Software Architecture Patterns: Layered Architecture_](https://www.oreilly.com/library/view/software-architecture-patterns/9781098134280/ch03.html)
- Wikipedia — [Multitier (N-tier) architecture](https://en.wikipedia.org/wiki/Multitier_architecture)
- React docs — [Project structure](https://react.dev/learn/project-structure)
- Redux Style Guide — [Structure files as feature folders](https://redux.js.org/style-guide/)
- Simon Brown — [Package by component](https://dzone.com/articles/package-component-and)
- Feature-Sliced Design — [Overview](https://feature-sliced.design/docs/get-started/overview)
