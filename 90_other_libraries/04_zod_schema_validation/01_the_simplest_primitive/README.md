# 01 — The Simplest Primitive

This project demonstrates the **absolute simplest form** of schema validation using [Zod](https://zod.dev/).

---

## 📖 What is Zod?

Zod is a schema declaration and validation library. Instead of writing manual checks like:

```javascript
// The old, painful way
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  // throw error
}
```

With Zod v4, it becomes purely declarative:
```javascript
// The Zod v4 way — z.email() is a top-level method, not chained on z.string()
const emailSchema = z.email();
emailSchema.parse(email); // throws if invalid
```

Historically, libraries like **Joi** and **Yup** pioneered this idea. Zod improved on them with a friendlier API and TypeScript inference. Even in plain JavaScript it remains the modern standard.

---

## 🔑 Zod v4 API Change

In Zod v4, common string format validators moved from chained methods to **top-level functions**:

| ❌ v3 (deprecated)       | ✅ v4 (current)  |
| ------------------------ | ---------------- |
| `z.string().email()`     | `z.email()`      |
| `z.string().url()`       | `z.url()`        |
| `z.string().uuid()`      | `z.uuid()`       |

All examples in this module use the v4 API.

---

## ⚙️ What this project does

- Defines a single schema: `z.email("Invalid email format")`.
- Validates the value in real-time as the user types using `safeParse`.
- Shows a red error or a green success message — no form, no objects.

---

## 🚀 Running the project

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).
