// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON data

// Proxy endpoint for payment processing
app.post("/stripe-mock/v1/charges", async (req, res) => {
  // Mimicking a forward to Stripe Mock (this should actually be done by making an HTTP request to Stripe Mock)
  console.log("Received payment data:", req.body);
  res.json({ message: "Payment processed successfully!", data: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
