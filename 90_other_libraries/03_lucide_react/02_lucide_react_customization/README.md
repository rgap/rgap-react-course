# 02 — Lucide React Customization

This project demonstrates how to **customize and style** icons using [Lucide React](https://lucide.dev/guide/packages/lucide-react).

---

## 📖 Customizing Icons

By default, Lucide icons render as 24x24 pixel SVGs with a stroke width of 2, inheriting the current text color (`currentColor`). However, they are designed to be extremely flexible.

You can customize them by passing props directly to the component:

- **`color`**: Changes the stroke color of the icon.
- **`size`**: Adjusts the width and height of the icon (can be a number for pixels or a string like `"2rem"`).
- **`strokeWidth`**: Alters the thickness of the icon lines (default is `2`).
- **`className`**: Allows you to apply custom CSS classes or Tailwind classes for styling.

---

## ⚙️ What this project does

- Installs `lucide-react`.
- Imports a single icon (**Camera**) to showcase various styles.
- Renders multiple instances of the icon, each with different props:
  - Custom colors (e.g., `color="red"`).
  - Increased sizes (e.g., `size={64}`).
  - Modified stroke widths (e.g., `strokeWidth={1}` for a thin look, and `strokeWidth={3}` for a bold look).

This allows you to see how easily Lucide adapts to different design requirements without needing complex CSS.

---

## 🚀 Running the project

```bash
npm install
npm install lucide-react
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the customized icons.
