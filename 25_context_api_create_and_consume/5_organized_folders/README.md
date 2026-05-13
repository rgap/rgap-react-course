# 5. Context API – Organized Folders

Same logic as **4_usecontext_to_consume**, but the code is split into the
conventional folder structure you will use in real projects.

---

## Folder Structure

```
src/
├── contexts/
│   └── UserContext.js        ← createContext lives here
├── providers/
│   └── UserProvider.jsx      ← useState + Provider live here
├── components/
│   ├── Header.jsx            ← middleman (no user prop)
│   ├── Dashboard.jsx         ← middleman (no user prop)
│   ├── UserBadge.jsx         ← consumer: reads user.role
│   └── UserGreeting.jsx      ← consumer: reads user.*
├── App.jsx                   ← composes everything
└── main.jsx                  ← ReactDOM entry point
```

---

## Why Split Into Folders?

| File | Responsibility |
|------|----------------|
| `contexts/UserContext.js` | Single source of truth for the context object. Imported by both the Provider and any consumer. |
| `providers/UserProvider.jsx` | Owns state (`useState`). Wraps children with `<UserContext.Provider value={…}>`. |
| `components/*.jsx` | Pure UI pieces. Consumers call `useContext` directly — no prop drilling. |
| `App.jsx` | Thin orchestrator. Wraps the tree with `<UserProvider>`. |

---

## The 3-Step Flow (unchanged)

```txt
1. Create   →  createContext(null)              in contexts/UserContext.js
2. Provide  →  <UserContext.Provider value={…}> in providers/UserProvider.jsx
3. Consume  →  useContext(UserContext)           in any component file
```

---

## Key Difference vs. 4_usecontext_to_consume

In the previous example every piece (context, provider, consumers) lived in
`App.jsx`. Here each piece lives in its own dedicated file, which is the
pattern you will see in every professional React codebase.

The runtime behaviour is **identical** — this is purely an organisational
improvement.
