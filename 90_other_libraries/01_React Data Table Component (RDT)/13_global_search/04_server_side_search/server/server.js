// server.js — global search + server-side pagination
import cors from "cors";
import express from "express";

const app = express();
app.use(cors());

// Fake dataset
const TOTAL = 103;
const ALL = Array.from({ length: TOTAL }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  note: `This is row #${i + 1} from a longer dataset.`,
}));

/**
 * GET /items?q=&page=&perPage=
 * - q: string, case-insensitive global search across id/name/note
 * - page: 1-based
 * - perPage: page size
 * Returns: { rows, total, page, perPage }
 */
app.get("/items", (req, res) => {
  const q = String(req.query.q ?? "").trim().toLowerCase();
  const page = Math.max(parseInt(req.query.page) || 1, 1);
  const perPage = Math.max(parseInt(req.query.perPage) || 10, 1);

  const filtered = q
    ? ALL.filter(r =>
        [r.id, r.name, r.note]
          .map(v => String(v).toLowerCase())
          .some(v => v.includes(q))
      )
    : ALL;

  const total = filtered.length;
  const start = (page - 1) * perPage;
  const rows = filtered.slice(start, start + perPage);

  res.json({ rows, total, page, perPage });
});

app.listen(4000, () => console.log("API running on http://localhost:4000"));
