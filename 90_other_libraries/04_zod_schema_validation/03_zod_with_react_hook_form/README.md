# 03 — Zod with React Hook Form

Builds on `02`. The schema is the same idea, but now it **drives a real form** instead of validating mock data by hand.

---

## 📖 The Problem with Manual Form Validation

In `02` we called `safeParse` ourselves and handled errors manually. In a real form you also need to:

- Track which fields have been touched.
- Re-validate on every keystroke.
- Prevent submit when invalid.
- Map error messages back to each input.

That's a lot of wiring. **React Hook Form** handles all of it. **`@hookform/resolvers/zod`** connects your Zod schema directly to RHF so you get all of that for free.

```javascript
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(SignUpSchema),
});
```

---

## 🔑 New concept: `z.object().refine()`

`.refine()` adds a **cross-field rule** — a rule that can't be expressed on a single field alone:

```javascript
const SignUpSchema = z.object({
  password:        z.string().min(6),
  confirmPassword: z.string(),
}).refine(
  (data) => data.password === data.confirmPassword,
  { message: "Passwords don't match", path: ["confirmPassword"] }
);
```

The `path` tells Zod which field to attach the error to.

---

## ⚙️ What this project does

- Defines a `SignUpSchema` with username, email, password, and confirm password.
- Uses `.refine()` to enforce password matching.
- Connects the schema to RHF via `zodResolver`.
- Each input's error message renders automatically from `formState.errors`.

---

## 🚀 Running the project

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).
