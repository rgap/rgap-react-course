// server.js — minimal fake API
import cors from "cors";
import express from "express";

const app = express();
app.use(cors());

const TOTAL = 103;
const ALL = Array.from({ length: TOTAL }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  note: `This is row #${i + 1} from a longer dataset.`,
}));

app.get("/items", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  const start = (page - 1) * perPage;
  const slice = ALL.slice(start, start + perPage);
  res.json({ rows: slice, total: TOTAL });
});

app.listen(4000, () => console.log("API running on http://localhost:4000"));
