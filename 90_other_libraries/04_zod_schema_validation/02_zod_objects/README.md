# 02 — Zod Objects

Builds on `01`. Now instead of validating a single value, we validate a **whole object** with multiple fields at once.

---

## 📖 From Primitives to Objects

In the previous example we had one rule: `z.email()`. Real data is rarely that simple. A user object has a name, an email, an age — each with its own constraints.

`z.object()` lets you define all of those rules in one blueprint:

```javascript
const UserSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  age:   z.number().min(18),
});
```

Zod then validates the entire object in one call and reports **all errors at once**.

---

## 🔑 `parse` vs `safeParse`

| Method        | On failure         | Use when                            |
| ------------- | ------------------ | ----------------------------------- |
| `parse(data)` | **Throws** an error | You want to crash fast              |
| `safeParse(data)` | Returns `{ success, data, error }` | You want to handle errors gracefully |

This project uses `safeParse` and reads `result.error.flatten()` to surface per-field messages.

---

## ⚙️ What this project does

- Defines a `UserSchema` with `name`, `email`, and `age` constraints.
- Provides two mock payloads: one valid, one invalid.
- Validates on button click and displays parsed data or all error messages.

---

## 🚀 Running the project

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).
