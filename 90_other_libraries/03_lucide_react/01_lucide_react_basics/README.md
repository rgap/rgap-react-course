# 01 — Basic Lucide React Example

This project shows the **simplest possible usage** of [Lucide React](https://lucide.dev/guide/packages/lucide-react).

---

## 📖 What is Lucide React?

Lucide is a beautiful and consistent icon toolkit made by the community as a fork of Feather Icons. `lucide-react` is the official React package that allows you to use these SVG icons directly as React components.

Instead of manually writing `<svg>` paths or dealing with image files, you declare:

- **Imports** → Import specific icon components (e.g., `Home`, `User`, `Settings`) directly from `lucide-react`.
- **Components** → Render them just like any other React component (e.g., `<Home />`).

Lucide takes care of rendering the optimized SVG tags.

---

## ⚙️ What this project does

- Installs `lucide-react`.
- Imports three common icons: **Home**, **User**, and **Settings**.
- Renders them within a simple React application using standard component syntax.

That’s it — the bare minimum setup to get beautiful, consistent icons in your project.

---

## 🏛 Historical Context

- In **early web apps**, icons were usually image sprites (PNG/GIF) or icon fonts (like FontAwesome). These were heavy, hard to customize with CSS, and suffered from anti-aliasing issues.
- With **React and SVG**, developers realized they could inline SVGs directly in JSX for perfect scaling and CSS control. However, managing hundreds of raw SVG paths was tedious.
- Libraries like `react-icons` aggregated many icon sets, but designers often wanted a single, cohesive set.
- **Feather Icons** became hugely popular for its clean, minimalist design. However, it stopped being actively maintained.
- **Lucide** was born as a community-driven fork of Feather, continuing its legacy while massively expanding the icon library and providing seamless React integration via `lucide-react`.

---

## 🚀 Running the project

```bash
npm install
npm install lucide-react
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the icons.
